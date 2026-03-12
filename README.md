# Drichiru Faith - Portfolio Website

An elegant, responsive portfolio website showcasing projects, skills, and experience in software development, AI, fintech, data engineering, and analytics.

## Features

- Elegant light theme with warm cream background and gold accents
- Sophisticated typography (Playfair Display + Inter fonts)
- Responsive design for all devices
- Interactive project cards with smooth hover effects
- Contact form with Formspree integration (works without backend)
- Optional Node.js backend for custom email handling
- ASR (Automatic Speech Recognition) project showcase
- Smooth scrolling navigation and animations

## Tech Stack

### Frontend
- HTML5
- CSS3 (Custom animations, gradients & transitions)
- Vanilla JavaScript
- Google Fonts (Playfair Display, Inter)

### Backend (Optional)
- Node.js
- Express.js
- Nodemailer (Email handling)
- CORS enabled
- Rate limiting for security

## Quick Start (No Server Needed)

The portfolio works as a standalone HTML file with Formspree for contact form:

1. Simply open `index.html` in your browser
2. Contact form sends emails via Formspree
3. All features work immediately

## Setup with Node.js Backend (Optional)

If you want to use the custom backend for email handling:

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
```bash
cp .env.example .env
```

Edit `.env` and add your email credentials:
- For Gmail: Enable 2-Step Verification and generate an App Password
- Update `EMAIL_USER` and `EMAIL_PASS`

### 3. Run the Server

Production mode:
```bash
npm start
```

Development mode (with auto-reload):
```bash
npm run dev
```

### 4. Access the Portfolio
Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
.
├── index.html          # Main portfolio page
├── server.js           # Express backend server
├── package.json        # Dependencies
├── .env.example        # Environment variables template
├── faith.jpg           # Profile photo
├── public/
│   └── Drichiru_Faith_Resume.pdf
└── README.md
```

## Features Breakdown

### Design & UI/UX
- Elegant light theme with warm cream (#faf8f5) background
- Gold (#c9a961) and rose (#d4a5a5) accent colors
- Playfair Display serif font for headings
- Inter sans-serif font for body text
- Floating gradient background animation
- Fade-in animations on scroll
- Smooth hover effects on cards, buttons, and skills
- Interactive timeline for education
- Focus states for form inputs

### Technical Features
- No-cache configuration for development
- Gzip compression for production
- Rate limiting (3 messages per 15 min, 30 requests per min)
- Payload size limits (10KB)
- Form validation
- Responsive grid layout

### Backend API Endpoints

#### POST /api/contact
Submit contact form
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your message"
}
```

#### GET /api/health
Health check endpoint

### Projects Showcased
1. ASR (Automatic Speech Recognition) System - AI/ML, Python, NLP
2. Grocery POS System - UX, Backend
3. SheBank - Hackathon Project - Fintech, Security
4. Academic Research - AI & Fintech

### Skills Highlighted
- JavaScript, Python, HTML & CSS
- Node.js, React Native
- Databases, Git
- AI/ML, Data Analytics

## Deployment

The portfolio can be deployed as:
1. **Static site** (just HTML) - Fastest and simplest
2. **With Node.js backend** - For custom email handling

### Deploy Static Version (Recommended)

#### Netlify
```bash
# Drag and drop index.html to netlify.com
# Or use Netlify CLI
netlify deploy
```

#### Vercel
```bash
vercel --prod
```

#### GitHub Pages
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
# Enable GitHub Pages in repository settings
```

### Deploy with Backend

#### Heroku
```bash
heroku create
git push heroku main
heroku config:set EMAIL_USER=your-email
heroku config:set EMAIL_PASS=your-password
```

#### Railway
```bash
railway login
railway init
railway up
```

## Contact

- Email: faithdrichiru@gmail.com
- Portfolio: [Your deployed URL]

## License

MIT License - Feel free to use this template for your own portfolio!
