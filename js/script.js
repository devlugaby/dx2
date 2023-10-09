// Campeã de Streaming 
function stre() {
var texto2 = document.querySelector('#lu');
var resul2 = document.querySelector('#lu2');
var botao2 = document.querySelector('#lu3');
var num2 = 0;
var valor2 = parseInt (document.querySelector('#valor2').value);
          
while(num2 < valor2){
texto2.innerHTML = `Numero de alunos ${num2 + 1}`;
resul2.innerHTML += (`Nome da música ${num2 + 1}: <input type="text" placeholder="Nome da música:"> número de views: <input type="number" placeholder="Número de views:"> <br>`);
num2++;
botao2.innerHTML =  `<button onclick="aluninho()">A campeã é...</button>`
}
}

function aluninho() {
var text = document.querySelector('#h6');
var inputsMusic = document.querySelectorAll('input[type="text"]');
var inputsViews = document.querySelectorAll('input[type="number"]');
          
var maiorview = -Infinity;
var nomeMaiorview = '';
        
for (var i = 0; i < inputsViews.length; i++) {
var numero2 = parseFloat(inputsViews[i].value);
var nome2 = inputsMusic[i+1].value;
            
if (!isNaN(numero2) && nome2) {
if (numero2 > maiorview) {
maiorview= numero2;
nomeMaiorview = nome2;
}
}
}

if (maiorview !== -Infinity) {
document.getElementById("h6").innerHTML = "A música com maior views é  "  + nomeMaiorview  +  " e possui uma nota "  + maiorview;
} else {
document.getElementById("h6").innerHTML = ('Nenhum número válido encontrado.');
  }
 }




// Melhor Aluno
function melhor() {
var texto = document.querySelector('#teste');
var resul = document.querySelector('#teste2');
var botao = document.querySelector('#teste3');
var num = 0;
var valor = document.querySelector('#valor').value;
          
while(num < valor){
texto.innerHTML = `Numero de alunos ${num + 1}`;
resul.innerHTML += (`Informe o nome do aluno ${num + 1}: <input type="text" placeholder="Nome do aluno"> Nota do aluno: <input type="number" placeholder="Digite o numero da nota"> <br>`);
num++;
botao.innerHTML =  `<button onclick="aluno()">Maior nota é...</button>`
}
}

function aluno() {
var text = document.querySelector('#h5');
var inputsNome = document.querySelectorAll('input[type="text"]');
var inputsNumero = document.querySelectorAll('input[type="number"]');
          
var maiorNumero = -Infinity;
var nomeMaiorNumero = '';
        
for (var i = 0; i < inputsNumero.length; i++) {
var numero = parseFloat(inputsNumero[i].value);
var nome = inputsNome[i+1].value;
            
if (!isNaN(numero) && nome) {
if (numero > maiorNumero) {
maiorNumero = numero;
nomeMaiorNumero = nome;
}
}
}

if (maiorNumero !== -Infinity) {
document.getElementById("h5").innerHTML = "O aluno(a) com maior nota é " + nomeMaiorNumero + " e possui uma nota "  + maiorNumero;
} else {
document.getElementById("h5").innerHTML = ('Nenhum número válido encontrado.');
  }
 }