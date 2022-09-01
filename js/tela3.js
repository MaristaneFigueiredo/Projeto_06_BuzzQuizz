let nomeDoQuizz = document.getElementById('titulo')
let fotoDoQuizz = document.getElementById('url')
let perguntasQuizz = document.getElementById('quantidadePerguntas')
let niveisQuizz = document.getElementById('quantidadeNiveis')

let tela3_1 = document.querySelector('.tela3-1') 
let tela3_2 = document.querySelector('.tela3-2')

function prosseguir(){
    nomeDoQuizz = nomeDoQuizz.value
    fotoDoQuizz = fotoDoQuizz.value 
    perguntasQuizz = perguntasQuizz.value
    niveisQuizz = niveisQuizz.value
        
    if((nomeDoQuizz.length < 20 || nomeDoQuizz.length > 64)){
        alert('O título deve ter mais de 20 e menos de 60 caracteres')
        while (nomeDoQuizz.length < 20 || nomeDoQuizz.length > 64){
            nomeDoQuizz = prompt('Digite aqui o novo título')
        }
    }else if(perguntasQuizz < 3){
        alert('Você deve ter no mínimo 3 perguntas')
        while (perguntasQuizz < 3){
            perguntasQuizz = prompt('Digite novamente o valor de perguntas')
        }
    }else if(niveisQuizz < 2){
        alert('Você deve ter no mínimo 2 níveis para o Quizz')
        while (niveisQuizz < 2){
            niveisQuizz = prompt('Digite novamente os níveis do Quizz')
        }
    }
    tela3_1.classList.add('escondido')
    tela3_2.classList.remove('escondido')
}

function criarFormulario(){
    
}