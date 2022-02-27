function initPage() {
  //Pega o registro STORAGE no localstorage.
  var registro = localStorage.getItem("storage");
  var cliente = document.querySelector("#cliente");
  var pedido = document.querySelector("#pedido");
  var email = document.querySelector("#email");

  var random = Math.floor(Math.random() * 905536);

  var parse = JSON.parse(registro);
  var obj = JSON.parse(parse);

  cliente.innerHTML = "Olá " + obj.nome + ", obrigado por comprar na RCHLO";

  pedido.innerHTML = "Seu pedido: " + random;

  email.innerHTML =
    "Em breve receberá um email com a confirmação de seu pedido em: " +
    obj.email;
}
