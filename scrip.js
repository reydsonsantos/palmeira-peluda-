
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os links do menu que apontam para IDs (#)
    const linksMenu = document.querySelectorAll('nav a');
    // Pega a altura do menu de navegação para descontar na rolagem
    const alturaNav = document.querySelector('nav').offsetHeight;

    linksMenu.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o salto instantâneo

            const idAlvo = link.getAttribute('href');
            const elementoAlvo = document.querySelector(idAlvo);

            if (elementoAlvo) {
                // Calcula a posição exata descontando o menu fixo
                const posicaoElemento = elementoAlvo.getBoundingClientRect().top + window.scrollY;
                const posicaoFinal = posicaoElemento - alturaNav - 10; // 10px de margem extra

                // Executa a rolagem suave
                window.scrollTo({
                    top: posicaoFinal,
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("Sistema de navegação inteligente ativado!");
});
