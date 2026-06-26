window.onload = function () {
    mostrarJugadores();
    mostrarJugadoresAtm();
    mostrarJugadoresVilla();
   todo();
}

function todo() {
    const toggle = document.querySelector('.dropdown-toggle');
    const menu = document.querySelector('.dropdown');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            menu.classList.toggle('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', todo);
document.addEventListener('DOMContentLoaded', todo);
function mostrarJugadores() {
    let contenedor = document.getElementById("jugadores");

    if (!contenedor) return;

    for (let i = 1; i < 20; i++) {
        const img = document.createElement("img");
        img.src = `fcb/imagen-${i}.png`;
        img.alt = "Jugador";
        contenedor.appendChild(img);
    }
}
function mostrarJugadoresAtm() {
    let contenedor = document.getElementById("jugadoresatm");

    if (!contenedor) return;

    for (let i = 1; i < 24; i++) {
        const img = document.createElement("img");
        img.src = `atm/imagen-${i}.jpg`;
        img.alt = "JugadorATM";
        contenedor.appendChild(img);
    }
}
    function mostrarJugadoresVilla() {
    let contenedor = document.getElementById("jugadoresvilla");

    if (!contenedor) return;

    for (let i = 1; i < 25; i++) {
        const img = document.createElement("img");
        img.src = `villa/imagen-${i}.jpeg`;
        img.alt = "JugadorVILLA";
        contenedor.appendChild(img);
    }
}