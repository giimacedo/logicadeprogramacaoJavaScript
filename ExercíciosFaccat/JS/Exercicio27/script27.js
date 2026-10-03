/* Ler um valor e escrever se é positivo, negativo ou zero.*/
document.getElementById("exercicio27").addEventListener("click", function antecessor(){

alert("Positivo, negativo ou zero");

let valor = parseInt(prompt("Digite um valor:"));

if (valor > 0){
    alert("O valor é positivo.");
} else if (valor < 0){
    alert("O valor é negativo.");
} else{
    alert("O valor é zero.");
}
});