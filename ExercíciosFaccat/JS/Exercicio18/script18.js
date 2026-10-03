/* Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela 
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). */
document.getElementById("exercicio18").addEventListener("click", function antecessor(){

alert("Votação:");

let anoAtual = parseInt(prompt("Digite o ano atual:"));
let anoNascimento = parseInt(prompt("Digite o seu ano de nascimento:"));
let idade = anoAtual - anoNascimento;

alert("A idade é: " + idade);

if (idade >= 16){
    alert("Pode votar esse ano.");
} else{
    alert("Não pode votar este ano.");
}
});