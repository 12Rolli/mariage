"use strict";var front=document.querySelector(".face-front"),back=document.querySelector(".face-back"),flip=document.querySelector(".histoire_book__content"),uno=document.querySelectorAll(".book"),portada=document.querySelectorAll("#portada"),contZindex=2,customZindex=1,windowsW=window.innerWidth,counter=1;if(windowsW>=820)for(var i=0;i<uno.length;i++)uno[i].style.zIndex=customZindex,customZindex--,uno[i].addEventListener("click",(function(e){var t=e.target,n=this;n.style.zIndex=contZindex,contZindex++,"face-front"==t.getAttribute("class")&&(n.style.zIndex=contZindex,contZindex+=20,setTimeout((function(){n.style.transform="rotateY(-180deg)"}),500)),"face-back"==t.getAttribute("class")&&(n.style.zIndex=contZindex,contZindex+=20,setTimeout((function(){n.style.transform="rotateY(0deg)"}),500)),"portada"==t.getAttribute("id")&&(flip.classList.remove("trnsf-reset"),flip.classList.add("trnsf")),"portada-back"==t.getAttribute("id")&&(flip.classList.remove("trnsf"),flip.classList.add("trnsf-reset"))}));else for(i=0;i<uno.length;i++)uno[i].style.zIndex=customZindex,customZindex--,uno[i].addEventListener("click",(function(e){e.target;this.style.zIndex=contZindex,contZindex++}));var toggleClick=document.querySelector(".navbar_menu__togglebox"),navbar_menu=document.querySelector(".navbar_menu");toggleClick.addEventListener("click",(function(){toggleClick.classList.toggle("active"),navbar_menu.classList.toggle("block")}));var playBtn=document.querySelector(".banner__playbtn"),banner=document.querySelector(".banner"),bannerImage=document.querySelector(".banner__image ");playBtn.addEventListener("click",(function(){banner.classList.toggle("show"),bannerImage.classList.toggle("show"),gsap.to(".show img",{duration:1,opacity:1,rotation:360,ease:"power1.inOut",stagger:{each:.08,from:"edges",grid:[0,0],ease:"power2.inOut"}}),gsap.to(".banner__text p",{duration:1,opacity:1,delay:3,ease:"power1.inOut",stagger:{each:.7,from:"center",grid:[0,0],ease:"power2.inOut"}})}));
//# sourceMappingURL=script.js.map