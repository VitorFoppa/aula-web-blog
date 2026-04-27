// Seleciona o botão secreto pelo novo ID
const btnSecreto = document.getElementById('btn-secreto');
const body = document.body;

btnSecreto.addEventListener('click', () => {
    // 1. Adiciona a classe que dispara a animação de glitch futurista
    body.classList.add('theme-transition');
    
    // 2. Espera um pequeno milissegundo no meio do "flash" para trocar o tema
    // Assim a mudança brusca de cor fica escondida pela animação
    setTimeout(() => {
        body.classList.toggle('dark-mode');
        
        // Atualiza o texto do botão secreto dependendo do estado do sistema
        if (body.classList.contains('dark-mode')) {
            btnSecreto.innerHTML = '🔙 Desativar Protocolo';
        } else {
            btnSecreto.innerHTML = '🤫 Modo Secreto';
        }
    }, 150); // Troca o tema 150ms após o início do glitch

    // 3. Remove a classe de animação após ela terminar (600ms) para que possa ser usada de novo
    setTimeout(() => {
        body.classList.remove('theme-transition');
    }, 600);
});