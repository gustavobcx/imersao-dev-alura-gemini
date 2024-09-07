let campoPesquisa = document.getElementById("campo-pesquisa");

function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  pesquisa = campoPesquisa.value.toLowerCase();

  const nenhumResultado = '<div class="item-resultado"><p>Nenhum colchão encontrado!</p></div>';

  if (!pesquisa) {
    section.innerHTML = nenhumResultado;
    return;
  }

  let resultados = "";
  for (let dado of dados) {
    let nome = dado.nome.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let marca = dado.marca.toLowerCase();
    let tipo = dado.tipo.toLowerCase();
    let medidas = dado.medidas.join(",").toLowerCase();
    let firmeza = dado.firmeza.toLowerCase();

    if (
      nome.includes(pesquisa) ||
      descricao.includes(pesquisa) ||
      marca.includes(pesquisa) ||
      tipo.includes(pesquisa) ||
      medidas.includes(pesquisa) ||
      firmeza.includes(pesquisa)
    ) {
      let medidas = dado.medidas
        .map(
          (medida) =>
            `<span onClick="buscaPorMedida('${medida}')">${medida}</span>`
        )
        .join("");
      resultados += `
        <div class="item-resultado">
          <h2>${dado.nome}</h2>
          <h3>${dado.marca}</h3>
          <p class="descricao">${dado.descricao}</p>
          <p class="descricao">Tipo: ${dado.tipo}</p>
          <p class="descricao">Firmeza: ${dado.firmeza}</p>
          <p class="medidas">${medidas}</p>
        </div>
      `;
    }
  }

  if (!resultados) {
    resultados = nenhumResultado;
  }

  section.innerHTML = resultados;
}

function buscaPorMedida(medida) {
  campoPesquisa.value = medida;
  pesquisar();
}
