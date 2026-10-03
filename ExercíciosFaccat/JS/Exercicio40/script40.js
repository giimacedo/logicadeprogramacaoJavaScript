/*Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço 
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total 
a pagar (total a pagar = total - desconto), sabendo-se que: 
 - Se quantidade <= 5 o desconto será de 2% 
 - Se quantidade > 5 e quantidade <=10 o desconto será de 3% 
 - Se quantidade > 10 o desconto será de 5%*/
 document.getElementById("exercicio40").addEventListener("click", function antecessor(){

 alert("Desconto do produto");

 let produto = prompt("Digite o nome do produto:");
 let quantidade = parseInt(prompt("Digite a quantidade adquirida:"));
 let preco = parseInt(prompt("Digite o preço unitário:"));

 let total = quantidade * preco;
 let desconto;

 if (quantidade <= 5){
    desconto = total * 2 / 100;
 } else if(quantidade <= 10){
    desconto = total * 3 / 100;
 } else{
    desconto = total * 5 / 100;
 }

 let totalPagar = total - desconto;

 alert("Produto: " + produto);
 alert("Total: " + total);
 alert("Desconto: " + desconto);
 alert("Total a pagar: " + totalPagar);
});