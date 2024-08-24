// JavaScript to handle the testimonial slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.testimonial-slider');
    let isMouseDown = false;
    let startX, scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isMouseDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
});
