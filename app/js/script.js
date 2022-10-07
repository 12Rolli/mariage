console.log('HELLO');

const test = () => {
	console.log('this is a test');
};

// ANIMATION AU CLICK DU HAMBURGER

var toggleClick = document.querySelector(".navbar_menu__togglebox");
var navbar_menu =document.querySelector(".navbar_menu");
toggleClick.addEventListener('click', ()=>{
	toggleClick.classList.toggle('active');
	navbar_menu.classList.toggle('block')
})