const services = document.querySelector('.our-services');
const sub = document.querySelector('.sub');
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');
sub.classList.add('hide');


const toggle = () => {
    sub.classList.toggle('hide');
}

services.addEventListener('mouseover', () => {
    if(sub.classList.contains('hide')){
        toggle()
    }
});

services.addEventListener('mouseleave', () => {
    if(!sub.classList.contains('hide')){
        toggle()
    } 
});

sub.addEventListener('mouseleave', () => {
    toggle()
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('close');
    navItems.classList.toggle('flex');
})
