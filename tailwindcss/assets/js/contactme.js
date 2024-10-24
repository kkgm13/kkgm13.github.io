document.addEventListener('DOMContentLoaded', () => {
    const a = document.getElementById('contactLink');
    const b = document.querySelectorAll('#contactme svg');
    if(a) {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById('contactme').scrollIntoView({
                behavior: 'smooth'
            });
        
            b.forEach(c => {
                c.classList.remove('animate-none');
                c.classList.add('animate-flash');
            });
        
            setTimeout(() => {
                b.forEach(icon => {
                    c.classList.remove('animate-flash');
                    c.classList.add('animate-none');
                });
            }, 3000); 
        });
    }
});
