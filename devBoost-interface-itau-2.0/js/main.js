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
