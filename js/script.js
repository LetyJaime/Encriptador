const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const right__muneco = document.getElementById("rightMuneco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    ingresoTexto.value = "";
    right__muneco.classList.add("oculto");
    rightInfo.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

// BOTON ENCRIPTAR:
botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
        if (texto != "") {
            function encriptar(newText) {
                for (let i = 0; i < remplazar.length; i++){
                    if (newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1])
                }
            };
            return newText;
        }
    }
    remplace(encriptar(texto));
});

// BOTON DESENCRIPTAR:
botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    function desencriptar(newText) {
        for (let i = 0; i < remplazar.length; i++)
        if (newText.includes(remplazar[i][1])) {
        newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
        }
        return newText
    }
    remplace(desencriptar(texto));
})

// BOTON COPIAR:
    botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy");
    alert("Texto Copiado");
})
