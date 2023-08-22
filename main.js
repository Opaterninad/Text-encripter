function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
                         .replace(/e/gi, "enter")
                         .replace(/i/gi, "imes")
                         .replace(/a/gi, "ai")
                         .replace(/o/gi, "ober")
                         .replace(/u/gi, "ufat")

if (texto.length !=0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.png";
} else {
    muñeco.src = "./img/muneco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado"
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
    alert("Debes ingresar algo de texto");
}
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textoCifrado = texto
                         .replace(/enter/gi, "i")
                         .replace(/imes/gi, "i")
                         .replace(/ai/gi, "a")
                         .replace(/ober/gi, "o")
                         .replace(/ufat/gi, "u")

if (texto.length !=0) {
    document.getElementById("texto").value  = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/desencriptar.png";
} else {
    muñeco.src = "./img/muneco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado"
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
    alert("Debes ingresar algo de texto");
}
}