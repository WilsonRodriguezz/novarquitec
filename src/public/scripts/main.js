const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 20
        ? header.classList.add('active')
        : header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

/*Animation*/
const typed = document.querySelector('.typed');

if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

//Scroll active links
/*const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
    })
}

scrollActive();
window.addEventListener('scroll', scrollActive);*/

//Scroll active links

/*const li = document.querySelectorAll('.menu_link');
const sec = document.querySelectorAll('section');

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) {
        li.forEach(ltx => ltx.classList.remove('active-link'));
        li[len].classList.add('active-link');
    }

}
activeMenu();
window.addEventListener('scroll', activeMenu);*/
