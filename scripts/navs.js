const btn = document.getElementById("btn");
const navBar = document.querySelector(".nav-bar");
const faSolid = document.querySelector(".fa-solid");

btn.addEventListener("click", () => {
    if (navBar.classList.contains("show")) {
        navBar.classList.remove("show");
        faSolid.classList.replace("fa-xmark", "fa-ellipsis-v");
    } 
    else {
        navBar.classList.add("show");
        faSolid.classList.replace("fa-ellipsis-v", "fa-xmark");
    }
});


navBar.addEventListener("click", () => {
    if (navBar.classList.contains("show")) {
        navBar.classList.remove("show");
        faSolid.classList.replace("fa-xmark", "fa-ellipsis-v");
    } 
    else {
        navBar.classList.add("show");
        faSolid.classList.replace("fa-ellipsis-v", "fa-xmark");        
    }
});


const header = document.querySelector("header");
const h1 = document.getElementById("color");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        h1.style.color = "#000";
    }
    else {
        header.classList.remove("scrolled");
        h1.style.color = "#fff";
    }
});
