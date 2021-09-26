/*Creamos la clase para el DISPLAY esto va a contener en pantalla el valor dado y su respectivo resultado
  El constructor hace referencia a que le vamos a pasar parametros a esta clase. NO SE MUY BIEN AUN ESTE TEMA-*/
class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calcular = new Calculadora();
    this.valorActual = "";
    this.valorAnterior = "";
  }

  agregarNumero(numero) {
    this.valorActual = this.valorActual + numero;
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = this.valorAnterior;
  }
}
