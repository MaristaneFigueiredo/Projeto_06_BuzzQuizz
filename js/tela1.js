function chamarTela3() {
    console.log('entrou na função chamarTela3')
    alternar('.tela1', false)
    alternar('.tela2', false)
    alternar('.tela3-1', true)

}

function chamarTela2() {
    console.log('entrou na função chamarTela2')
    alternar('.tela1', false)
    alternar('.tela2', true)
    alternar('.tela3-1', false)
}

function salvarQuizz()
{
    const quizz = []
    const objetoquizz = JSON.stringify(quizz)

    localStorage.setItem('user-quizzes', objetoquizz)

}

salvarQuizz();


iniciarBuzzQuizz();

function verificarQuizzesDoUsuario()
{
    const haQuizzesDoUsuario = (JSON.parse(localStorage.getItem('user-quizzes'))).length > 0
    const areaCriarQuizz = document.querySelector('.criar-quizz')
    const areaQuizzesDoUsuario = document.querySelector('.area-seus-quizzes')
    

    console.log('haQuizzesDoUsuario =', haQuizzesDoUsuario)
    console.log('areaQuizzesDoUsuario =', areaQuizzesDoUsuario)
    if (haQuizzesDoUsuario) {
        areaCriarQuizz.classList.add('escondido')
        areaQuizzesDoUsuario.classList.remove('escondido')
        
    }
    else {
        areaCriarQuizz.classList.remove('escondido')
        areaQuizzesDoUsuario.classList.add('escondido')
        
    }
}



async function iniciarBuzzQuizz() {
    const quizzes = await buscarTodosQuizzes()
    localStorage.setItem('todos-quizzes', JSON.stringify(quizzes))
    verificarQuizzesDoUsuario()
    imprimirQuizes(quizzes)

}

function selecionaQuizz(idQuizz) {
    console.log('idQuizz =', idQuizz)
    localStorage.setItem('idQuizzSelecionado', idQuizz)
    chamarTela2()
    obterQuizzSelecionado(idQuizz)
}

async function obterQuizzSelecionado(idQuizz) {
    const { data } = await axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idQuizz}`)
    console.log('quiz selecionado =', data)
    // exibeQuizzSelecionado(data)

}

// function exibeQuizzSelecionado(quizz) {
//     document.querySelector('.imagem-quizz-selecionado').setAttribute("src", quizz.image)

// }




async function buscarTodosQuizzes() {
    try {
        const { data } = await axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
        return data

    }
    catch (exception) {
        alert('erro')
    }
}

function ehQuizzDoUsuario(id) {
    console.log('id =', id)
    const quizdoUsuario = JSON.parse(localStorage.getItem('user-quizzes'))  
    return quizdoUsuario.filter( function(element) {

                                   return element === id
                                })
                                .length > 0

}

function imprimirQuizes(quizzes) {
    console.log('imprimirQuizes- quizzes', quizzes)
    
    const areaTodosQuizzes = document.querySelector('.todos-quizzes > .area-lista-quizzes')
    const areaQuizzesUsuario = document.querySelector('.area-lista-seus-quizzes')
    let html = ''
    for (let i = 0; i < quizzes.length; i++) {
        
        let QuizzDoUsuario = ehQuizzDoUsuario(quizzes[i].id)
        console.log('QuizzDoUsuario', QuizzDoUsuario)


        html = `<div class="quizz" onclick="">
                    <div class="tamanho-imagem-quizz">
                        <img class= "formatar-imagem-quizz" src="${quizzes[i].image}" onclick="selecionaQuizz(${quizzes[i].id})">
                    </div>
                    <div class="titulo-quizz"> ${quizzes[i].title}</div>
                </div>`


        if(QuizzDoUsuario) {
            console.log('QuizzDoUsuario -if', QuizzDoUsuario)
            areaQuizzesUsuario.innerHTML += html
        }
        else {
            console.log('QuizzDoUsuario -else', QuizzDoUsuario)            
            areaTodosQuizzes.innerHTML += html

        }

    }


}
