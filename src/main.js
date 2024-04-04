document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelectorAll('.hero');
    const alturaHero = heroSection.clienteHeight;

    window.addEventListener('scrool', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero){
            console.log("exibe os elementos")
        }
    })
    
    //Seção de atrações, programação da abas
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escodeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removerBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
    
    //Seção FAQ accordeon
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
})

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai =  elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removerBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escodeTodasAbas (){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');

    }
}
//parei no 30:25