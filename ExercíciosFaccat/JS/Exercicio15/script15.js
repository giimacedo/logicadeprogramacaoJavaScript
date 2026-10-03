document.getElementById("exercicio15").addEventListener("click", function antecessor(){


alert("Número Negativo ou Positivo");
valor = parseInt(prompt("Digite um número e verei se é positivo ou negativo:"));

if( valor>=0){
alert("O seu número: " + valor + " é positivo!");
}
else{
    alert("O seu número: " + valor + " é negativo!");
}
});