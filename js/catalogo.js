document.addEventListener("DOMContentLoaded", () => {
  const categorias = { dionaeas, droseras, nepenthes, pinguiculas, sarracenias };
  const catalogo = document.getElementById("catalogo");
  const categoriaFiltro = document.getElementById("categoriaFiltro");
  const estadoFiltro = document.getElementById("estadoFiltro");
  const buscador = document.getElementById("buscador");

  function generarCatalogo() {
    const filtroCat = categoriaFiltro.value;
    const filtroEstado = estadoFiltro.value;
    const texto = buscador.value.toLowerCase();

    catalogo.innerHTML = "";

    Object.keys(categorias).forEach(nombreCat => {
      if (filtroCat !== "todas" && filtroCat !== nombreCat) return;

      categorias[nombreCat].forEach(planta => {
        const coincideEstado = filtroEstado === "todos" || planta.estado === filtroEstado;
        const coincideNombre = planta.nombre.toLowerCase().includes(texto);

        if (coincideEstado && coincideNombre) {
          const card = document.createElement("div");
          card.classList.add("planta");
          card.innerHTML = `
            <img src="${planta.imagen}" alt="${planta.nombre}">
            <div class="info">
              <div class="nombre">${planta.nombre}</div>
              <div class="precios">
                <b>Chica:</b> ${planta.precios.chica}<br>
                <b>Mediana:</b> ${planta.precios.mediana}<br>
                <b>Grande:</b> ${planta.precios.grande}
              </div>
              <div class="estado ${planta.estado}">
                ${planta.estado === "disponible" ? "Disponible" : planta.estado === "proximamente" ? "Próximamente" : "No disponible"}
              </div>
              <div class="actualizacion">Actualizado: ${planta.actualizacion}</div>
            </div>
          `;
          catalogo.appendChild(card);
        }
      });
    });
  }

  categoriaFiltro.addEventListener("change", generarCatalogo);
  estadoFiltro.addEventListener("change", generarCatalogo);
  buscador.addEventListener("input", generarCatalogo);

  generarCatalogo();
});
