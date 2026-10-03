/*
1° Entrada
2° Processamento
3° Saída
*/
document.getElementById("exercicio14").addEventListener("click", function antecessor(){

alert("Exemplo de Estrutura de Decisão");
valor = parseInt(prompt("Digite um valor:"));
if (valor>10){
    alert("O valor digitado é maior que 10!");
}
else
if(valor == 10){
    alert("O valor digitado é igual a 10!");
}
 else{
    alert("O valor digitado é menor que 10!");
}
});