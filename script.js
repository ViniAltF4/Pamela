function mostrarCoracoes() {
  for (let i = 0; i < 20; i++) {
    const coracao = document.createElement('div');
    coracao.classList.add('heart');
    coracao.textContent = '❤️';
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 5000);
  }
}
