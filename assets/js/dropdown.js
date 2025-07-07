// Attach event listeners to each accordion
document.querySelectorAll('.accordion').forEach(accordion => {
    const toggleBtn = accordion.querySelector('.toggle-btn');
    const moreInfo = accordion.querySelector('[data-more-info]');
    const infoIcon = accordion.querySelector('[data-info-icon]');
    const arrowIcon = accordion.querySelector('[data-arrow-icon]');

    toggleBtn.addEventListener('click', () => {
        if (moreInfo.classList.contains('max-h-0')) {
            document.querySelectorAll('.accordion').forEach(otherAccordion => {
                const otherMoreInfo = otherAccordion.querySelector('[data-more-info]');
                const otherInfoIcon = otherAccordion.querySelector('[data-info-icon]');
                const otherArrowIcon = otherAccordion.querySelector('[data-arrow-icon]');
            });
            moreInfo.classList.remove('max-h-0');
            moreInfo.classList.add('max-h-screen');
            infoIcon.classList.add('hidden');
            arrowIcon.classList.remove('hidden');
        } else {
            moreInfo.classList.add('max-h-0');
            moreInfo.classList.remove('max-h-screen');
            infoIcon.classList.remove('hidden');
            arrowIcon.classList.add('hidden');
        }
    });
});