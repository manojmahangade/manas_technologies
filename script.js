// Main JavaScript for Manas Technologies Website

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startSlider() {
    if (slides.length > 0) {
        slideInterval = setInterval(nextSlide, 5000);
    }
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Mobile Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Form Submission
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slider
    if (slides.length > 0) {
        slides[0].classList.add('active');
        startSlider();
    }
    
    // Slider controls
    const nextBtn = document.querySelector('.slider-next');
    const prevBtn = document.querySelector('.slider-prev');
    const heroSlider = document.querySelector('.hero-slider');
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopSlider();
            nextSlide();
            startSlider();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopSlider();
            prevSlide();
            startSlider();
        });
    }
    
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', stopSlider);
        heroSlider.addEventListener('mouseleave', startSlider);
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.innerHTML;
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                message: document.getElementById('message').value.trim()
            };
            
            // Validation
            if (!formData.name || !formData.email || !formData.message) {
                alert('Please fill in all required fields (Name, Email, and Message)');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.innerHTML = 'Sending...';
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show success message
                alert('Thank you! Your message has been sent. We\'ll contact you within 24 hours.');
                
                // Reset form
                this.reset();
                
            } catch (error) {
                console.error('Error:', error);
                alert('Sorry, there was an error sending your message. Please try again or call us directly.');
            } finally {
                // Reset button
                submitBtn.classList.remove('loading');
                submitBtn.innerHTML = originalText;
            }
        });
    }
    
    // Scroll animations
    function checkReveal() {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 150) {
                el.classList.add('active');
            }
        });
    }
    
    // Initial check
    checkReveal();
    
    // Check on scroll
    window.addEventListener('scroll', checkReveal);
    
    // Close mobile menu on scroll
    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links')?.classList.remove('active');
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const navLinks = document.querySelector('.nav-links');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (navLinks && navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !menuBtn?.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(11,42,74,0.95)';
            header.style.padding = '15px 0';
        } else {
            header.style.background = 'rgba(11,42,74,0.98)';
            header.style.padding = '20px 0';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's a link to a different page
        if (href === '#' || href.startsWith('#contact') || href.startsWith('#services') || href.startsWith('#why')) {
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                if (window.innerWidth <= 768) {
                    document.querySelector('.nav-links')?.classList.remove('active');
                }
            }
        }
    });
});
