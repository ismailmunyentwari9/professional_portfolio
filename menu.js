const humbarger = document.getElementById('humbarger');
const nav = document.querySelector('nav');
const blurContainer = document.querySelector('.brul-box');
const logo = document.querySelector('.logo');
const menus = document.querySelector('.menus-mobile');
const menusLinks = document.querySelectorAll('.menus-mobile >li');
const cancel = document.querySelector('.cancel');
const body = document.querySelector('body');




humbarger.addEventListener('click', () =>{
    blurContainer.classList.add('blur');
    menus.style.display = 'flex';
    logo.style.display='none';
    humbarger.style.display='none';
    cancel.style.display='block';
    body.style.overflow='hidden';
})
const cancelMenu = () =>{
    blurContainer.classList.remove('blur');
    menus.style.display = 'none';
    logo.style.display='block';
    humbarger.style.display='block';
    cancel.style.display='none';
    body.style.overflow='scroll';
}

cancel.addEventListener('click',cancelMenu);
menusLinks.forEach((functioning) =>{
    functioning.addEventListener('click',cancelMenu)
})

