// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




var arr = [
    {name: "roses", image: "./assets/images/bg.jpg"},
    {name: "car", image: "./assets/images/bg.jpg"},
    {name: "boike", image: "img2../assets/images/bg.jpg"},
    {name: "dee", image: "./assets/images/bg.jpg"},
    {name: "dee", image: "./assets/images/bg.jpg"},
    {name: "dee", image: "./assets/images/bg.jpg"},
    {name: "dee", image: "./assets/images/bg.jpg"},
    {name: "dee", image: "./assets/images/bg.jpg"},
    {name: "dee", image: "./assets/images/bg.jpg"},
    {name: "dee", image: "./assets/images/bg.jpg"},
    {name: "dee", image: "./assets/images/bg.jpg"},
    {name: "dee", image: "./assets/images/bg.jpg"},
    {name: "dee", image: "./assets/images/bg.jpg"},
    {name: "dee", image: "./assets/images/bg.jpg"},
    {name: "dee", image: "./assets/images/bg.jpg"},
    {name: "dee", image: "./assets/images/bg.jpg"}
    // {name: "dee", image: "./assets/images/bg.jpg"}
]



function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="card">
        <img src="/assets/images/bg.jpg" alt="">
        <h2>halwa</h2>
        <p>20$</p>
    </div>`;
    })

    document.querySelector(".cards")
    .innerHTML = clutter;    
}

showTheCards();