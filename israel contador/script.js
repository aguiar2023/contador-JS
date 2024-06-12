let contador = 0;

function contar() {
    contador++;
    if (contador > 15) {
        alert("Contagem finalizada!");
        contador = 0;
    }
    document.getElementById("contador").textContent = contador;
}