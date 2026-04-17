// Passo 1: Encontrar os elementos na página
// Pegamos o botão que criaremos no HTML através do seu ID
const botaoTema = document.getElementById('toggle-tema');
// Pegamos o elemento principal (body) para mudar a cor de fundo de todo o site
const body = document.body;

// Passo 2: Dizer ao botão o que fazer quando for clicado
botaoTema.addEventListener('click', () => {
    
    // O 'toggle' funciona como um interruptor. Se a classe 'dark-mode' não existir no body, ele adiciona. Se já existir, ele remove.
    body.classList.toggle('dark-mode');

    // Passo 3: Mudar o texto do botão para fazer sentido com o tema atual
    if (body.classList.contains('dark-mode')) {
        // Se o modo escuro estiver ativo, o botão oferece a opção do modo claro
        botaoTema.textContent = '☀️ Modo Claro';
    } else {
        // Se o modo escuro estiver desativado, o botão oferece o modo escuro
        botaoTema.textContent = '🌙 Modo Escuro';
    }
});