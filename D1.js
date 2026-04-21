function interactuar() {
    // 1. Pedimos el nombre
    let nombre = prompt("¿Cómo te llamas?");

    // Verificamos que no haya dado a "Cancelar"
    if (nombre !== null && nombre !== "") {
        
        // 2. Pedimos la película usando el nombre ya guardado
        let pelicula = prompt("Hola " + nombre + ", ¿cuál es tu película favorita?");

        if (pelicula !== null && pelicula !== "") {
            
            // 3. MOSTRAMOS EL RESULTADO EN UNA VENTANA EMERGENTE (ALERT)
            alert("¡Excelente! Hola " + nombre + ", tu película favorita es: " + pelicula + ", a mi tambien me gusta pero prefiero One Pice aunque sea un anime");
            
        } else {
            alert("No escribiste ninguna película.");
        }

    } else {
        alert("No escribiste un nombre.");
    }
}