# Professional Mobile Developer Portfolio

A modern, responsive portfolio website for a Mobile Developer specializing in Flutter, AI integration, and IoT technologies. Built with Next.js 16, React 19, Tailwind CSS, and Framer Motion.

## Features

✨ **Modern Design**
- Dark theme with tech-inspired blue accents
- Responsive mobile-first design
- Smooth animations and transitions with Framer Motion
- Professional typography and color scheme

📱 **Complete Sections**
- **Hero Section** - Eye-catching introduction with CTA buttons
- **About Me** - Professional background, education, and focus areas
- **Skills** - Technical skills with progress bars and tools
- **Projects** - Detailed project showcases with problem/solution approach
- **Experience** - Achievements, competitions, and freelance work
- **Testimonials** - Client feedback and ratings
- **Contact** - Contact form and social media links
- **Footer** - Quick links and social connections

⚡ **Performance**
- Optimized images with Next.js Image
- Smooth scroll behavior
- Efficient animations
- Fast loading times

♿ **Accessibility**
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where appropriate
- Keyboard navigation support

🔍 **SEO Optimized**
- Proper metadata and descriptions
- Semantic HTML
- Structured heading hierarchy
- Mobile-friendly viewport settings

## Tech Stack

- **Frontend Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image
- **Theme Management**: next-themes

## Installation

### Using shadcn CLI (Recommended)

```bash
npx shadcn-cli@latest init
npm run dev
```

### Manual Installation

```bash
git clone <repository-url>
cd portfolio
npm install
npm run dev
```

The site will be available at `http://localhost:3000`

## Project Structure

```
app/
├── layout.tsx          # Root layout with theme provider
├── page.tsx            # Main page with all sections
└── globals.css         # Global styles and theme variables

components/
├── navigation.tsx      # Sticky navigation with mobile menu
├── hero.tsx            # Hero section with CTA
├── about.tsx           # About and background section
├── skills.tsx          # Skills with progress bars
├── projects.tsx        # Project showcase with details
├── experience.tsx      # Experience and achievements
├── testimonials.tsx    # Client testimonials
├── contact.tsx         # Contact form and info
└── footer.tsx          # Footer with links
```

## Customization

### Update Personal Information

Edit the component files to add your:
- Name and profession
- Professional photo (replace `/public/avatar.jpg`)
- Education details in `about.tsx`
- Technical skills in `skills.tsx`
- Projects and descriptions in `projects.tsx`
- Contact information in `contact.tsx`
- Testimonials in `testimonials.tsx`

### Modify Colors

Edit the theme variables in `app/globals.css`:
```css
.dark {
  --primary: #58a6ff;      /* Main brand color */
  --accent: #58a6ff;       /* Accent color */
  /* ... other colors ... */
}
```

### Update Navigation Links

Modify the navigation items in `components/navigation.tsx` section navigation.

## Features Highlight

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Smooth transitions between breakpoints

### Animation
- Staggered item animations
- Hover effects
- Scroll-triggered animations
- Smooth page transitions

### Contact Form
- Client-side validation
- Success feedback
- Easy integration with email service

### Project Showcase
- High-quality project images
- Problem and solution description
- Technology tags
- Links to GitHub and demo

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The project is compatible with any Next.js hosting:
- Netlify
- GitHub Pages
- Self-hosted servers

## Performance Optimization

- Lazy loading components
- Image optimization
- CSS-in-JS optimization
- Bundle size optimization

## Accessibility

- Proper semantic HTML
- Keyboard navigation
- Screen reader friendly
- WCAG 2.1 AA compliant

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or improvements, feel free to reach out through the contact form or social media links provided in the portfolio.

---

Made with ❤️ by Your Name
