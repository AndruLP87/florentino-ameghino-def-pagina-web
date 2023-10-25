// Obtén una referencia al formulario
const formulario = document.getElementById("miFormulario");

// Agrega un manejador de eventos al evento "submit" del formulario
formulario.addEventListener("submit", function(event){
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtén los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Crea un objeto FormData para enviar los datos
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("email", email);
    formData.append("mensaje", mensaje);

    // Crea una instancia de XMLHttpRequest (o utiliza Fetch si prefieres)
    const xhr = new XMLHttpRequest();

    // Configura la solicitud AJAX
    xhr.open("POST", "procesar.php", true); // Reemplaza "procesar.php" con la URL de tu servidor

    // Agrega un manejador de eventos para manejar la respuesta del servidor
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // La solicitud se completó con éxito, puedes manejar la respuesta del servidor aquí
            console.log("Respuesta del servidor:", xhr.responseText);
        } else {
            // La solicitud falló, maneja el error aquí
            console.error("Error en la solicitud al servidor.");
        }
    };

    // Envía la solicitud con los datos del formulario
    xhr.send(formData);
});
