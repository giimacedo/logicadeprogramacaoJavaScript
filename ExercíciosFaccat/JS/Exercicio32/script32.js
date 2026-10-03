/*Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome 
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.*/
document.getElementById("exercicio32").addEventListener("click", function antecessor(){

alert("Resultado do jogo");

let time1 = prompt("Digite o nome do primeiro time:");
let gols1 = Number(prompt("Digite os gols do primeiro time:"));
let time2 = prompt("Digite o nome do segundo time:");
let gols2 = Number(prompt("Digite os gols do segundo time:"));

let resultado;

if (gols1 > gols2){
    resultado = "Vencedor : " + time1;
} else if (gols2 > gols1){
    resultado = "Vencedor: " + time2;
} else{
    resultado = "Empate!";
}

alert(resultado);
});