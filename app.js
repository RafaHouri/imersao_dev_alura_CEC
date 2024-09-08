console.log (Topicos);
console.log (Historia);
console.log (Elenco);
console.log (Titulos);
console.log (Partidas);


function pesquisar() {
  const termoPesquisa = document.querySelector('.search-input').value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const elementos = document.querySelectorAll('h3, p');
  let contagem = 0;

  elementos.forEach(elemento => {
    const textoElemento = elemento.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const regex = new RegExp(termoPesquisa, 'gi');
    const matches = textoElemento.match(regex);

    if (matches) {
      contagem += matches.length;
      const novoHtml = textoElemento.replace(regex, match => `<span class="destaque">${match}</span>`);
      elemento.innerHTML = novoHtml;

      // Encontrar a seção pai do elemento encontrado
      const secao = elemento.closest('section');
      secao.classList.add('ativo');

      // Encontrar a letra inicial do nome encontrado
      const letraInicial = matches[0].charAt(0).toUpperCase();

      // Encontrar o link correspondente no alfabeto
      const link = document.querySelector(`#alphabet a[href="#${letraInicial}"]`);
      if (link) {
        link.click();
      }
    }
  });

  // Mostrar o número de correspondências
  alert(`Encontradas ${contagem} ocorrências`);

}