document.addEventListener('DOMContentLoaded', () => {
    const a = document.getElementById('contactLink');
    const a2 = document.getElementById('contactLinkMobile');
    const b = document.querySelectorAll('#contactme a');

    function scrollToContact(e) {
        e.preventDefault();

        const contactSection = document.getElementById('contactme');
        if (!contactSection) {
            console.error("Error: #contactme not found!");
            return;
        }

        contactSection.scrollIntoView({ behavior: 'smooth' });

        if (b.length === 0) {
            console.warn("Warning: No SVG elements found inside #contactme.");
            return;
        }

        b.forEach(c => {
            c.classList.remove('animate-none');
            c.classList.add('animate-bounce');
        });

        setTimeout(() => {
            b.forEach(c => {
                c.classList.remove('animate-bounce');
                c.classList.add('animate-none');
            });
        }, 3000);
    }

    if (a) {
        // console.log("Contact Link Found!");
        a.addEventListener('click', scrollToContact);
    } else {
        console.warn("Warning: #contactLink not found in DOM.");
    }

    if (a2) {
        // console.log("Mobile Contact Link Found!");
        a2.addEventListener('click', scrollToContact);
    } else {
        console.warn("Warning: #contactLinkMobile not found in DOM.");
    }
});
