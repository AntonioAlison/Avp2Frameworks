const track = document.getElementById('carouselTrack');
  const totalSlides = track.children.length;
  let index = 0;

  function moveToNextSlide() {
      // Avança para a próxima imagem
      index++;
      if (index >= totalSlides) {
          index = 0;
      }

      // Ajusta a posição de todos os slides
      track.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(moveToNextSlide, 3000); // Mudar a cada 3 segundos

  /* Cadastro */
  
  document.addEventListener("DOMContentLoaded", function () {
    // Referências aos botões e seções
    const pessoaFisicaBtn = document.querySelector('[aria-label="Cadastro para Pessoa Física"]');
    const pessoaJuridicaBtn = document.querySelector('[aria-label="Cadastro para Pessoa Jurídica"]');
    const infoComercialSection = document.querySelector('[aria-labelledby="info-comercial"]');

    // Ocultar a seção info-comercial inicialmente
    infoComercialSection.style.display = "none";

    // Adicionar evento de clique ao botão Pessoa Jurídica
    pessoaJuridicaBtn.addEventListener("click", function () {
        // Exibir a seção info-comercial
        infoComercialSection.style.display = "block";
    });

    // Adicionar evento de clique ao botão Pessoa Física
    pessoaFisicaBtn.addEventListener("click", function () {
        // Ocultar a seção info-comercial
        infoComercialSection.style.display = "none";
    });
});