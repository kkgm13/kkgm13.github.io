function toggleNavbar() {
    const navbar = document.getElementById('navbar-cover-page');
    const openIcon = document.getElementById('open-icon');
    const closeIcon = document.getElementById('close-icon');
    navbar.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('navbar-cover-page-collapse');
    toggleButton.addEventListener('click', toggleNavbar);
});