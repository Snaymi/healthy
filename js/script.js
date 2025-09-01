//alert('JS Carregado');
//console.log('Teste de console');

//Seleção de DOM (Document Object Model)
//No JS tudo é objeto 
//Objeto tem acesso à métodos e propriedades
//console.log(document);

var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');
var fundoPopup = document.querySelector('.fundo');

//console.log(btnMenu);
//console.log(menu);

//toggleMenu

//Função -> Rotina que deverá ser acionada

//Eventos -> Gatilhos/Ação do usuário
btnMenu.addEventListener('click', function() {
    menu.classList.toggle('show');
    btnMenu.classList.toggle('x');
})

menu.addEventListener('click', function() {
    menu.classList.remove('show')
    btnMenu.classList.remove('x')
})
fundoPopup.addEventListener('click', function(){
    fundoPopup.style.display = 'none';
})