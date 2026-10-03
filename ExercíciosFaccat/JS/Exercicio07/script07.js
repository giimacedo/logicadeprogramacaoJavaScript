/*entrada
idade(anos, meses e dias)
processamento (calculo ou detrsnfirmação de anos, meses e dias)
saída
dias
Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade 
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.*/
document.getElementById("exercicio07").addEventListener("click", function antecessor(){


alert("Programa Calculo de Dias Vividos");
ano = parseInt(prompt("Digite a quantidade de anos vividos :"));
mes = parseInt(prompt("Digite a quantidade de messes passados do seu utlimo aniversário :"));
dia = parseInt(prompt("Digite a quantidade de dias passados do seu último mesversário :"));
quantidadeDeDiasVividos = (ano * 365) + (mes * 30) + dia
alert("A quantidade de dias vividos é :" + quantidadeDeDiasVividos);
});
