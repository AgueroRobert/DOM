function sumar() {
    var num1 = Number(document.getElementById("cuadro1").value);
    var num2 = Number(document.getElementById("cuadro2").value);
    var resultado = num1+num2;

    imprimir(resultado);

};
function restar() {
    var num1 = Number(document.getElementById("cuadro1").value);
    var num2 = Number(document.getElementById("cuadro2").value);
    var resultado = num1-num2;
    imprimir(resultado);

};
function multiplicar() {
    var num1 = Number(document.getElementById("cuadro1").value);
    var num2 = Number(document.getElementById("cuadro2").value);
    var resultado = num1*num2;
    imprimir(resultado);
    

};
function dividir() {
    var num1 = Number(document.getElementById("cuadro1").value);
    var num2 = Number(document.getElementById("cuadro2").value);
    var resultado = num1/num2;
    imprimir(resultado);


};

function imprimir(resultado) {
    this.resultado=resultado;
    document.getElementById("resultado").innerHTML = `El Resultado es  ${resultado} CHICHEÑOL`;

}
