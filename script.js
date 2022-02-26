function mascaraCpf(i) {
  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";
}

function mascaraCVV(i) {
  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }
}

(function () {
  "use strict";

  // Seleciona todos os forms que desejamos aplicar a validação
  var forms = document.querySelectorAll(".needs-validation");

  // laço que previne a submissão do form até que sejá válido
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function totalValue() {
  var quantity = parseFloat(document.querySelector("#quantity").value);
  var product_value = parseFloat(
    document
      .querySelector("#product_value")
      .innerHTML.substring(2, 8)
      .replace(",", ".")
  );
  var total = document.querySelector("#total");

  var calc = quantity * product_value;
  var calc2 = calc.toFixed(2);

  total.value = "R$ " + calc2.toString().replace(".", ",");
}

function initPage() {
  var product_value = document
    .querySelector("#product_value")
    .innerHTML.substring(2, 8);
  var total = document.querySelector("#total");

  total.value = "R$ " + product_value;
}
