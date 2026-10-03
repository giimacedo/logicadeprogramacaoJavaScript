/*) Uma fruteira está vendendo frutas com a seguinte tabela de preços: 
Até 5 Kg Acima de 5 Kg 
Morango R$ 2,50 por Kg R$ 2,20 por Kg 
Maçã R$ 1,80 por Kg R$ 1,50 por Kg 
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá 
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de 
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.*/
document.getElementById("exercicio37").addEventListener("click", function antecessor(){

alert("Frutas");

let morangos = parseInt(prompt("Digite a quantidade de morangos em kg:"));
let macas = parseInt(prompt("Digite a quantidade de maças em kg:"));
let valorMorango;
let valorMaca;

if (morangos <= 5){
    valorMorango = morangos * 2.50;
} else{
    valorMorango = morangos * 2.20;
}

if (macas <= 5){
    valorMaca = macas * 1.80;
} else{
    valorMaca = macas * 1.50;
}

let totalKg = morangos + macas;
let total = valorMorango + valorMaca;
let desconto = 0;

if(totalKg > 8 || total > 25){
    desconto = total * 10 / 100;
}

let totalPagar = total - desconto;

alert("Valor a pagar: R$" + totalPagar);
});