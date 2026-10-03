/*Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 
maiores.*/
document.getElementById("exercicio29").addEventListener("click", function antecessor(){

alert("Soma dos dois Maiores");

let a = parseInt(prompt("Digite o primeiro  valor:"));
let b = parseInt(prompt("Digite o segundo valor:"));
let c = parseInt(prompt("Digite o terceiro valor:"));
let soma;

if (a < b){
    if (a < c){
        soma = b + c;
    } else{
        soma = a + b;
    }
} else{
    if (b < c){
        soma = a + b;
    } else{
        soma = a + b;
    }
}

alert("A soma dos dois maiores valores é: " + soma);
});