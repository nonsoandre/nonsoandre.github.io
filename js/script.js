//Hamburger Menu
const hamMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');
 const navList = nav.querySelector('.nav-list');

hamMenu.addEventListener('click', (e)=>{
    e.preventDefault();
    toggleMenu();
    // e.stopImmediatePropagation();
})

window.addEventListener('click', (e)=>{
    clearMenu();
})

const toggleMenu = (e)=>{
    hamMenu.classList.toggle('open');
    navList.classList.toggle('block');

    event.stopImmediatePropagation();
}

const clearMenu = ()=>{
    if(hamMenu.classList.contains('open')){
        hamMenu.classList.remove('open');
        navList.classList.remove('block');
    }
}