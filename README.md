# Drichiru Faith - Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and experience in software development, AI, and fintech.

## Features

- Modern dark theme with smooth animations
- Responsive design for all devices
- Interactive project cards with hover effects
- Backend contact form with email notifications
- ASR (Automatic Speech Recognition) project showcase
- Smooth scrolling navigation

## Tech Stack

### Frontend
- HTML5
- CSS3 (Custom animations & transitions)
- Vanilla JavaScript

### Backend
- Node.js
- Express.js
- Nodemailer (Email handling)
- CORS enabled

## Setup Instructions

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

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
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

### Enhanced UI/UX
- Floating gradient background animation
- Fade-in animations on scroll
- Hover effects on cards, buttons, and skills
- Smooth transitions throughout
- Focus states for form inputs

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
1. ASR (Automatic Speech Recognition) System
2. Electronic NID Registration System
3. Grocery POS System
4. SheBank - Hackathon Project
5. Academic Research - AI & Fintech

## Deployment

### Deploy to Heroku
```bash
heroku create
git push heroku main
heroku config:set EMAIL_USER=your-email
heroku config:set EMAIL_PASS=your-password
```

### Deploy to Vercel
```bash
vercel
```

### Deploy to Railway
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
