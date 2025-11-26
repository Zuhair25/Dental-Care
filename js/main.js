document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('.menu');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            menu.classList.add('scrolled');
        } else {
            menu.classList.remove('scrolled');
        }
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Toggle active class on the clicked item
            item.classList.toggle('active');

            // Optional: Close other items when one is opened
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Testimonial Carousel
    const slider = document.querySelector('.testimonial-slider');
    if (slider) {
        // Clone slides for infinite loop effect
        const slides = slider.querySelectorAll('.testimonial-slide');
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            slider.appendChild(clone);
        });

        // Pause animation on hover
        const carousel = document.querySelector('.testimonial-carousel');
        carousel.addEventListener('mouseenter', () => {
            slider.style.animationPlayState = 'paused';
        });
        carousel.addEventListener('mouseleave', () => {
            slider.style.animationPlayState = 'running';
        });
    }
});
