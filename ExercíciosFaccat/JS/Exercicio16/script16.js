document.getElementById("exercicio16").addEventListener("click", function antecessor(){

alert("Preço das maças"); 

let quantidade_macas = parseInt(prompt("Digite a quantidade de maçãs você comprou: "));
let total;

if(quantidade_macas < 12){
    total = quantidade_macas * 1.30;
} else{
    total = quantidade_macas * 1.00;
}

alert("O custo total é: " + total);
});
