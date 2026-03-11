const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Rate limiting to prevent abuse
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3, // Limit each IP to 3 requests per windowMs
    message: { error: 'Too many messages sent. Please try again later.' },
    standardHeaders: true,
    legacyHeaders: false,
});

const generalLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 30, // Limit each IP to 30 requests per minute
    message: { error: 'Too many requests. Please slow down.' }
});

// Middleware
app.use(compression()); // Enable Gzip compression
app.use(cors());
app.use(express.json({ limit: '10kb' })); // Limit payload size
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(generalLimiter); // Apply rate limiting to all routes

// Serve static files with NO caching (for development)
app.use(express.static(path.join(__dirname), {
    maxAge: 0, // No cache
    etag: false,
    lastModified: false,
    setHeaders: (res) => {
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    }
}));

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Contact form endpoint with rate limiting
app.post('/api/contact', contactLimiter, async (req, res) => {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({ 
            error: 'All fields are required' 
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            error: 'Invalid email address' 
        });
    }

    try {
        // Configure email transporter (using Gmail as example)
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'faithdrichiru@gmail.com',
                pass: process.env.EMAIL_PASS || 'your-app-password'
            }
        });

        // Email options
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER || 'faithdrichiru@gmail.com',
            subject: `Portfolio Contact from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
            replyTo: email
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.json({ 
            message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ 
            error: 'Failed to send message. Please try again later.' 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
