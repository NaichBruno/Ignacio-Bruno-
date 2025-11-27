function calcularImpacto() {
    const precioViandas = 1500;
    const precioRopa = 2500;
    const precioKits = 1200;

    const input = document.getElementById("monto");
    const monto = parseFloat(input.value);
    const resultadoBox = document.getElementById("resultado");
    const menorEl = document.getElementById("menor");


    if (isNaN(monto) || monto <= 0) {
        alert("Ingresá un monto válido mayor que 0.");
        resultadoBox.style.display = "none";
        return;
    }


    const precioMin = Math.min(precioViandas, precioRopa, precioKits);
    if (monto < precioMin) {
        menorEl.textContent = `¡Gracias por tu donación! El monto se sumará al fondo general`;
        resultadoBox.style.display = "block";
        return;
    }

    const porcentajes = { viandas: 0.60, ropa: 0.25, kits: 0.15 };

    let asignadoViandas = Math.floor((monto * porcentajes.viandas) / precioViandas);
    let asignadoRopa = Math.floor((monto * porcentajes.ropa) / precioRopa);
    let asignadoKits = Math.floor((monto * porcentajes.kits) / precioKits);


    let usado = (asignadoViandas * precioViandas) + (asignadoRopa * precioRopa) + (asignadoKits * precioKits);
    let remanente = monto - usado;


    if (remanente >= precioViandas) {
        const extra = Math.floor(remanente / precioViandas);
        asignadoViandas += extra;
        remanente -= extra * precioViandas;
    }
    if (remanente >= precioKits) {
        const extra = Math.floor(remanente / precioKits);
        asignadoKits += extra;
        remanente -= extra * precioKits;
    }
    if (remanente >= precioRopa) {
        const extra = Math.floor(remanente / precioRopa);
        asignadoRopa += extra;
        remanente -= extra * precioRopa;
    }


    document.getElementById("titulo").textContent = `Con tu donación estimamos:`;
    document.getElementById("viandas").textContent = `🍲 Viandas: ${asignadoViandas}`;
    document.getElementById("ropa").textContent = `🧥 Prendas de abrigo: ${asignadoRopa}`;
    document.getElementById("kits").textContent = `🧴 Kits de higiene: ${asignadoKits}`;

    if (remanente > 0) {
        menorEl.textContent = `Quedarán $${remanente.toFixed(0)} sin asignar; se sumarán al fondo general.`;
    } else {
        menorEl.textContent = "";
    }

    resultadoBox.style.display = "block";
}

        