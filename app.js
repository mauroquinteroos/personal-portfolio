/*
let burgerButton = document.querySelector('.burger-button')
let menu = document.querySelector('.menu')

let option = true
burgerButton.addEventListener('click', e => {
  if(option){
    console.log(option)
    menu.classList.add('active')
    option = false
  }else {
    console.log(option)
    menu.classList.remove('active')
    option = true
  }
})
*/

const mediaQuerie = window.matchMedia("screen and (max-width:767px)");
const burgerButton = document.querySelector("#burger-button");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".link");
mediaQuerie.addListener(validation);

function validation(event) {
  console.log(event);
  if (event.matches) {
    burgerButton.addEventListener("click", hideShow);
  } else {
    burgerButton.removeEventListener("click", hideShow);
  }
}

validation(mediaQuerie);

function hideShow() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
}

links.forEach((link) => {
  console.log(link);
  link.addEventListener("click", hideShow);
});
