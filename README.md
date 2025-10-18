# Ronny's Food Truck - Landing Page

A modern retro-styled landing page for Ronny's Food Truck, specializing in desserts and snacks in Ecatepec, Mexico.

![Hero Section](https://github.com/user-attachments/assets/89cd15cb-7a45-4c30-8955-00a8f8825c32)

## 🎯 About the Project

Ronny's Food Truck is a vibrant, mobile dessert and snack business located in Las Vegas, Ecatepec. This landing page showcases their delicious offerings with a retro aesthetic featuring bold colors (red, black, gold, and yellow) and smooth LED-style animations.

The name comes from **Ronny**, the family's beloved chihuahua mascot, whose adorable face is the star of this sweet dream on wheels!

## ✨ Key Features

### Hero Section
- Eye-catching retro design with neon-style branding
- Prominent Ronny chihuahua logo with LED glow effects
- Clear call-to-action button to view the menu
- Fully responsive across all devices

### About Section
![About Section](https://github.com/user-attachments/assets/e76f5278-55ca-4313-bddf-50b1c6c8f202)

"Everything started with my passion for cooking and playing food games. What began as fun turned into passion, and that passion transformed into Ronny's, our food truck on wheels."

### Menu Section
![Menu Section](https://github.com/user-attachments/assets/794ac0e7-86df-4305-b5aa-28fa40b7faed)

The menu features a wide variety of desserts and snacks:

- **Crepes** - Simple ($45 MXN), with fruit ($55), with fruit and ice cream ($65)
  - Nutella, Cajeta, Blackberry with cheese, Strawberry with cheese
- **Waffles** - Simple ($55 MXN), with fruit ($65), with fruit and ice cream ($75)
  - Cajeta, Nutella, Strawberry, Maple, Condensed milk
- **Pancakes** - Simple ($50 MXN), with fruit ($60)
  - Nutella, Strawberry, Cajeta, Maple, Condensed milk
- **Snacks** - Salchipapas ($55), French fries ($40), Salchipulpos ($55), Maruchan ($30), Nachos ($45), Loaded fries ($25)
- **Beverages** - Cappuccino ($35), Americano ($22), Milkshakes ($55)
  - Flavors: Strawberry, Vanilla, Chocolate, Cookie
- **Cream Desserts** - Strawberries with cream ($60), Bananas with cream ($50), Peaches with cream ($50)
- **Flan** - Neapolitan flan ($42)

**Special Promotion:** 2 milkshakes for $100 MXN every Friday! ⭐

### Location Section
- Google Maps integration showing their location in Las Vegas, Ecatepec
- Clear address and call-to-action to visit

### Customer Reviews
- Star ratings and testimonials from satisfied customers
- Social proof to build trust

### Contact Section
- Contact form with email integration (using Resend)
- Social media links (WhatsApp, Instagram, TikTok, Facebook, X/Twitter)

## 🚀 Technologies

- **React 19** - Modern JavaScript library for building user interfaces
- **Next.js 15.2.4** (App Router) - React framework with server-side rendering
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui components** - Beautiful, accessible UI components
- **Resend** - Email service for contact form

## 📦 Installation

\`\`\`bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 📧 Email Configuration (Resend)

The contact form uses Resend to send emails. To configure it:

### 1. Create a Resend Account

1. Go to [resend.com](https://resend.com) and create a free account
2. Verify your email

### 2. Get API Key

1. In the Resend dashboard, go to "API Keys"
2. Create a new API key
3. Copy the key (starts with `re_`)

### 3. Configure Environment Variable

Add the environment variable:

- **Name**: `RESEND_API_KEY`
- **Value**: Your Resend API key (e.g., `re_123abc...`)

### 4. Configure Destination Email

Edit the `app/actions.tsx` file and change:

\`\`\`typescript
to: ["your-email@example.com"], // Change this to your real email
\`\`\`

### 5. Verify Domain (Optional - For Production)

To use a custom domain in production:

1. In Resend, go to "Domains"
2. Add your domain
3. Configure DNS records according to the instructions
4. Update the `from` field in `app/actions.tsx`:

\`\`\`typescript
from: "Ronny's Food Truck <contact@yourdomain.com>",
\`\`\`

**Note**: In development, you can use `onboarding@resend.dev` as the sender.

## 🌐 Local Development

The project will be available at `http://localhost:3000`

## 🎨 Design Features

- **Retro Aesthetic**: Bold red and yellow color scheme reminiscent of classic diners
- **LED Effects**: Glowing animations on logos and decorative elements
- **Paw Prints**: Cute chihuahua paw print decorations throughout the page
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Smooth Animations**: Subtle transitions and hover effects for enhanced user experience
- **Accessibility**: Built with semantic HTML and accessible components

## 📝 Future Enhancements

- ✅ Backend integration for contact form (Resend)
- Add more real images of the food truck and products
- Implement online ordering system
- Add customer photo gallery
- Integrate real-time availability updates

## 🐕 About Ronny

Ronny is the beloved chihuahua mascot, represented as an LED logo on the food truck. He's the face of this sweet dream on wheels!

## 📄 License

© 2025 Ronny Food Truck. All rights reserved.

---

**Sweetness on Wheels** 🚚✨
