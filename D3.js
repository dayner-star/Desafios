function calcularYMostrar() {
    // 1. Obtener el valor del input (es texto)
    let edadTexto = document.getElementById("edadUsuario").value;

    // 2. LA FÁBRICA DE CONVERSIÓN: Pasar a número entero
    let edadNumero = parseInt(edadTexto);

    // 3. Validación: Si el cuadro está vacío o no es un número
    if (isNaN(edadNumero) || edadNumero <= 0) {
        document.getElementById("resultadoAbajo").innerText = "Por favor, ingresa una edad válida.";
        return;
    }

    // 4. El Cálculo
    let diasVividos = edadNumero * 365;

    // 5. MOSTRAR RESULTADO AUTOMÁTICAMENTE ABAJO
    // Localizamos el elemento por su ID y le cambiamos el texto
    document.getElementById("resultadoAbajo").innerText = "Has vivido aproximadamente " + diasVividos + " días, felicidades 👍.";

    // También lo dejamos en la consola por si el profe lo revisa ahí
    console.log("Resultado calculado: " + diasVividos + " días.");
}