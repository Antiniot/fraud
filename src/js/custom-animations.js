// Custom animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scroll');
        } else {
            navbar.classList.remove('navbar-scroll');
        }
    });
    
    // Animate navbar items on page load
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    navItems.forEach((item, index) => {
        item.classList.add('animated-nav-item', 'fadeInDown');
        item.style.animationDelay = `${0.1 + index * 0.1}s`;
    });
    
    // Form field animations
    const formFields = document.querySelectorAll('.form-control');
    formFields.forEach((field, index) => {
        field.classList.add('animated', 'form-fade-in');
        field.style.animationDelay = `${0.1 + index * 0.1}s`;
        
        // Add focus effect for form groups
        field.addEventListener('focus', function() {
            this.closest('.form-group').classList.add('focus-active');
        });
        
        field.addEventListener('blur', function() {
            this.closest('.form-group').classList.remove('focus-active');
        });
    });
    
    // Animate elements when they come into view
    const animatedElements = document.querySelectorAll('.animated-element');
    
    const checkIfInView = function() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('in-view');
            }
        });
    };
    
    // Check if elements are in view on load and scroll
    window.addEventListener('load', checkIfInView);
    window.addEventListener('scroll', checkIfInView);
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('animated', 'pulse');
        });
        
        button.addEventListener('animationend', function() {
            this.classList.remove('animated', 'pulse');
        });
    });
    
    // Card hover animations
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow-lg');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-lg');
        });
    });
});