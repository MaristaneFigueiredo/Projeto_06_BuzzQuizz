let nomeDoQuizz = document.getElementById('titulo')
let fotoDoQuizz = document.getElementById('url')
let perguntasQuizz = document.getElementById('quantidadePerguntas')
let niveisQuizz = document.getElementById('quantidadeNiveis')

let tela3_1 = document.querySelector('.tela3-1') 
let tela3_2 = document.querySelector('.tela3-2')
let tela3_4 = document.querySelector('.tela3-4')
let formulario = document.querySelector('.formulario')
let contador = 2
let contadorPerguntas = 1
let contadorInputTexto1 = 1
let contadorNiveis = 2
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
    } esconderTela3_2()
}

function esconderTela3_2(){
    let tela3_2 = document.querySelector('.tela3-2')
    let tela3_3 = document.querySelector('.tela3-3')
    tela3_2.classList.add('escondido')
    tela3_3.classList.remove('escondido')
    gerarNiveis()
}

function gerarNiveis(){
    let telaNiveis = document.querySelector('.tabelaNiveis')
    while (contadorNiveis < niveisQuizz){
        telaNiveis.innerHTML += `
            <div class="nivel${contadorNiveis+1} referenciaNiveis">
                <h4>Nível ${contadorNiveis+1}</h4>
                <input type="text" placeholder="Título do nível" class='tituloNivel${contadorNiveis+1}' required>
                <input type="number" placeholder="Porcentagem de acerto mínima" class='porcentagemNivel${contadorNiveis+1}' required>
                <input type="url" placeholder="URL da imagem do nível" class='urlNivel${contadorNiveis+1}' required>
                <input type="text" placeholder="Descrição do nível" class='descricaoNivel${contadorNiveis+1}' required>
            </div>`
            contadorNiveis += 1
    }
}

function preencherNiveis(){
    console.log('preencher níveis aqui')
    contadorNiveis = 2
    objeto.levels = [
        {
            title: document.querySelector('.nivel1 .tituloNivel1').value,
            image: document.querySelector('.nivel1 .urlNivel1').value,
            text: document.querySelector('.nivel1 .descricaoNivel1').value,
            minValue: document.querySelector('.nivel1 .porcentagemNivel1').value
        },
        {
            title: document.querySelector('.nivel2 .tituloNivel2').value,
            image: document.querySelector('.nivel2 .urlNivel2').value,
            text: document.querySelector('.nivel2 .descricaoNivel2').value,
            minValue: document.querySelector('.nivel2 .porcentagemNivel2').value   
        }
    ]
    while (contadorNiveis < niveisQuizz){
        console.log('entrei no loop dos níveis')
        console.log(contadorNiveis)
        objeto.levels.push(
            {
            title: document.querySelector(`.nivel${contadorNiveis+1} .tituloNivel${contadorNiveis+1}`).value,
            image: document.querySelector(`.nivel${contadorNiveis+1} .urlNivel${contadorNiveis+1}`).value,
            text: document.querySelector(`.nivel${contadorNiveis+1} .descricaoNivel${contadorNiveis+1}`).value,
            minValue: document.querySelector(`.nivel${contadorNiveis+1} .porcentagemNivel${contadorNiveis+1}`).value
        }
    )
    contadorNiveis += 1
} 
}

function postAPI(){
    axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', objeto)
         .then(esconderTela3_3)
         .catch()
}

function esconderTela3_3(resposta){
    let id = resposta.data.id
    console.log(id)
    let tela3_3 = document.querySelector('.tela3-3')
    let tela3_4 = document.querySelector('.tela3-4')

    tela3_3.classList.add('escondido')
    tela3_4.classList.remove('escondido')

    armazenarQuizzDoUsuario(id)

    tela3_4.innerHTML = 
    `<h4>Seu quizz está pronto!</h4>
     <img src="${fotoDoQuizz}" alt ="foto do quizz">
     <div class='botaoAcessar'>Acessar Quizz
     </div>
     <p onclick='chamarTela1()'>Voltar pra home</p>`
    
}

function chamarTela1() {
    console.log('entrou na função chamarTela1')
    alternar('.tela1', true);
    alternar('.tela2', false);
    alternar('.tela3-1', false);
    alternar('.tela3-4', false)
    iniciarBuzzQuizz(); /*O código dessa rotina está na tela1. É necessário chamá-la aqui, pois atualiza os quizzes do próprio usuário e todos na tela 1 */

}






function armazenarQuizzDoUsuario(id)
{
    let arrayDeQuizzes = JSON.parse(localStorage.getItem('user-quizzes')) 
    arrayDeQuizzes.push(id)
    console.log('arrayDeQuizzes', arrayDeQuizzes);
    
    localStorage.setItem('user-quizzes', JSON.stringify(arrayDeQuizzes))
} 