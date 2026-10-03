/*Ler dois valores e imprimir uma das três mensagens a seguir: 
‘Números iguais’, caso os números sejam iguais 
‘Primeiro é maior’, caso o primeiro seja maior que o segundo; 
‘Segundo maior’, caso o segundo seja maior que o primeiro.*/
document.getElementById("exercicio33").addEventListener("click", function antecessor(){

alert("Comparação de números");

let a = parseInt(prompt("Digite o primeiro valor:"));
let b = parseInt(prompt("Digite o segundo valor:"));

let resultado;

if (a === b){
    resultado = "Números iguais";
} else if (a > b){
    resultado = "Primeiro é maior";
} else{
    resultado = "Segundo maior";
}

alert(resultado);
});