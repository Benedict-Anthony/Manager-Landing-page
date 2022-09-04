const navMenu = document.querySelector("header nav ul");
const toggler = document.querySelector(".toggler")
const blogs = document.querySelectorAll(".blogs .slide")



// console.log(navMenu.nextElementSibling)


function mobileToggler() {
    navMenu.classList.toggle("active")
    toggler.classList.toggle("active")
}


toggler.addEventListener("click", () => {
    mobileToggler()
})

window.addEventListener("scroll", () => {
    navMenu.classList.remove("active")
})

blogs.forEach(blog => {
    blog.addEventListener("drag", (e) => {
        console.log(e.target)
    })

});

let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});