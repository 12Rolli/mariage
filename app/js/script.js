
//	ANIMATION SUR LE LIVRE

var front = document.querySelector('.face-front');
var back = document.querySelector('.face-back');
var flip = document.querySelector('.histoire_book__content');
var uno = document.querySelectorAll('.book');
var portada = document.querySelectorAll('#portada');
var contZindex = 2;
var customZindex = 1;
var windowsW = window.innerWidth;
var counter = 1;

if(windowsW >= 820){
	for (var i = 0; i < uno.length; i++) {
		uno[i].style.zIndex = customZindex;
		customZindex--;
		uno[i].addEventListener('click', function(e){
			var tgt = e.target;
			var unoThis = this;
			unoThis.style.zIndex = contZindex;
			contZindex++;
	
			if (tgt.getAttribute('class') == 'face-front') {
				unoThis.style.zIndex = contZindex;
				contZindex +=20;
				setTimeout(function(){
					unoThis.style.transform = 'rotateY(-180deg)';
				}, 500);
			}
			if (tgt.getAttribute("class") == 'face-back') {
				unoThis.style.zIndex = contZindex;
				contZindex +=20;
	
				setTimeout(function(){
					unoThis.style.transform = 'rotateY(0deg)';
				}, 500);
			}
			if (tgt.getAttribute('id') == 'portada') {
				flip.classList.remove("trnsf-reset");
				flip.classList.add("trnsf");
			} 
			if (tgt.getAttribute('id') == 'portada-back') {
				flip.classList.remove("trnsf");
				flip.classList.add("trnsf-reset");
			}
		});
	}
} else {
	// setInterval(function(){
	// 	// document.querySelector(`.book`).classList.remove('books')
	// 	const img = document.querySelector(`.boook-${counter}`)
	// 	img.classList.add('books')
	// 	counter++

	// 	if(counter > 6){
	// 		counter = 1
	// 	}
	// },3000)
	for (var i = 0; i < uno.length; i++) {
		uno[i].style.zIndex = customZindex;
		customZindex--;
		uno[i].addEventListener('click', function(e){
			var tgt = e.target;
			var unoThis = this;
			unoThis.style.zIndex = contZindex;
			contZindex++;

			
		});
	}
}



// ANIMATION AU CLICK DU HAMBURGER

var toggleClick = document.querySelector(".navbar_menu__togglebox");
var navbar_menu =document.querySelector(".navbar_menu");
toggleClick.addEventListener('click', ()=>{
	toggleClick.classList.toggle('active');
	navbar_menu.classList.toggle('block')
});

///////////////////// Animation du banner
let playBtn = document.querySelector('.banner__playbtn');
let banner = document.querySelector('.banner');
let bannerImage = document.querySelector('.banner__image ');


playBtn.addEventListener('click', function(){
	banner.classList.toggle('show');
	bannerImage.classList.toggle('show');
	gsap.to(".show img", {
		duration: 1,
		opacity:1,
		rotation:360,
		ease: "power1.inOut",
		stagger: {
	
			each: 0.08,
			from: "edges",
			grid: [0,0],
			ease: "power2.inOut",
			
		}
	  }); 
	  gsap.to(".banner__text p", {
		duration: 1,
		opacity:1,
		delay:3,
		ease: "power1.inOut",
		stagger: {
	
			each: 0.7,
			from: "center",
			grid: [0,0],
			ease: "power2.inOut",
			
		}
	  }); 
});