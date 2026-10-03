/*A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais 
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva 
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
(considere que o mês possua 4 semanas exatas).*/
document.getElementById("exercicio22").addEventListener("click", function antecessor(){

alert("Salário");

let horas = parseInt(prompt("Digite o número de horas trabalhadas no mês:"));
let salarioHora = parseInt(prompt("Digite o salário por hora:"));
let horasNormais = 40 * 4;
let salario;

if (horas > horasNormais){
    let  = Number(horasExtras = horas - horasNormais);
    salario = (horasNormais * salarioHora) + (horasExtras * salarioHora * 1.5);
} else{
    salario = horas * salarioHora;
}

alert("O salário total é: " + salario);
});