var btt = document.getElementById('meu-botao')
var imagem = document.getElementById('imageContainer')

btt.addEventListener('click', () => {
    audio.play();
    btt.style.zIndex = 0;
    setTimeout(() => {
        imagem.style.opacity = 1;
    }, 100)
})