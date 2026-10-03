/*) Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e 
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior 
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. */
document.getElementById("exercicio25").addEventListener("click", function antecessor(){

alert("Saldo Bancário");

let conta = parseInt(prompt("Digite o número da conta:"));
let saldo = parseInt(prompt("Digite o saldo:"));
let debito = parseInt(prompt("Digite o débito:"));
let credito = parseInt(prompt("Digite o crédito:"));
let saldoAtual = saldo - debito + credito;

alert("Conta: " + conta);
alert("Saldo atual: " + saldoAtual);

if (saldoAtual >= 0){
    alert("Saldo Positivo.");
} else{
    alert("Saldo Negativo.");
}
});