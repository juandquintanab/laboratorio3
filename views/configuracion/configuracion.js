document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");

  if (!formulario) {
    console.warn("Formulario no encontrado");
    return;
  }

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita que se recargue la página

    const formData = new FormData(formulario);
    const datos = {};

    // Convertimos los datos en un objeto JSON (excluye archivos)
    formData.forEach((value, key) => {
      // Si ya existe la clave (como en los radio buttons), agrégalo como array
      if (datos[key]) {
        if (!Array.isArray(datos[key])) {
          datos[key] = [datos[key]];
        }
        datos[key].push(value);
      } else {
        datos[key] = value;
      }
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

     // Obtener el historial previo, o inicializar como arreglo vacío
    const historial = JSON.parse(localStorage.getItem("historialConfiguracion")) || [];

    // Agregar el nuevo resultado
    historial.push(resultado);

    // Guardar el historial actualizado
    localStorage.setItem("historialConfiguracion", JSON.stringify(historial));

      alert("Formulario enviado y datos guardados correctamente.");
      formulario.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el formulario.");
    }
  });

});