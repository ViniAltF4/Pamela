function mostrarCoracoes() {
  const emojis = ['❤️', '❤️', '❤️'];

  // Criar 20 corações animados
  for (let i = 0; i < 20; i++) {
    const coracao = document.createElement('div');
    coracao.classList.add('heart');
    coracao.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.top = '100vh';
    coracao.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 5000);
  }

  // Criar 5 fotos animadas subindo
  for (let i = 0; i < 5; i++) {
    const foto = document.createElement('img');
    foto.src = 'eu.jpg';
    foto.alt = 'Minha foto';
    foto.classList.add('foto-coracao');
    foto.style.left = Math.random() * 100 + 'vw';
    foto.style.top = '100vh';
    foto.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(foto);

    setTimeout(() => {
      foto.remove();
    }, 5000);
  }
}
