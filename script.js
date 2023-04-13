console.log('Hello!');

var i=0;
var elemento = document.getElementById("titulo1");
elemento.addEventListener("click", function() {
  i++// aumentar el valor de i cada vez que se hace clic
  elemento.innerHTML = i; // actualizar el contenido del elemento con el valor actual de i
})

//var list = document.querySelector("#menu li")
//console.log(list)

//var list2 = document.querySelector("aside li:nith-child(even)")
//console.log(list2)