const roles = [

    "Embedded Software Engineer",

    "Firmware Developer",

    "IoT Engineer",

    "Embedded C Enthusiast",

    "Electronics Engineer",

    "Hardware Engineer",

    "Automation Engineer",
     
    "Pcb design Engineer",
    
    "Software Engineer",

    "Cloud Technology Enthusiast"

];

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type(){

    if(charIndex < roles[roleIndex].length){

        typing.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,70);

    }

    else{

        setTimeout(erase,1800);

    }

}

function erase(){

    if(charIndex > 0){

        typing.textContent = roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,35);

    }

    else{

        roleIndex++;

        if(roleIndex>=roles.length){

            roleIndex=0;

        }

        setTimeout(type,300);

    }

}

document.addEventListener("DOMContentLoaded",type);

//=================================
//      MOUSE GLOW EFFECT
//=================================

const cursorGlow = document.querySelector(".cursor-glow");


document.addEventListener("mousemove", (e)=>{

    cursorGlow.style.left = e.clientX + "px";

    cursorGlow.style.top = e.clientY + "px";

});

// SCROLL REVEAL

const reveals = document.querySelectorAll(
".reveal, .reveal-left, .reveal-right"
);


function reveal(){

    reveals.forEach((element)=>{

        let windowHeight = window.innerHeight;

        let elementTop = element.getBoundingClientRect().top;

        let revealPoint = 100;


        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", reveal);

reveal();
//====================================
//      SKILL COUNTER
//====================================


const counters = document.querySelectorAll(".counter");


counters.forEach(counter => {


    counter.innerText = "0";


    const updateCounter = () => {


        const target = +counter.getAttribute("data-target");


        const current = +counter.innerText;


        const increment = target / 80;



        if(current < target){


            counter.innerText =
            Math.ceil(current + increment);


            setTimeout(updateCounter,20);


        }
        else{

            counter.innerText = target;

        }


    };


    updateCounter();


});




// ==========================
// AOS INIT
// ==========================

AOS.init({

    duration:1000,

    once:true,

    offset:100

});

// ==========================
// ACTIVE NAVBAR
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const sectionTop=section.offsetTop-150;


if(scrollY>=sectionTop){

current=section.getAttribute("id");

}


});


navLinks.forEach(link=>{


link.classList.remove("active");


if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}


});


});

// ==========================
// BACK TO TOP
// ==========================

const topBtn=document.querySelector("#top-btn");


window.addEventListener("scroll",()=>{


if(scrollY>500){

topBtn.classList.add("show");

}

else{

topBtn.classList.remove("show");

}


});


topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



window.addEventListener("load",()=>{


document.querySelector(".loader")
.classList.add("hide");


});

// ============================
// SCROLL REVEAL
// ============================

AOS.init({

    duration:1000,

    once:true,

    offset:120

});

// ==========================
// MOBILE NAVBAR
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const mobileNavLinks = document.querySelector(".nav-links ");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        mobileNavLinks.classList.toggle("active");

    });

}
