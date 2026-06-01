window.onload= function() {
mostrarJugadores();
}
function mostrarJugadores() {

    const contenedor = document.getElementById("jugadores");

    for (let i = 1; i < 11; i++) {
        const img = document.createElement("img");
        img.src = "fcb/imagen-"+i + ".jpg";
        img.alt = "Jugador";
        contenedor.appendChild(img);
    }
}