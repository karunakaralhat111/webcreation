var bar = document.querySelector(".bars");
// console.log(bar);

var close = document.querySelector(".close");
// console.log(close);

document.querySelector(".bars").addEventListener("click", function () {
    // console.log("kk");
    document.querySelector(".navbar").classList.add("active");
    bar.style.display = "none";
    close.style.display = "block";
});

close.addEventListener("click", function () {
    document.querySelector(".navbar").classList.remove("active");
    bar.style.display = "block";
    close.style.display = "none";

});

// var icon= document.querySelectorAll(".select-icon");

// Get all the arrow down icons
var footer_col_item = document.querySelectorAll(".footer-col-item");
console.log(footer_col_item);

footer_col_item.forEach(el => {
    el.addEventListener("click", ()=>{
        el.classList.toggle("option2");
    })
})
