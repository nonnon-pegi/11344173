document.querySelectorAll('.bg').forEach(bg => {
    let animated = false; 
    bg.addEventListener('mouseenter', () => {
        if (!animated) {
            const circle = bg.querySelector('circle:nth-of-type(2)'); 
            if (circle.classList.contains('circle01')) circle.style.strokeDashoffset = 190;
            if (circle.classList.contains('circle02')) circle.style.strokeDashoffset = 280;
            if (circle.classList.contains('circle03')) circle.style.strokeDashoffset = 190;
            if (circle.classList.contains('circle04')) circle.style.strokeDashoffset = 270;
            animated = true; 
        }
    });
});
