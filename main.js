import "./style.css";
import { leyendas } from "./datos.js";
const selector_leyendas = document.getElementById("seleccionar_leyendas");
const tarjeta = document.getElementById("tarjeta_leyenda");
const image = document.getElementById("imagen")
const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("descripcion");

selector_leyendas.addEventListener("change", () => {
    const idSeleccionado = selector_leyendas.value;
    const leyenda = leyendas.find(
        personaje => personaje.id == idSeleccionado
    );
    if (leyenda) {

        nombre.textContent = leyenda.nombre;
        descripcion.textContent = leyenda.descripcion;

        image.src = leyenda.imagen;
        image.alt = leyenda.nombre;

        tarjeta.style.borderColor = leyenda.color;

        tarjeta.style.boxShadow =
            `0 0 25px ${leyenda.color},
            0 0 50px ${leyenda.color}`;

        nombre.style.color = leyenda.color;

    }
});

