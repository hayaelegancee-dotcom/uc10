// UC10 Football Academy Website JavaScript
// Main functionality and interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initGallery();
    initCountdown();
    initScrollAnimations();
    initMobileMenu();
    
    // Immediate fallback: Make all content visible
    setTimeout(function() {
        const allAnimatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        allAnimatedElements.forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
});

// Navigation and Smooth Scrolling
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Gallery Lightbox
function initGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    // Debug: Check if gallery grid exists
    if (!galleryGrid) {
        console.error('Gallery grid not found!');
        return;
    }
    
    console.log('Gallery grid found, initializing...');

    // Load images dynamically from the umar folder
    const imageFiles = [
        'WhatsApp Image 2025-06-28 at 23.46.49.jpeg',
        'WhatsApp Image 2025-06-28 at 23.46.51.jpeg',
        'WhatsApp Image 2025-06-28 at 23.46.51 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.46.55.jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.01.jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.49.jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.49 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.49 (2).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.49 (3).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.50.jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.51.jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.51 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.51 (2).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.52.jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.52 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.52 (2).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.53.jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.53 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.53 (2).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.54.jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.54 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.54 (2).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.54 (3).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.55.jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.55 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.55 (2).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.56.jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.56 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.56 (2).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.57.jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.57 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.57 (2).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.58.jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.58 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.58 (2).jpeg',
        'WhatsApp Image 2025-06-28 at 23.47.59.jpeg',
        'WhatsApp Image 2025-06-28 at 23.53.29.jpeg',
        'WhatsApp Image 2025-06-28 at 23.54.05.jpeg',
        'WhatsApp Image 2025-06-28 at 23.54.06.jpeg',
        'WhatsApp Image 2025-06-28 at 23.54.06 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.54.07.jpeg',
        'WhatsApp Image 2025-06-28 at 23.54.07 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.54.08.jpeg',
        'WhatsApp Image 2025-06-28 at 23.54.08 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.54.09.jpeg',
        'WhatsApp Image 2025-06-28 at 23.54.09 (1).jpeg',
        'WhatsApp Image 2025-06-28 at 23.54.10.jpeg'
    ];

    let currentImageIndex = 0;

    // Create gallery items
    console.log(`Creating ${imageFiles.length} gallery items...`);
    
    imageFiles.forEach((imageFile, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-index', index);
        
        const img = document.createElement('img');
        img.src = imageFile;
        img.alt = `UC10 Football Academy - Image ${index + 1}`;
        img.loading = 'lazy';
        
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
        
        console.log(`Added gallery item ${index + 1}: ${imageFile}`);

        // Add click event to open lightbox
        galleryItem.addEventListener('click', function() {
            openLightbox(index);
        });
    });
    
    console.log('Gallery initialization complete!');

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImage.src = imageFiles[index];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Navigate to previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + imageFiles.length) % imageFiles.length;
        lightboxImage.src = imageFiles[currentImageIndex];
    }

    // Navigate to next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % imageFiles.length;
        lightboxImage.src = imageFiles[currentImageIndex];
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);

    // Close lightbox when clicking outside
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        }
    });
}

// Countdown Timer
function initCountdown() {
    // Set the target date (next big event)
    const targetDate = new Date('2024-12-15T00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            // Event has passed
            document.getElementById('event-countdown').innerHTML = '<h3>Event in Progress!</h3>';
        }
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}



// Scroll Animations
function initScrollAnimations() {
    // Skip Intersection Observer for now to ensure content visibility
    // Make all content visible immediately
    const allAnimatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    allAnimatedElements.forEach(el => {
        el.classList.add('visible');
        // Ensure content is visible
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.display = 'block';
    });
    
    // Fallback: Make all content visible after 1 second
    setTimeout(function() {
        allAnimatedElements.forEach(el => {
            el.classList.add('visible');
            el.style.opacity = '1';
            el.style.visibility = 'visible';
            el.style.display = 'block';
        });
    }, 1000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const optimizedScrollHandler = debounce(function() {
    // Scroll-based animations and effects
    
    // Prevent horizontal scroll overflow
    if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
    }
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

// Add loading animation to images
function addImageLoadingAnimation() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.style.filter = 'grayscale(100%)';
        });
    });
}

    // Initialize image loading animations
    addImageLoadingAnimation();
    
    // Add touch/swipe functionality for mobile gallery
    initMobileGallerySwipe();
    
    // Add parallax effect to hero section
    function initParallax() {
    const hero = document.querySelector('.hero');
    const heroBackground = document.querySelector('.hero-background');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroBackground.style.transform = `translateY(${rate}px)`;
    });
}

// Initialize parallax effect
initParallax();

// Add hover effects to program cards
function initProgramCardEffects() {
    const programCards = document.querySelectorAll('.program-card');
    
    programCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize program card effects
initProgramCardEffects();

// Add smooth reveal animation for statistics
function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const increment = target / 50;
            let current = 0;
            
            const updateStat = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.ceil(current) + '+';
                    requestAnimationFrame(updateStat);
                } else {
                    stat.textContent = target + '+';
                }
            };
            
            updateStat();
        });
    };
    
    // Trigger animation when stats come into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// Initialize stats animation
initStatsAnimation();

// Add typing effect to hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
}

// Initialize typing effect
initTypingEffect();

// Add smooth scroll to top button
function initScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
initScrollToTop();

// Prevent horizontal scroll overflow
function preventHorizontalScroll() {
    // Prevent horizontal scrolling
    if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
    }
    
    // Prevent touch horizontal scrolling on mobile
    document.addEventListener('touchmove', function(e) {
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            if (Math.abs(touch.clientX - touch.screenX) > 10) {
                e.preventDefault();
            }
        }
    }, { passive: false });
}

// Initialize horizontal scroll prevention
preventHorizontalScroll();

// Mobile Gallery Swipe Functionality
function initMobileGallerySwipe() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let startScrollLeft = 0;
    
    // Touch events for mobile
    galleryGrid.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startScrollLeft = galleryGrid.scrollLeft;
        isDragging = true;
        galleryGrid.style.scrollBehavior = 'auto';
    });
    
    galleryGrid.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        
        currentX = e.touches[0].clientX;
        const diffX = startX - currentX;
        
        // Prevent default to avoid page scrolling
        e.preventDefault();
        
        // Smooth scrolling effect
        if (Math.abs(diffX) > 5) {
            galleryGrid.scrollLeft = startScrollLeft + diffX;
        }
    });
    
    galleryGrid.addEventListener('touchend', function() {
        isDragging = false;
        galleryGrid.style.scrollBehavior = 'smooth';
    });
    
    // Mouse events for desktop testing
    galleryGrid.addEventListener('mousedown', function(e) {
        startX = e.clientX;
        startScrollLeft = galleryGrid.scrollLeft;
        isDragging = true;
        galleryGrid.style.cursor = 'grabbing';
        galleryGrid.style.scrollBehavior = 'auto';
    });
    
    galleryGrid.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        currentX = e.clientX;
        const diffX = startX - currentX;
        
        if (Math.abs(diffX) > 5) {
            galleryGrid.scrollLeft = startScrollLeft + diffX;
        }
    });
    
    galleryGrid.addEventListener('mouseup', function() {
        isDragging = false;
        galleryGrid.style.cursor = 'grab';
        galleryGrid.style.scrollBehavior = 'smooth';
    });
    
    galleryGrid.addEventListener('mouseleave', function() {
        isDragging = false;
        galleryGrid.style.cursor = 'grab';
        galleryGrid.style.scrollBehavior = 'smooth';
    });
    
    // Add grab cursor for desktop
    if (window.innerWidth > 768) {
        galleryGrid.style.cursor = 'grab';
    }
    
    // Add scroll indicators for mobile
    if (window.innerWidth <= 768) {
        addScrollIndicators();
    }
}

// Add scroll indicators for mobile gallery
function addScrollIndicators() {
    const gallery = document.querySelector('.gallery');
    if (!gallery) return;
    
    // Create left scroll indicator
    const leftIndicator = document.createElement('div');
    leftIndicator.className = 'scroll-indicator-left';
    leftIndicator.innerHTML = '<i class="fas fa-chevron-left"></i>';
    leftIndicator.style.cssText = `
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background: rgba(0, 0, 0, 0.9);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 16px;
        z-index: 10;
        cursor: pointer;
        opacity: 0.8;
        transition: all 0.3s ease;
    `;
    
    // Create right scroll indicator
    const rightIndicator = document.createElement('div');
    rightIndicator.className = 'scroll-indicator-right';
    rightIndicator.innerHTML = '<i class="fas fa-chevron-right"></i>';
    rightIndicator.style.cssText = `
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background: rgba(0, 0, 0, 0.9);
        border-radius: 50%;
        color: white;
        font-size: 16px;
        z-index: 10;
        cursor: pointer;
        opacity: 0.8;
        transition: all 0.3s ease;
    `;
    
    // Add click events
    leftIndicator.addEventListener('click', function() {
        const galleryGrid = document.getElementById('gallery-grid');
        galleryGrid.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    rightIndicator.addEventListener('click', function() {
        const galleryGrid = document.getElementById('gallery-grid');
        galleryGrid.scrollBy({ left: 300, behavior: 'smooth' });
    });
    
    // Add hover effects
    leftIndicator.addEventListener('mouseenter', function() {
        this.style.opacity = '1';
        this.style.transform = 'translateY(-50%) scale(1.1)';
    });
    
    leftIndicator.addEventListener('mouseleave', function() {
        this.style.opacity = '0.8';
        this.style.transform = 'translateY(-50%) scale(1)';
    });
    
    rightIndicator.addEventListener('mouseenter', function() {
        this.style.opacity = '1';
        this.style.transform = 'translateY(-50%) scale(1.1)';
    });
    
    rightIndicator.addEventListener('mouseleave', function() {
        this.style.opacity = '0.8';
        this.style.transform = 'translateY(-50%) scale(1)';
    });
    
    // Append indicators
    gallery.appendChild(leftIndicator);
    gallery.appendChild(rightIndicator);
}

// Add CSS for scroll to top button
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top:hover {
        background: var(--primary-color) !important;
        transform: translateY(-3px);
        box-shadow: var(--shadow-hover) !important;
    }
`;
document.head.appendChild(style); 