// Campeã de Streaming 
function tira() {
    const x = document.querySelector('#larg').value;
    const y = document.querySelector('#comp').value;
    const texto = document.querySelector('h4');
 
 if (x >= 0 && x <= 432 && y >= 0 && y <= 468) { 
 texto.innerHTML = "A bolinha está dentro.";
 } 
 else {
 texto.innerHTML = "A bolinha está fora.";
  }
 }
 
 // Melhor Aluno
 function melhor() {
 var a = 1(document.querySelector('#alunoA').value);
 const b = parseInt(document.querySelector('#alunob').value);
 const texto = document.querySelector('h5');
 
 while (a <= 100) {
if (b) {
    texto.innerHTML = "Número de alunos maior do que o permitido. Digite novamente.";
}
 
 }
}
 function melhor2() {
 
 const texto = document.querySelector('h6');

 while ( b ){
 texto.innerHTML = "O vice é B.";
 }
 }
 

 /*
 // Zerinho ou Um
 function zerinho(){
    const a = parseInt(document.querySelector('#a').value);
    const b = parseInt(document.querySelector('#b').value);
    const c = parseInt(document.querySelector('#c').value);
    const texto = document.querySelector('h6');
 
 
 if ((a != b) && (a != c)) {
    texto.innerHTML = 'A';
 }
 else if ((b != a) && (b != c)) {
    texto.innerHTML = 'B';
 }
 else if ((c != a) && (c != b)) {
    texto.innerHTML = 'C';
 }
 else {
    texto.innerHTML = '*';
 }
 }
 */