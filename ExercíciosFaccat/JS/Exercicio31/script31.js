/*Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam 
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma 
dos outros 2 lados. */
document.getElementById("exercicio31").addEventListener("click", function antecessor(){

alert("Triângulo");

let a = parseInt(prompt("Digite o lado A:"));
let b = parseInt(prompt("Digite o lado B:"));
let c = parseInt(prompt("Digite o lado B:"));

if ( 
    a < b + c &&
    b < a + c &&
    c < a + b ) {
    alert("Os valores formam um triângulo.");
} else{
    alert("Os valores não formam um triângulo.");
}
});