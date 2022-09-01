function alternar(nomeTela, showTela){
    console.log('main-nomeTela',nomeTela)
    console.log('main-showTela',showTela)
    const componente = document.querySelector(`.${nomeTela}`);
    console.log('main-componente',componente)
    if (showTela === false) {
        componente.classList.add('escondido');        
    } else componente.classList.remove('escondido');        
    console.log('main-depois if-componente',componente)

}

