function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
                         .replace(/e/gi, "erbs")
                         .replace(/i/gi, "ipr")
                         .replace(/a/gi, "ambr")
                         .replace(/o/gi, "oscr")
                         .replace(/u/gi, "upad")

if (texto.length !=0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.png";
} else {
    muñeco.src = "./img/muneco.png";
    tituloMensaje.textContent = "Ningún mensaje encontrado"
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar."
    swal("Ooops!", "Debes ingresar algo de texto", "warning");
}
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textoCifrado = texto
                         .replace(/erbs/gi, "e")
                         .replace(/ipr/gi, "i")
                         .replace(/ambr/gi, "a")
                         .replace(/oscr/gi, "o")
                         .replace(/upad/gi, "u")

if (texto.length !=0) {
    document.getElementById("texto").value  = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/desencriptar.png";
} else {
    muñeco.src = "./img/muneco.png";
    tituloMensaje.textContent = "Ningún mensaje encontrado"
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar."
    swal("Ooops!", "Debes ingresar algo de texto", "warning");
}
}