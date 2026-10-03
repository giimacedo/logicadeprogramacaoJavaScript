/*Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que 
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que 
ultrapassar este valor, calcular e escrever o seu salário total.*/
document.getElementById("exercicio24").addEventListener("click", function antecessor(){

alert("Comissão");

let salario = parseInt(prompt("Digite o salário fixo:"));
let vendas = parseInt(prompt("Digite o valor de vendas:"));
let comissao;

if (vendas <= 1500){
    comissao = vendas * 3 / 100;
} else{
    comissao = (1500 * 3 / 100) + ((vendas - 1500) * 5 / 100);
}

let salarioTotal = salario + comissao;

alert("O salário total é: " + salarioTotal);
});