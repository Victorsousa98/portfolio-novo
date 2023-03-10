
document.addEventListener("DOMContentLoaded", function() {
    abrirModal();
  });


function abrirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }
  
  // Fecha o modal
  function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }