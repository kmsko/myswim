'use strict';
let button = document.querySelector(".menu_button");
let toggleMenu = document.querySelector(".menu_navigation");
let linkProm = document.querySelectorAll(".menu_list")
let details = document.querySelectorAll(".wrap_trening")
let modalWatsapp = document.querySelector(".watsapp_image");
let whatsApp = document.querySelector(".watsapp_mobile");


modalWatsapp.addEventListener('click', function (event) {

    whatsApp.classList.toggle("watsapp_mobile_active");
});



button.addEventListener('click', function (event) {
    toggleMenu.classList.toggle("menu_active");
    button.classList.toggle("menu_button_active");

});

linkProm.forEach((e) => {
    e.addEventListener('click', (event) => {
        toggleMenu.classList.remove("menu_active");
        button.classList.remove("menu_button_active");
    })
})



const anchors = document.querySelectorAll('.menu_list a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)

        let details = document.getElementById(blockID).closest(".wrap_trening")
        if (details) {
            details.open = true;
        }
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
