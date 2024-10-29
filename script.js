document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", function () {
      document.getElementById("imageModal").style.display = "block";
      document.getElementById("modalImage").src = this.src;
    });
  });
  
  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }

  // Seleciona todas as imagens da galeria
document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", function () {
      // Exibe o modal
      document.getElementById("imageModal").style.display = "flex";
      // Define a imagem clicada como a imagem do modal
      document.getElementById("modalImage").src = this.src;
    });
  });
  
  // Função para fechar o modal
  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }

  // Seleciona todas as imagens da galeria e adiciona o evento de clique
document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", function () {
        const modal = document.getElementById("imageModal");
        const modalImage = document.getElementById("modalImage");

        // Exibe o modal com a imagem clicada e adiciona a classe de transição
        modal.style.display = "flex";
        modalImage.src = this.src;
        modalImage.classList.add("open");

        // Remove a classe de transição após a animação
        setTimeout(() => {
            modalImage.classList.remove("open");
        }, 300); // Tempo da transição
    });
});

// Função para fechar o modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

  