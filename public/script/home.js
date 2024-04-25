const navbtn = document.querySelector(".menu")
const dropdownMenu = document.querySelector(".nav");
const cross = document.querySelector(".cross")
let text = document.querySelector(".hero-text h1")


navbtn.addEventListener("click", () => {
    navbtn.classList.toggle("hide")
    cross.classList.toggle("hide")
    // dropdownMenu.classList.toggle("hide")

    gsap.fromTo(dropdownMenu, {
        display:"block",
        x: 50
    }, {
        x: 0,
        duration: .3,
        opacity: 1
    })
})
cross.addEventListener("click", () => {
    navbtn.classList.toggle("hide")
    cross.classList.toggle("hide")
   gsap.fromTo(dropdownMenu, {
       x: 0
    }, {
        x: 50,
        display:"none",

        duration: .3,
        opacity: 0
    })
})