// SELECTOR DE TODAS LAS CAJAS
const cajas = document.querySelectorAll(".caja");

cajas.forEach(caja => {

    // CLICK -> ocultar
    caja.addEventListener("click", () => {

        if (caja.classList.contains("display")) {
            caja.classList.add("oculto-display");
        }

        if (caja.classList.contains("visibility")) {
            caja.classList.add("oculto-visibility");
        }

    });

    // DOBLE CLICK -> mostrar
    caja.addEventListener("dblclick", () => {
        caja.classList.remove("oculto-display");
        caja.classList.remove("oculto-visibility");
    });

});