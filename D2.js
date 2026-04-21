function escanearDato() {
    // 1. Seleccionamos el cuadro de texto y el lugar donde daremos la respuesta
    let inputUsuario = document.getElementById("datoUsuario");
    let dato = inputUsuario.value;
    let pantallaValor = document.getElementById("valorReal");
    let pantallaTipo = document.getElementById("tipoDato");

    // 2. REGLA DE SEGURIDAD: Validar que sea un número
    // isNaN significa "is Not a Number". Si es verdad, significa que hay letras o está vacío.
    if (dato === "" || isNaN(dato)) {
        
        // Mostramos el mensaje de error
        pantallaValor.innerText = "¡Dato Inválido!";
        pantallaTipo.innerText = "ERROR: DEBES INGRESAR UN NÚMERO";
        pantallaTipo.style.color = "red"; // Cambiamos el color a naranja para avisar

        // Limpiamos el input para que lo intente de nuevo
        inputUsuario.value = "";
        inputUsuario.focus(); // Pone el cursor de nuevo en el cuadro
        
        console.warn("Escaneo fallido: El usuario no ingresó un número.");
        return; // Detiene la función por completo
    }

    // 3. Si el código llega aquí, es porque SÍ es un número.
    // Usamos el Escáner de Rayos X (typeof)
    let inspeccion = typeof dato;

    // 4. Mostramos los resultados finales
    pantallaValor.innerText = dato;
    pantallaTipo.innerText = inspeccion.toUpperCase();
    pantallaTipo.style.color = "red"; // Volvemos al color original si estaba en rojo

    // 5. Bonus: Registro en consola como pide el desafío
    console.log("---------------------------------");
    console.log("ESCÁNEO EXITOSO");
    console.log("Valor detectado: " + dato);
    console.log("Tipo de dato real: " + inspeccion);
    console.log("---------------------------------");
}