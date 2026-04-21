// Lista de frases patrióticas
const frases = [
    "La patria es primero.",
    "Vivir por la patria es vivir para siempre.",
    "El respeto al derecho ajeno es la paz.",
    "Libertad, orden y progreso.",
    "Servir a la nación es el honor más grande."
];

function GenerarFrase() {
    // 1. Obtenemos un índice aleatorio basado en el tamaño del array
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    
    // 2. Seleccionamos la frase
    const fraseSeleccionada = frases[indiceAleatorio];
    
    // 3. La insertamos en el elemento HTML con el id "FraseGenerada"
    document.getElementById("FraseGenerada").innerText = fraseSeleccionada;
}