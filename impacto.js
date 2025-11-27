function animarContadores() {
    const numeros = document.querySelectorAll('.numero');

    numeros.forEach(num => {
        const valorFinal = parseInt(num.getAttribute('data-valor'));
        let valorActual = 0;
        const velocidad = 20;

        const incremento = Math.ceil(valorFinal / 100);

        const animacion = setInterval(() => {
            valorActual += incremento;

            if (valorActual >= valorFinal) {
                valorActual = valorFinal;
                clearInterval(animacion);
            }

            num.textContent = valorActual.toLocaleString() + "+";
        }, velocidad);
    });
}


function isVisible(elem) {
    const rect = elem.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

let impactoSection = document.querySelector('.impacto');
let activado = false;

window.addEventListener('scroll', () => {
    if (!activado && isVisible(impactoSection)) {
        animarContadores();
        activado = true;
    }
});
