const fecharLogin = document.querySelector(".fechar");
const container = document.querySelector(".modal-container");

if (fecharLogin && container) {
  container.classList.add("ativo");

  function fecharModal(event) {
    event.preventDefault();
    container.classList.remove("ativo");
  }

  function clickForaModal(event) {
    if (event.target === this) {
      fecharModal(event);
    }
  }

  fecharLogin.addEventListener("click", fecharModal);
  container.addEventListener("click", clickForaModal);
}
