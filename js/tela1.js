function chamarTela3() {
    console.log('entrou na função chamarTela3')
    alternar('tela1', false);
    alternar('tela2', false);
    alternar('tela3', true);

}

function chamarTela2() {
    console.log('entrou na função chamarTela2')
    alternar('tela1', false)
    alternar('tela2', true)
    alternar('tela3', false)
}


iniciarBuzzQuizz();

async function iniciarBuzzQuizz() {
    const quizzes = await buscarTodosQuizzes()
    localStorage.setItem('todos-quizzes', JSON.stringify(quizzes))
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
    exibeQuizzSelecionado(data)

}

function exibeQuizzSelecionado(quizz) {
    document.querySelector('.imagem-quizz-selecionado').setAttribute("src", quizz.image)

}




async function buscarTodosQuizzes() {
    try {
        const { data } = await axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
        return data

    }
    catch (exception) {
        alert('erro')
    }
}

function imprimirQuizes(quizzes) {
    const areaTodosQuizzes = document.querySelector('.todos-quizzes > .area-lista-quizzes')
    let html = ''
    for (let i = 0; i < quizzes.length; i++) {
        // console.log('quizzes[i] =',quizzes[i].title)
        html += `<div class="quizz" onclick="">
                    <img class= "formatar-imagem-quizz" src="${quizzes[i].image}" onclick="selecionaQuizz(${quizzes[i].id})">
                    <div class="titulo-quizz"> ${quizzes[i].title}</div>
            </div>`
        areaTodosQuizzes.innerHTML = html
        //${quizzes[i].id}
    }


}
