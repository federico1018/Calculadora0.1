/*Seleccionamos todos los nodos que vamos a utilizar para la interectividad de la pagina*/
const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

/*Esto declara una variable pero que contiene metodos podriamos decir que calculadora
 es un ibjeto y sus metodos son suma... etc.*/

/*--const calculadora = new Calculadora();

/*Aqui se ve claramente que mandamos a llamar el objeto calculadora y con el . punto 
instanciamos el metodo que queramos suma..etc*/

/*--console.log(calculadora.multiplicacion(12, 4));*/

/*Empezamos a hacer la interraccion con los botones*/

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});
