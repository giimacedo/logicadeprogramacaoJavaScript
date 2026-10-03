/*Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e 
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade 
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual 
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar 
compra'.*/
document.getElementById("exercicio26").addEventListener("click", function antecessor(){

alert("Estoque");

let atual = parseInt(prompt("Digite a quantidade atual do estoque:"));
let maxima = parseInt(prompt("Digite a quantidade máxima:"));
let minima = parseInt(prompt("Digite a quantidade mínima::"));
let media = (maxima + minima) / 2;

alert("Quantidade média: " + media);

if (atual >= media){
    alert("Não efetuar compra");
} else{
    alert("Efetuar compra");
}
});