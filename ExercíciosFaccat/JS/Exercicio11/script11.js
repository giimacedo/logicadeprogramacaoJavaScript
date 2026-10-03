/* Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
vendedor.*/
document.getElementById("exercicio11").addEventListener("click", function antecessor(){

alert("Salário do vendedor");

let carros = parseInt(prompt("Digite o número de carros vendidos:"));
let vendas = parseInt(prompt("Digite o valor total das vendas:"));
let salarioFixo = parseInt(prompt("Digite o salário fixo:"));
let valorPorCarro = parseInt(prompt("Digite o valor recebido por carro vendido:"));
let salarioFinal = salarioFixo + (carros * valorPorCarro) + (vendas * 5 / 100);

alert("O salário final é: " + salarioFinal);
});