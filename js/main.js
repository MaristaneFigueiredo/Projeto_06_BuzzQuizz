function toggle(nomeTela, showTela){
    const componente = document.querySelector(`.${nomeTela}`);
    if (showTela === false) {
        componente.classList.add('escondido');        
    } else componente.classList.remove('escondido');        
}