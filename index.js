function fcb() {
    const plantilla = document.querySelector("#plantillaJugador");
const contenedor = document.querySelector(".contenedor");

fetch("b.json")
.then(r => r.json())
.then(datos => {

    datos.forEach(jugador => {

        const copia = plantilla.content.cloneNode(true);

        copia.querySelector("img").src = jugador.imagen;
        copia.querySelector("img").alt = jugador.nombre;

        copia.querySelector("h2").textContent = jugador.nombre;
        copia.querySelector(".dorsal").textContent = "👕 " + jugador.dorsal;
        copia.querySelector(".posicion").textContent = jugador.posicion;

        contenedor.appendChild(copia);

    });

});
}
    
