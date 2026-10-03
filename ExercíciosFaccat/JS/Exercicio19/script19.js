/* Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.*/
document.getElementById("exercicio19").addEventListener("click", function antecessor(){

alert("Maior valor:");
let a = parseInt(prompt("Digite o primeiro valor: "));
let b = parseInt(prompt("Digite o segundo valor:"));
let maior;

if (a > b){
    maior = a;
} else{
    maior = b;
}

alert("O maior valor é: " + maior);
});