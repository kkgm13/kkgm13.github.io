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
                b.forEach(c => {
                    c.classList.remove('animate-flash');
                    c.classList.add('animate-none');
                });
            }, 3000); 
        });
    }
});

// document.getElementById('contactLink').addEventListener('click', function (e) {
//   e.preventDefault();

//   document.getElementById('contactme').scrollIntoView({
//       behavior: 'smooth'
//   });

//   const svgIcons = document.querySelectorAll('#contactme svg');

//   svgIcons.forEach(icon => {
//       icon.classList.remove('animate-none');
//       icon.classList.add('animate-flash');
//   });

//   setTimeout(() => {
//       svgIcons.forEach(icon => {
//           icon.classList.remove('animate-flash');
//           icon.classList.add('animate-none');
//       });
//   }, 3000); 
// });
