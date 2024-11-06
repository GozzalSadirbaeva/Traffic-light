let redLigth = document.querySelector("#red-light");
let yellowLigth = document.querySelector("#yellow-light");
let greenLigth = document.querySelector("#green-light");

function ligthStart() {
  setTimeout(function () {
    // redLigth.style.opacity = 1;
    // yellowLigth.style.opacity = 0;
    // greenLigth.style.opacity = 0;
    greenLigth.classList.remove('green-light')
    greenLigth.classList.add("traffic-light-item")
    redLigth.classList.remove("traffic-light-item")
    redLigth.classList.add("red-light")
    redLigth.style.display = "block";
  }, 1000);

  setTimeout(function () {
    // redLigth.style.opacity = 0;
    // yellowLigth.style.opacity = 1;
    // greenLigth.style.opacity = 0;
    yellowLigth.classList.remove("traffic-light-item")
    yellowLigth.classList.add("yellow-light")
  }, 4000);

  setTimeout(function () {
    // redLigth.style.opacity = 0;
    // yellowLigth.style.opacity = 0;
    // greenLigth.style.opacity = 1;
    redLigth.classList.remove("red-light")
    redLigth.classList.add("traffic-light-item")
    yellowLigth.classList.remove("yellow-light")
    yellowLigth.classList.add("traffic-light-item")

    greenLigth.classList.remove("traffic-light-item")
    greenLigth.classList.add("green-light")
  }, 6000);

  setTimeout(function () {
    // redLigth.style.opacity = 0;
    // yellowLigth.style.opacity = 1;
    // greenLigth.style.opacity = 0;
    yellowLigth.classList.remove("traffic-light-item")
    yellowLigth.classList.add("yellow-light")
  }, 4000);

}
const timer = setInterval(function () {
  ligthStart();
}, 18000);

ligthStart();

// let colors = document.querySelectorAll('.color1');

// setInterval(() =>{
//     colors.forEach((val, inx) =>{
//         settimeout(() =>{
//             val.style.backgroundColor = 'red';
//         }, 3000)
//         setInterval(() =>{
//             val.style.backgroundColor = 'yellow';
//         }, 3000)
//         setInterval(() =>{
//             val.style.backgroundColor = 'green';
//         }, 3000)

//     })
//     console.log(val);

// }, 1000)
// setInterval (function (){
//     colors.style.display="none";
//     },1000);

// // let color = document.querySelector('#1');
// // setTimeout(() =>{

// })
