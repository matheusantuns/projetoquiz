function validar(){
    const nomeInput = document.getElementById("nome");
    const emailInput =document.getElementById("email");
    const descricaoInput = document.getElementById("descricao");
    let valida = true;

    //função para exibir erros
    function mostrarErro(inputElement, mensagem){
        const controle = inputElement.parentNode;
        const erroImg = controle.querySelect('.erro');
        const mensagemErro = controle.querySelect('small')
        mensagemErro.innerText = mensagem;
        controle.className = 'control erro';
        erroImg.style.display = 'block';
        valida =false;
    }
    mostrarErro();
}
