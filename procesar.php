<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    $dbname = "formuServ_db";

    
    // Realiza alguna acción con los datos, como guardarlos en una base de datos o enviar un correo electrónico
    
    // En este ejemplo, simplemente los mostramos en la respuesta
    echo "Nombre: " . $nombre . "<br>";
    echo "Correo Electrónico: " . $email . "<br>";
    echo "Mensaje: " . $mensaje . "<br>";
} else {
    // Si no es una solicitud POST, muestra un mensaje de error
    echo "Error: Acceso no válido.";
}
?>