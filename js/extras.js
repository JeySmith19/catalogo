  const tituloOriginal = document.title;

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      document.title = "¿Papi te vas? 😢";
    } else {
      document.title = tituloOriginal;
    }
  });
