/*Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. */
document.getElementById("exercicio28").addEventListener("click", function antecessor(){

alert("Maior de três valores");

let a = Number(prompt("Digite o primeiro valor:"));
let b = Number(prompt("Digite o segundo valor:"));
let c = Number(prompt("Digite o terceiro valor:"));
let maior = a;

if (b > maior){
    maior = b;
}
if(c > maior) {
    maior = c;
}

alert("O maior valor é: " + maior);
});