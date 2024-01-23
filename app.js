let numeroAleatorio = gerarNumeroAleatorio();
let contador = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'Número Secreto');
exibirTexto('p', 'Escolha um número de 1 a 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio){
        exibirTexto('h1', 'Acertou!');
        let plural = contador > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${contador} ${plural}.`;
        exibirTexto('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroAleatorio){
            exibirTexto('p', 'O número secreto é menor');
        }else{
            exibirTexto('p', 'O número secreto é maior');
        }
        
    }
    contador++;
    limpar();
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); 
}

function limpar() {
    chute = document.querySelector('input');
    chute.value = '';
}

function newGame() {
    numeroAleatorio = gerarNumeroAleatorio();
    contador = 1;
    limpar();
    exibirTexto('h1', 'Número Secreto');
    exibirTexto('p', 'Escolha um número de 1 a 10');
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}