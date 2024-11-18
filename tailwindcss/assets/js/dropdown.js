// Attach event listeners to each accordion
document.querySelectorAll('.accordion').forEach(accordion => {
    const toggleBtn = accordion.querySelector('.toggle-btn');
    const moreInfo = accordion.querySelector('[data-more-info]');
    const infoIcon = accordion.querySelector('[data-info-icon]');
    const arrowIcon = accordion.querySelector('[data-arrow-icon]');

    toggleBtn.addEventListener('click', () => {
        // Toggle the visibility of the content
        if (moreInfo.classList.contains('max-h-0')) {
            // Collapse all other accordions
            document.querySelectorAll('.accordion').forEach(otherAccordion => {
                const otherMoreInfo = otherAccordion.querySelector('[data-more-info]');
                const otherInfoIcon = otherAccordion.querySelector('[data-info-icon]');
                const otherArrowIcon = otherAccordion.querySelector('[data-arrow-icon]');
            });

            // Expand the clicked accordion
            moreInfo.classList.remove('max-h-0');
            moreInfo.classList.add('max-h-screen');
            infoIcon.classList.add('hidden');
            arrowIcon.classList.remove('hidden');
        } else {
            // Collapse the clicked accordion
            moreInfo.classList.add('max-h-0');
            moreInfo.classList.remove('max-h-screen');
            infoIcon.classList.remove('hidden');
            arrowIcon.classList.add('hidden');
        }
    });
});