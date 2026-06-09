window.onload = function () {
    mostrarJugadores();
    mostrarJugadoresAtm();
   todo();
}


document.addEventListener('DOMContentLoaded', todo);
function mostrarJugadores() {
    let contenedor = document.getElementById("jugadores");

    if (!contenedor) return;

    for (let i = 1; i < 11; i++) {
        const img = document.createElement("img");
        img.src = `fcb/imagen-${i}.jpg`;
        img.alt = "Jugador";
        contenedor.appendChild(img);
    }
}
function mostrarJugadoresAtm() {
    let contenedor = document.getElementById("jugadoresatm");

    if (!contenedor) return;

    for (let i = 1; i < 2; i++) {
        const img = document.createElement("img");
        img.src = `atm/imagen-${i}.jpg`;
        img.alt = "JugadorATM";
        contenedor.appendChild(img);
    }
}