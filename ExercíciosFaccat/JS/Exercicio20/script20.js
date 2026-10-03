/* Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.*/
document.getElementById("exercicio20").addEventListener("click", function antecessor(){

alert("Ordem crescente");

let a = parseInt(prompt("Digite o primeiro valor:"));
let b = parseInt(prompt("Digite o segundo valor:"));

if (a < b){
    alert("Ordem crescente " + a + " " + b);
} else{
   alert("Ordem crescente: " + b + " " + a);
}
});