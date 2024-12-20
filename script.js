document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklemesi sırasında fade-in animasyonunu başlat
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade');
        setTimeout(() => {
            section.classList.add('fade-in');
        }, 100); // Biraz gecikmeli olarak görünür yap
    });

    // Navbar'da aktif sayfayı vurgulamak için
    const pageLinks = document.querySelectorAll('.navbar ul li a');

    pageLinks.forEach(link => {
        link.addEventListener('click', function () {
            pageLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Yumuşak scroll özelliği
    function smoothScroll(target) {
        const targetElement = document.getElementById(target);
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Navbar yüksekliği kadar kaydırmayı düzelt
            behavior: 'smooth'
        });
    }

    // Sayfa kaydırıldıkça butonu göstermek
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
