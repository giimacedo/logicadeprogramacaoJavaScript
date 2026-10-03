/*Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades 
dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma 
das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais 
novo com a mulher mais velha.*/
document.getElementById("exercicio36").addEventListener("click", function antecessor(){

alert("Idades");

let h1 = parseInt(prompt("Digite a idade do primeiro homem:"));
let h2 = parseInt(prompt("Digite a idade do segundo homem:"));
let m1 = parseInt(prompt("Digite a idade da primeira mulher:"));
let m2 = parseInt(prompt("Digite a idade da segunda mulher:"));
let homemVelho;
let homemNovo;
let mulherVelha;
let mulherNova;

if (h1 > h2){
    homemVelho = h1;
    homemNovo = h2;
} else{
    homemVelho = h2;
    homemNovo = h1;
}

if (m1 > m2){
    mulherVelha = m1;
    mulherNova = m2;
} else{
    mulherVelha = m2;
    mulherNova = m1;
}

let soma = homemVelho + mulherNova;
let produto = homemNovo * mulherVelha;

alert("Soma: " + soma);
alert("Produto: " + produto);
});