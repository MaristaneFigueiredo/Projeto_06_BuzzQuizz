let nomeDoQuizz = document.getElementById('titulo')
let fotoDoQuizz = document.getElementById('url')
let perguntasQuizz = document.getElementById('quantidadePerguntas')
let niveisQuizz = document.getElementById('quantidadeNiveis')

let tela3_1 = document.querySelector('.tela3-1') 
let tela3_2 = document.querySelector('.tela3-2')
let formulario = document.querySelector('.formulario')
let contador = 2

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
    criarFormulario()
}


function criarFormulario(){
    while (contador < perguntasQuizz){
        formulario.innerHTML += `<div class="pergunta2">
        <div class='titulo'><h4>Pergunta ${contador+1}</h4>
        <img src="./imagens/Vector.png" alt='Botão para abrir a aba' width="26" height="26" onclick="aparecerFormulario(this)">
    </div>
        <div class="opcoesEscondidas${contador+1} escondido">
            <input type="text" placeholder='Texto da pergunta' required>
            <input type="text" placeholder="Cor de fundo da pergunta" required>
            <h3>Resposta correta</h3>
    
            <input type="text" placeholder="Resposta correta" required>
            <input type="url" placeholder="URL da imagem" required>
            <h3>Respostas incorretas</h3>
    
            <div class="respostaErrada">
                <input type="text" placeholder="Resposta incorreta 1" required>
                <input type="url" placeholder="URL da imagem" required>
            </div>
    
            <div class="respostaErrada">
                <input type="text" placeholder="Resposta incorreta 2" required>
                <input type="url" placeholder="URL da imagem" required>
            </div>
    
            <div class="respostaErrada">
                <input type="text" placeholder="Resposta incorreta 3" required>
                <input type="url" placeholder="URL da imagem" required>
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