let toggler=document.querySelector('#toggler');
let nav_items=document.querySelector('.nav_items');
toggler.addEventListener('click',listDisplay)

function listDisplay(){
    nav_items.classList.toggle('showList')
}