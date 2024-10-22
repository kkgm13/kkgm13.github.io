document.getElementById('contactLink').addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('contactme').scrollIntoView({
        behavior: 'smooth'
    });

    const svgIcons = document.querySelectorAll('#contactme svg');

    svgIcons.forEach(icon => {
        icon.classList.add('animate-flash');
    });

    setTimeout(() => {
        svgIcons.forEach(icon => {
            icon.classList.remove('animate-flash');
        });
    }, 3000); 
});
