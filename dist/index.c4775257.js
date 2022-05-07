"use strict";
console.log("hello world");
const mobileOpenMeun = function(target) {
    target.classList.toggle("btn-meun");
    target.classList.toggle("btn-close");
    const nav = document.querySelector(".nav");
    nav.style.transform = `translateX(${document.querySelector(".btn-close") ? "0" : "100%"})`;
};
document.querySelector(".btn-meun").addEventListener("click", function(e) {
    mobileOpenMeun(e.target);
});
const expandSubMeun = function() {};
document.querySelector(".nav").addEventListener("click", function(e) {
    const item = e.target.closest(".nav__item");
    const link = e.target.closest(".nav__link");
    if (item.classList.contains("has-sublist")) //control sublist element by class sublist-hide/sublist-show
    {
        if (item.classList.contains("has-sublist")) {
            //control sublist display CSS
            link.nextElementSibling.style.display = `${item.classList.contains("sublist-hide") ? "block" : "none"}`;
            //force the element to recalc it's heigth to trigger transition
            link.nextElementSibling.offsetHeight;
            //control sublist opacity CSS
            link.nextElementSibling.style.opacity = `${item.classList.contains("sublist-hide") ? "1" : "0"}`;
            //control sublist max-height to do the transition
            link.nextElementSibling.style.maxHeight = `${item.classList.contains("sublist-hide") ? "500px" : "0"}`;
            //control sublist arrow icon rotation
            link.querySelector(".nav__item-arrow").style.transform = `${item.classList.contains("sublist-hide") ? "rotate(180deg)" : "rotate(0deg)"}`;
        }
    }
    item.classList.toggle("sublist-show");
    item.classList.toggle("sublist-hide");
});

//# sourceMappingURL=index.c4775257.js.map
