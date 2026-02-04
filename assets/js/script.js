document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle Contact Form Submission (Demo)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Since this is a static site, we can't send email directly without a service.
            // You can integrate Formspree or EmailJS later.
            alert("Thank you for your message! \n(Note: This is a demo site. To make this form work, integrate a service like Formspree).");
            contactForm.reset();
        });
    }
});
