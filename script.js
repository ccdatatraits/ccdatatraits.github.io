document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or use default dark theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.classList.add(savedTheme + '-theme');
    
    // Toggle between dark and light themes
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.boxShadow = 'none';
        }
    });
    
    // Mobile menu functionality (placeholder for future implementation)
    // This would be expanded when implementing the mobile menu toggle
    
    // Animation for hero illustration
    const heroSvg = document.querySelector('.hero-illustration svg');
    if (heroSvg) {
        // Add subtle animation to SVG elements
        const paths = heroSvg.querySelectorAll('path, circle, line');
        paths.forEach((path, index) => {
            // Add a slight delay to each element
            const delay = index * 0.1;
            path.style.transition = `all 0.5s ease ${delay}s`;
            
            // Animate elements on page load
            setTimeout(() => {
                path.style.opacity = '1';
                path.style.transform = 'translateY(0)';
            }, 100);
        });
    }
    
    // Form submission handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get the email input value
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Here you would typically send this to a server
            // For now, just show a success message
            alert(`Thank you for subscribing with ${email}!`);
            
            // Reset the form
            this.reset();
        });
    }
});
