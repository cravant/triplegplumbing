// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        
        // Animate hamburger menu
        this.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        
        // Show success message
        alert('Thank you for your message! We will get back to you as soon as possible.\n\nFor immediate assistance, please call us at (903) 569-7286.');
        
        // Reset form
        contactForm.reset();
        
        // In a production environment, you would send the data like this:
        /*
        fetch('your-server-endpoint.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        })
        .catch(error => {
            alert('There was an error sending your message. Please call us at (903) 569-7286.');
            console.error('Error:', error);
        });
        */
    });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add active class to current page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});

// Header scroll effect (optional - adds shadow on scroll)
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Phone number click tracking (for analytics)
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Here you could track the click with analytics
        console.log('Phone number clicked');
        // Example: gtag('event', 'phone_click', { 'event_category': 'engagement' });
    });
});

// Gallery image modal (optional enhancement)
// This could be expanded to show a lightbox for gallery images
const galleryItems = document.querySelectorAll('.gallery-item img');
if (galleryItems.length > 0) {
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            // You could implement a lightbox here
            console.log('Gallery image clicked:', this.alt);
        });
    });
}
