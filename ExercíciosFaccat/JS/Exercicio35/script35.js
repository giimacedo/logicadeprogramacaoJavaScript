/*Um posto está vendendo combustíveis com a seguinte tabela de descontos: 
até 20 litros, desconto de 3% por litro Álcool 
acima de 20 litros, desconto de 5% por litro 
até 20 litros, desconto de 4% por litro Gasolina 
acima de 20 litros, desconto de 6% por litro 
Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da 
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se 
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.*/
document.getElementById("exercicio35").addEventListener("click", function antecessor(){

alert("Combustível");

let litros = parseInt(prompt("Digite a quantidade de litros:"));
let tipo = prompt("Digite o tipo de combustível(A ou G):");
let valor;
let desconto;

if (tipo === "A"){
    valor = litros * 2.90;

    if (litros <= 20){
        desconto = valor * 3 /100;
    } else{
        desconto = valor * 5 / 100;
    }
} else{
    valor = litros * 3.30;

    if (litros <= 20){
        desconto = valor * 4 / 100;
    } else{
        desconto = valor - desconto;
    }
}
let total = valor - desconto;

alert("Valor a pagar: " + total);
});