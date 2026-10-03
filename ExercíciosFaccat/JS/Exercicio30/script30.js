/*Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem 
crescente.*/
document.getElementById("exercicio30").addEventListener("click", function antecessor(){

alert("Ordem crescente");

let a = parseInt(prompt("Digite o primeiro valor:"));
let b = parseInt(prompt("Digite o segundo valor:"));
let c = parseInt(prompt("Digite o terceiro valor:"));
let primeiro, segundo, terceiro;

if (a < b){
    if (b < c){
        primeiro = a;
        segundo = b;
        terceiro = c;
    } else if (a < c){
        primeiro = a;
        segundo = c;
        terceiro = b;
    } else{
        primeiro = c;
        segundo = a;
        terceiro = b;
    }
} else{
    if (a < c){
        primeiro = b;
        segundo = a;
        terceiro = c;
    } else if (b < c){
        primeiro = b;
        segundo = c;
        terceiro = a;
    } else{
        primeiro = c;
        segundo = b;
        terceiro = a;
    }
}

alert("Ordem crescente: " + primeiro + " " + segundo + " " + terceiro);
});