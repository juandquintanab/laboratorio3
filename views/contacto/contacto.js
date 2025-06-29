document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");

  if (!formulario) {
    console.warn("Formulario no encontrado");
    return;
  }

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault(); 

    const formData = new FormData(formulario);
    const datos = {};

    formData.forEach((value, key) => {
      datos[key] = value;
    });

    try {
      const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) throw new Error("Error en la solicitud");

      const resultado = await respuesta.json();

      const historial = JSON.parse(localStorage.getItem("historialContacto")) || [];
      historial.push(resultado);
      localStorage.setItem("historialContacto", JSON.stringify(historial));

      alert("Formulario enviado y guardado en historial.");
      formulario.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el formulario.");
    }
  });
});
