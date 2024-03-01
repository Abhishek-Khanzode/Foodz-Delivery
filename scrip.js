// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




var arr = [
    {name: "car", image: "./assets/images/bg.webp"},
    {name: "ros", image: "./assets/images/bg.webp"},
    {name: "boi", image: "./assets/images/bg.webp"},
    {name: "dee", image: "./assets/images/bg.webp"},
    {name: "dee", image: "./assets/images/bg.webp"},
    {name: "dee", image: "./assets/images/bg.webp"},
    {name: "dee", image: "./assets/images/bg.webp"},
    {name: "dee", image: "./assets/images/bg.webp"},
    {name: "dee", image: "./assets/images/bg.webp"},
    {name: "dee", image: "./assets/images/bg.webp"},
    {name: "dee", image: "./assets/images/bg.webp"},
    {name: "dee", image: "./assets/images/bg.webp"},
    {name: "dee", image: "./assets/images/bg.webp"},
    {name: "dee", image: "./assets/images/bg.webp"},
    {name: "dee", image: "./assets/images/bg.webp"},
    {name: "dee", image: "./assets/images/bg.webp"}
    // {name: "dee", image: "./assets/images/bg.jpg"}
]



function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="card">
        <img src="/assets/images/bg.webp" alt="">
        <h2>halwa</h2>
        <p>20$</p>
    </div>`;
    })

    document.querySelector(".cards")
    .innerHTML = clutter;    
}

showTheCards();