# Elite Limousine Services - Luxury Transportation Website

A modern, responsive website for Elite Limousine Services, showcasing premium luxury transportation services with a professional design and excellent user experience.

## 🚗 Features

### Core Pages
- **Home Page** - Hero section, services preview, fleet showcase, testimonials
- **Services Page** - Complete service offerings with detailed information
- **Service Detail Pages** - Individual service pages with comprehensive details
- **Fleet Page** - Luxury vehicle showcase with pricing and features
- **About Page** - Company story, mission, values, and team information
- **Contact Page** - Contact form, office locations, and FAQ section

### Design & UX Features
- **Modern Design** - Clean, professional aesthetic with luxury branding
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements** - Hover effects, smooth transitions, and animations
- **Professional Layout** - Well-structured sections with clear information hierarchy
- **Accessibility** - Focus states, semantic HTML, and keyboard navigation

### Technical Features
- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Comprehensive icon library
- **Dynamic Routing** - Service detail pages with dynamic URLs
- **Data-Driven** - All content managed through JSON data files

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Icons**: React Icons (FontAwesome)
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile Devices** (320px+)
- **Tablets** (768px+)
- **Desktop** (1024px+)
- **Large Screens** (1280px+)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd limousine-rental-zip
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
limousine-rental-zip/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── fleet/                    # Fleet showcase page
│   ├── services/                 # Services listing page
│   │   └── [serviceId]/         # Dynamic service detail pages
│   ├── components/               # Reusable components
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── public/                       # Static assets
│   └── data.json                 # Main data file
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
```

## 📊 Data Management

All website content is managed through the `public/data.json` file, including:
- Company information
- Services and features
- Vehicle fleet details
- Testimonials
- Contact information
- Pricing packages

This makes it easy to update content without touching the code.

## 🎨 Customization

### Colors
The primary color scheme can be modified in `app/globals.css`:
- Primary: `#ffc107` (Amber)
- Secondary: `#0f172a` (Slate 900)
- Surface: `#1e293b` (Slate 800)

### Content
Update the `public/data.json` file to modify:
- Company details
- Service offerings
- Vehicle information
- Contact details
- Testimonials

### Styling
Modify `app/globals.css` for:
- Color schemes
- Typography
- Spacing
- Animations
- Responsive breakpoints

## 📱 Mobile-First Design

The website follows mobile-first design principles:
- Responsive grid layouts
- Touch-friendly buttons and forms
- Optimized typography for small screens
- Efficient navigation for mobile users

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code quality
- Consistent code formatting
- Semantic HTML structure

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `.next` folder
3. Configure build settings

### Static Hosting
1. Build: `npm run build`
2. Export: `npm run export`
3. Upload generated files

## 📈 Performance Features

- **Optimized Images** - Responsive image handling
- **Code Splitting** - Automatic route-based code splitting
- **Static Generation** - Pre-rendered pages for fast loading
- **Minified CSS/JS** - Optimized bundle sizes
- **Lazy Loading** - Efficient resource loading

## 🔒 Security Features

- **Input Validation** - Form input sanitization
- **XSS Protection** - Built-in React security
- **HTTPS Ready** - Secure connection support
- **Content Security Policy** - XSS and injection protection

## 📞 Support

For questions or support:
- **Email**: info@elitelimo.com
- **Phone**: +1 (555) 123-4567
- **Hours**: 24/7 Service Available

## 📄 License

This project is proprietary software for Elite Limousine Services.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
