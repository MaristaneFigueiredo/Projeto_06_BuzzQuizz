let nomeDoQuizz = document.getElementById('titulo')
let fotoDoQuizz = document.getElementById('url')
let perguntasQuizz = document.getElementById('quantidadePerguntas')
let niveisQuizz = document.getElementById('quantidadeNiveis')

let tela3_1 = document.querySelector('.tela3-1') 
let tela3_2 = document.querySelector('.tela3-2')
let formulario = document.querySelector('.formulario')
let contador = 2
let contadorPerguntas = 1
let contadorInputTexto1 = 1
let objeto = {}


function prosseguir(){
    nomeDoQuizz = nomeDoQuizz.value
    fotoDoQuizz = fotoDoQuizz.value 
    perguntasQuizz = perguntasQuizz.value
    niveisQuizz = niveisQuizz.value

    objeto = {
        title: nomeDoQuizz,
        image: fotoDoQuizz,
    }
        
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
    criarFormulario()
}


function criarFormulario(){
    while (contador < perguntasQuizz){
        formulario.innerHTML += `<div class="pergunta2">
        <div class='titulo'><h4>Pergunta ${contador+1}</h4>
        <img src="./imagens/Vector.png" alt='Botão para abrir a aba' width="26" height="26" onclick="aparecerFormulario(this)">
    </div>
        <div class="opcoesEscondidas${contador+1} escondido obrigatorio">
            <input type="text" placeholder='Texto da pergunta' class='textoPergunta${contador+1}' required>
            <input type="text" placeholder="Cor de fundo da pergunta" class='corPergunta${contador+1}' required>
            <h3>Resposta correta</h3>
    
            <input type="text" placeholder="Resposta correta" class='respostaCorreta${contador+1}' required>
            <input type="url" placeholder="URL da imagem" class='urlPrimeiraCorreta${contador+1}' required>
            <h3>Respostas incorretas</h3>
    
            <div class="respostaErrada">
                <input type="text" placeholder="Resposta incorreta 1" class='textoIncorreto${contador+1}' required>
                <input type="url" placeholder="URL da imagem" class='urlPrimeiraIncorreta${contador+1}' required>
            </div>
    
            <div class="respostaErrada">
                <input type="text" placeholder="Resposta incorreta 2" class='textoIncorreto${contador+1}' required>
                <input type="url" placeholder="URL da imagem" class='urlPrimeiraIncorreta${contador+1}' required>
            </div>
    
            <div class="respostaErrada">
                <input type="text" placeholder="Resposta incorreta 3" class='textoIncorreto${contador+1}' required>
                <input type="url" placeholder="URL da imagem" class='urlPrimeiraIncorreta${contador+1}' required>
            </div>
    </div>`
    
    contador += 1
    }
}

function aparecerFormulario(imagem){
    divPai = imagem.parentNode
    divAvo = divPai.parentNode
    divEscondida = divAvo.children[1]
    divEscondida.classList.toggle('escondido')
    console.log(imagem, divPai, divAvo, divEscondida)
}


function preencherFormulario(){
    console.log('entrei no preencherform')
    objeto.questions =  [
        {
        title: document.querySelector(`.opcoesEscondidas1 .textoPergunta1`).value,
        color: document.querySelector(`.opcoesEscondidas1 .corPergunta1`).value,
        answers: [
            {
                text: document.querySelector('.opcoesEscondidas1 .respostaCorreta1').value,
                image: document.querySelector('.opcoesEscondidas1 .urlPrimeiraCorreta1').value,   
                isCorrectAnswer: true
            },
            {
                text: document.querySelector('.opcoesEscondidas1 .textoIncorreto1').value,
                image: document.querySelector('.opcoesEscondidas1 .urlPrimeiraIncorreta1').value,
                isCorrectAnswer: false
            },
            {
                text: document.querySelector('.opcoesEscondidas1 .textoIncorreto2').value,
                image: document.querySelector('.opcoesEscondidas1 .urlPrimeiraIncorreta2').value,
                isCorrectAnswer: false
            },
            {
                text: document.querySelector('.opcoesEscondidas1 .textoIncorreto3').value,
                image: document.querySelector('.opcoesEscondidas1 .urlPrimeiraIncorreta3').value,
                isCorrectAnswer: false
            }
        ]
    },
    {
      title: document.querySelector('.opcoesEscondidas2 .textoPergunta2').value,
      color: document.querySelector('.opcoesEscondidas2 .corPergunta2').value,
      answers: [
        {
            text: document.querySelector('.opcoesEscondidas2 .respostaCorreta1').value,
            image: document.querySelector('.opcoesEscondidas2 .urlPrimeiraCorreta1').value,
            isCorrectAnswer: true
        },
        {
            text: document.querySelector('.opcoesEscondidas2 .textoIncorreto1').value,
            image: document.querySelector('.opcoesEscondidas2 .urlPrimeiraIncorreta1').value,
            isCorrectAnswer: false
        },
        {
            text: document.querySelector('.opcoesEscondidas2 .textoIncorreto2').value,
            image: document.querySelector('.opcoesEscondidas2 .urlPrimeiraIncorreta2').value,
            isCorrectAnswer: false
        },
        {
            text: document.querySelector('.opcoesEscondidas2 .textoIncorreto3').value,
            image: document.querySelector('.opcoesEscondidas2 .urlPrimeiraIncorreta3').value,
            isCorrectAnswer: false
        }
      ]
    }
    ]
    let contador = 2
    while (contador < perguntasQuizz){
        console.log('entrei no while do preencherform')
        objeto.questions.push(
            {
            title: document.querySelector(`.opcoesEscondidas${contador+1} .textoPergunta${contador+1}`).value,
            color: document.querySelector(`.opcoesEscondidas${contador+1} .corPergunta${contador+1}`).value,
            answers: [
              {
                  text: document.querySelector(`.opcoesEscondidas${contador+1} .respostaCorreta${contador+1}`).value,
                  image: document.querySelector(`.opcoesEscondidas${contador+1} .urlPrimeiraCorreta${contador+1}`).value,
                  isCorrectAnswer: true
              },
              {
                  text: document.querySelector(`.opcoesEscondidas${contador+1} .textoIncorreto${contador+1}`).value,
                  image: document.querySelector(`.opcoesEscondidas${contador+1} .urlPrimeiraIncorreta${contador+1}`).value,
                  isCorrectAnswer: false
              },
              {
                  text: document.querySelector(`.opcoesEscondidas${contador+1} .textoIncorreto${contador+1}`).value,
                  image: document.querySelector(`.opcoesEscondidas${contador+1} .urlPrimeiraIncorreta${contador+1}`).value,
                  isCorrectAnswer: false
              },
              {
                  text: document.querySelector(`.opcoesEscondidas${contador+1} .textoIncorreto${contador+1}`).value,
                  image: document.querySelector(`.opcoesEscondidas${contador+1} .urlPrimeiraIncorreta${contador+1}`).value,
                  isCorrectAnswer: false
              }
            ]
          }
        
        )
        contador += 1
    }
}

function esconderTela3_2(){
    let tela3_2 = document.querySelector('.tela3-2')
    tela3_2.classList.add('escondido')
    tela3_3.classList.remove('escondido')
}