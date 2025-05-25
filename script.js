function mostrarCoracoes() {
  const emojis = ['❤️', '❤️', '❤️']; // só corações

  // Criar 20 corações
  for (let i = 0; i < 20; i++) {
    const coracao = document.createElement('div');
    coracao.classList.add('heart');
    coracao.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.animationDuration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 5000);
  }

  // Criar 5 fotos animadas subindo aleatórias
  for (let i = 0; i < 5; i++) {
    const foto = document.createElement('img');
    foto.src = 'eu.jpg'; // troque pelo caminho da sua foto
    foto.alt = 'Minha foto';
    foto.classList.add('foto-coracao');
    foto.style.position = 'fixed';
    foto.style.left = Math.random() * 100 + 'vw';
    foto.style.top = '100vh'; // começa na parte de baixo da tela
    foto.style.width = '2rem';
    foto.style.height = '2rem';
    foto.style.borderRadius = '50%';
    foto.style.objectFit = 'cover
