let lastScrollY = window.scrollY; // Armazena a última posição de rolagem

window.addEventListener('scroll', function() {
    const foguete = document.querySelector('.aula-experimental .foguete');
    const scrollPosition = window.scrollY;

    // Movimenta o foguete para baixo de acordo com a rolagem
    const foguetePositionY = scrollPosition * 0.19; // Ajuste a velocidade conforme necessário

    // Verifica a direção do scroll e aplica a rotação junto com a movimentação
    if (scrollPosition > lastScrollY) {
        // Rolando para baixo, foguete aponta para baixo
        foguete.style.transform = `translateY(${foguetePositionY}px) rotate(0deg)`;
    } else {
        // Rolando para cima, foguete aponta para cima
        foguete.style.transform = `translateY(${foguetePositionY}px) rotate(180deg)`;
    }

    lastScrollY = scrollPosition; // Atualiza a última posição de rolagem
});




