function toogleCardInfo(element) {
  var cardInfo = document.querySelector(".toogle-info-card");
  cardInfo.classList.toggle("hide");

  element.classList.toggle("card-open");

  if (element.textContent == "expandir") {
    element.textContent = "ocultar";
  } else {
    element.textContent = "expandir";
  }
}

function toogleSaldo() {
  var saldoContainer = document.querySelector(".saldo-container");
  var values = saldoContainer.querySelectorAll(".saldo");

  if (values.length > 0) {
    for (i = 0; i < values.length; i++) {
      if (values[i].classList.contains("hide")) {
        values[i].classList.remove("hide");
      } else {
        values[i].classList.add("hide");
      }
    }
  }
}
