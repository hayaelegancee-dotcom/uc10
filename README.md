# UC10 Professional Football Academy Website

A modern, responsive, and interactive website for UC10 Professional Football Academy built with HTML, CSS, and JavaScript.

## 🏆 Features

### Design & Style
- **Modern & Professional**: Sporty design with dark-green and gold accent color palette
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Scroll-triggered animations, hover effects, and transitions
- **Typography**: Google Fonts (Poppins for headings, Open Sans for body text)

### Website Sections (10 Total)
1. **Header/Navigation**: Fixed top navbar with smooth scrolling and mobile menu
2. **Hero Section**: Full-screen banner with football background and call-to-action
3. **About Us**: Academy description with animated statistics
4. **Programs & Training**: 5 training programs with icons and descriptions
5. **Coaching Staff**: Coach profiles with images and certifications
6. **Achievements**: Timeline of successes and player success stories
7. **Gallery**: Dynamic image grid with lightbox functionality
8. **Events**: Upcoming matches with countdown timer
9. **Testimonials**: Player and parent reviews with star ratings
10. **Contact & Registration**: Form with validation and contact information

### JavaScript Features
- **Smooth Scrolling**: Navigation with header offset
- **Gallery Lightbox**: Image popup with navigation controls
- **Form Validation**: Client-side validation for registration form
- **Countdown Timer**: Real-time countdown to next big event
- **Scroll Animations**: Fade-in and slide effects on scroll
- **Mobile Menu**: Hamburger menu for mobile devices
- **Parallax Effects**: Subtle background movement on scroll
- **Statistics Animation**: Animated number counters

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Ensure the `umar/` folder contains all gallery images
3. Open `index.html` in your web browser

### File Structure
```
uc10/
├── index.html          # Main HTML file
├── style.css           # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # This documentation
└── umar/               # Gallery images folder
    ├── WhatsApp Image 2025-06-28 at 23.46.49.jpeg
    ├── WhatsApp Image 2025-06-28 at 23.46.51.jpeg
    └── ... (60+ football images)
```

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization:
```css
:root {
    --primary-color: #1a4d2e;      /* Dark Green */
    --secondary-color: #d4af37;    /* Gold */
    --accent-color: #ffd700;       /* Bright Gold */
    --dark-color: #0d2b1a;         /* Darker Green */
    --light-color: #f8f9fa;        /* Light Gray */
}
```

### Images
- **Hero Background**: Update the background image in `style.css` (`.hero-backlay`)
- **Gallery**: Add/remove images from the `umar/` folder and update the `imageFiles` array in `script.js`
- **Coach Photos**: Replace coach images in the coaches section

### Content
- **Text Content**: Update all text content directly in `index.html`
- **Contact Information**: Modify phone, email, and address in the contact section
- **Events**: Update event dates and details in the events section

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

### Mobile Features
- Collapsible navigation menu
- Touch-friendly gallery navigation
- Optimized form inputs for mobile
- Responsive image grids

## 🔧 Technical Details

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- Lazy loading for images
- Debounced scroll events
- Optimized animations with CSS transforms
- Efficient DOM manipulation

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color scheme

## 🎯 Usage Examples

### Adding New Programs
1. Copy an existing program card in `index.html`
2. Update the icon, title, description, and features
3. Add corresponding CSS styles if needed

### Adding New Events
1. Copy an existing event item in the events section
2. Update the date, title, description, and time
3. Modify the countdown timer target date in `script.js`

### Adding New Testimonials
1. Copy an existing testimonial card
2. Update the image, quote, name, and role
3. Ensure the image is available in the `umar/` folder

## 🐛 Troubleshooting

### Common Issues
- **Images not loading**: Check that the `umar/` folder exists and contains the correct image files
- **Mobile menu not working**: Ensure JavaScript is enabled and the hamburger button has the correct ID
- **Animations not triggering**: Check that elements have the correct CSS classes (`fade-in`, `slide-in-left`, `slide-in-right`)

### Debug Mode
Enable console logging by adding this to `script.js`:
```javascript
const DEBUG = true;
if (DEBUG) console.log('Debug mode enabled');
```

## 📈 Future Enhancements

### Potential Features
- **Admin Panel**: Content management system for easy updates
- **Blog Section**: News and updates about the academy
- **Player Portal**: Individual player profiles and progress tracking
- **Online Booking**: Training session scheduling system
- **Social Media Integration**: Instagram feed and social sharing
- **Multi-language Support**: Arabic and English versions

### Performance Improvements
- **Image Optimization**: WebP format and responsive images
- **Lazy Loading**: Intersection Observer for better performance
- **Service Worker**: Offline functionality and caching
- **CDN Integration**: Faster content delivery

## 📞 Support

For technical support or customization requests:
- **Email**: info@uc10academy.com
- **Phone**: +971 50 123 4567

## 📄 License

This project is created for UC10 Professional Football Academy. All rights reserved.

---

**Built with ❤️ for the beautiful game of football** 