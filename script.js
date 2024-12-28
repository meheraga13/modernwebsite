document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelector('.testimonial-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonials.addEventListener('mousedown', (e) => {
        isDown = true;
        testimonials.classList.add('active');
        startX = e.pageX - testimonials.offsetLeft;
        scrollLeft = testimonials.scrollLeft;
    });
    testimonials.addEventListener('mouseleave', () => {
        isDown = false;
        testimonials.classList.remove('active');
    });
    testimonials.addEventListener('mouseup', () => {
        isDown = false;
        testimonials.classList.remove('active');
    });
    testimonials.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonials.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        testimonials.scrollLeft = scrollLeft - walk;
    });
});