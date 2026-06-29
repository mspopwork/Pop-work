// ===============================
// MS P O P Work Nagpur
// script.js
// ===============================

// Current Active Menu Highlight

const currentPage =
window.location.pathname.split("/").pop();

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(link => {

const linkPage =
link.getAttribute("href");

if(linkPage === currentPage){

link.style.color = "#0099ff";
link.style.fontWeight = "700";

}

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});

// Scroll Animation

const cards =
document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const cardTop =
card.getBoundingClientRect().top;

const screenPosition =
window.innerHeight / 1.2;

if(cardTop < screenPosition){

card.style.opacity = "1";
card.style.transform = "translateY(0)";

}

});

});

// Initial Card State

cards.forEach(card=>{

card.style.opacity = "0";

card.style.transform =
"translateY(40px)";

card.style.transition =
"all .6s ease";

});

// Floating WhatsApp Button

const whatsapp =
document.createElement("a");

whatsapp.href =
"https://wa.me/919999999999";

whatsapp.target = "_blank";

whatsapp.innerHTML = "💬";

whatsapp.classList.add(
"floating-whatsapp"
);

document.body.appendChild(
whatsapp
);

// Back To Top Button

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add(
"back-to-top"
);

document.body.appendChild(
topBtn
);

// Show Button On Scroll

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

// Scroll To Top

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Dynamic Footer Year

const footer =
document.querySelector("footer");

if(footer){

const year =
new Date().getFullYear();

const copy =
document.createElement("p");

copy.innerHTML =
`© ${year} MS P O P Work Nagpur`;

footer.appendChild(copy);

}

console.log(
"MS P O P Work Website Loaded Successfully"
);