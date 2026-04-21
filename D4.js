// Definimos la tasa de cambio
const TASA = 62;

// Función para convertir de Dólares a Pesos
function convertirDolarAPeso() {
    // 1. Obtenemos el valor del input
    let cantidad = document.getElementById("monto").value;
    
    // 2. Validamos que no esté vacío
    if (cantidad === "") {
        alert("Por favor, introduce un número.");
        return;
    }

    // 3. Hacemos el cálculo
    let resultado = cantidad * TASA;

    // 4. Mostramos el resultado en el HTML
    document.getElementById("resultado").innerText = "Resultado: RD$ " + resultado.toLocaleString();
}

// Función para convertir de Pesos a Dólares
function convertirPesoADolar() {
    let cantidad = document.getElementById("monto").value;
    
    if (cantidad === "") {
        alert("Por favor, introduce un número.");
        return;
    }

    let resultado = cantidad / TASA;

    // Usamos .toFixed(2) para que solo salgan 2 decimales
    document.getElementById("resultado").innerText = "Resultado: $ " + resultado.toFixed(2);
}