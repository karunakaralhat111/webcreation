
// nav link
var navlink= document.querySelectorAll(".nav-links");
// console.log(navlink);
var pathName=window.location.pathname;
navlink.forEach(navEl =>{
    var Navlinkpathname = new URL(navEl.href).pathname;
    if((window.pathName === Navlinkpathname) || (window.pathName === '/index.html' && Navlinkpathname === '/')){
        navEl.classList.add('navpath');
    }
});

var bar = document.querySelector(".bars");

var close = document.querySelector(".close");

document.querySelector(".bars").addEventListener("click", function () {
    document.querySelector(".navbar").classList.add("active");
    bar.style.display = "none";
    close.style.display = "block";
});

close.addEventListener("click", function () {
    document.querySelector(".navbar").classList.remove("active");
    bar.style.display = "block";
    close.style.display = "none";

});


var footer_col_item = document.querySelectorAll(".footer-col-item");
console.log(footer_col_item);

footer_col_item.forEach(el => {
    el.addEventListener("click", ()=>{
        el.classList.toggle("option2");
    })
})
