// Selecionando pelo ID do título
const title = document.getElementById("titulo");

const message = document.getElementsByClassName("mensagem2");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

const changeMessageBtn = document.getElementById("btn-mudar-frases");


// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});



  changeMessageBtn.addEventListener("click", function () {
    for (var a=0; a<3; a++){
  message[a].textContent = `Mensagem ${a + 1} alterada utilizando JS!`;
    }
});
 
