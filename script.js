AOS.init();

// Detecta quando o usuário rola a página
window.onscroll = function() {
    scrollFunction();
};

// Mostra ou oculta os botões com base na posição da rolagem
function scrollFunction() {
    const scrollToTopButtons = document.querySelectorAll(".scrollToTopButton");
    
    scrollToTopButtons.forEach(function(button) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
}

// Rola para o topo da página quando um botão é clicado
const scrollToTopButtons = document.querySelectorAll(".scrollToTopButton");
scrollToTopButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        document.body.scrollTop = 0; // Para navegadores da web
        document.documentElement.scrollTop = 0; // Para IE/Edge
    });
});

new window.VLibras.Widget('https://vlibras.gov.br/app');
