function toggleMobileMenu() {
    document.body.classList.toggle('show-mobile-menu');
}

function closeMobileMenu() {
    document.body.classList.remove('show-mobile-menu');
}

const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener('click', toggleMobileMenu);
menuCloseButton.addEventListener('click', closeMobileMenu);

// Close menu when clicking anywhere outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-menu') && 
        !event.target.closest('#menu-open-button') &&
        document.body.classList.contains('show-mobile-menu')) {
        closeMobileMenu();
    }
});
