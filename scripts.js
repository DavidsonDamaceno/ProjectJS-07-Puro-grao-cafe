const btnMenu = document.getElementById('btn-menu');
const header = document.querySelector('header');
const menuLinks = document.querySelectorAll('#menu a');
const textoElement = document.querySelector('.texto-escondido');
const imgElement = document.querySelector('.produto-item img');

btnMenu.addEventListener('click', () => {
    header.classList.toggle('menu-aberto');

    const menuAberto = header.classList.contains('menu-aberto');
    btnMenu.setAttribute('aria-expanded', menuAberto);
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        header.classList.remove('menu-aberto');
        btnMenu.setAttribute('aria-expanded', 'false');
    });
});

function send() {

    alert("Mensagem enviada com sucesso!");

    const form = document.querySelector('.form-contato');
    if (form) {
        form.reset();
    }
}


const imagensProdutos = document.querySelectorAll('.produto-item img');


imagensProdutos.forEach(imagem => {


    imagem.addEventListener('click', () => {


        const paiDaImagem = imagem.parentElement;


        const textoParaMostrar = paiDaImagem.querySelector('.texto-escondido');


        textoParaMostrar.classList.toggle('visivel');

    });
});



