let redLigth = document.querySelector("#red-light");
let yellowLigth = document.querySelector("#yellow-light");
let greenLigth = document.querySelector("#green-light");

function ligthStart() {
  setTimeout(function () {
    greenLigth.classList.remove('green-light')
    greenLigth.classList.add("traffic-light-item")
    yellowLigth.classList.add("traffic-light-item")
    yellowLigth.classList.remove("yellow-light")
    redLigth.classList.remove("traffic-light-item")
    redLigth.classList.add("red-light")
    setTimeout(function () {
      redLigth.classList.remove("red-light")
      redLigth.classList.add("traffic-light-item")
      yellowLigth.classList.remove("traffic-light-item")
      yellowLigth.classList.add("yellow-light")
      setTimeout(function () {
        redLigth.classList.remove("red-light")
        redLigth.classList.add("traffic-light-item")
        yellowLigth.classList.remove("yellow-light")
        yellowLigth.classList.add("traffic-light-item")
    
        greenLigth.classList.remove("traffic-light-item")
        greenLigth.classList.add("green-light")
        setTimeout(function () {
          greenLigth.classList.remove("green-light")
          greenLigth.classList.add("traffic-light-item")
      
          yellowLigth.classList.remove("traffic-light-item")
          yellowLigth.classList.add("yellow-light")
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);

}
ligthStart();

const timer = setInterval(function () {
  ligthStart();
}, 8000);



