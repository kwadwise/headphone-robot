window.onload = function () {
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 50) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });
}


const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu'
    ? 'close'
    :'menu';

    mobile_menu.classList.toggle('is-open');
})