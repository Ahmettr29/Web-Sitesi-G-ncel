document.addEventListener("DOMContentLoaded", function () {
 
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade');
        setTimeout(() => {
            section.classList.add('fade-in');
        }, 100); 
    });

    
    const pageLinks = document.querySelectorAll('.navbar ul li a');

    pageLinks.forEach(link => {
        link.addEventListener('click', function () {
            pageLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    
    function smoothScroll(target) {
        const targetElement = document.getElementById(target);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    }

    
    const toTopButton = document.createElement('button');
    toTopButton.innerText = '↑';
    toTopButton.classList.add('to-top');
    document.body.appendChild(toTopButton);

    toTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    });
});
