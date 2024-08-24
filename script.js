const input = document.getElementById("input");
const textArea = document.getElementById("texto_result");




document.getElementById("encriptar").addEventListener("click", (_) => {
    if(input.value === ""){
        alert("El texto es requerido");
        return;
    }

    if((!/\d/.test(input.value) && !/[A-Z]/.test(input.value) && !/[^\w\s]/.test(input.value))){
        document.querySelector("div.imagen").style.display = "none";
        document.querySelector("div.encriptado").style.display = "block";    
        textArea.value = encriptar(input.value);
        input.value = "";
        return;
    }
    alert("Entrada incorrecta");
    return;
});

document.getElementById("desencriptar").addEventListener("click", (_) => {
    document.querySelector("div.imagen").style.display = "none";
    document.querySelector("div.encriptado").style.display = "block"; 
    textArea.value = desencriptar(input.value);
    input.value = "";
    return;
});

document.getElementById("copiar").addEventListener("click", (_) => {
    textCopiado = "";
    if(textArea.value === ""){
        alert("No hay texto.");
        return;
    }
    
    textArea.select();
    document.execCommand("copy");
    alert("Texto copiado en el portapapeles.");

});


function encriptar(texto) {
    let textEncriptado = "";
    for (let i of texto) {
        if (i === "a") textEncriptado += "ai";
        else if (i === "e") textEncriptado += "enter";
        else if (i === "i") textEncriptado += "imes";
        else if (i === "o") textEncriptado += "ober";
        else if (i === "u") textEncriptado += "ufat";
        else textEncriptado += i;
    }
    return textEncriptado;
}

function desencriptar(textEncriptado){

    let text = textEncriptado;
    
    if(text.includes("ai"))text = text.replace(/ai/g,"a");
    if(text.includes("enter"))text = text.replace(/enter/g,"e");
    if(text.includes("imes"))text = text.replace(/imes/g,"i");
    if(text.includes("ober"))text = text.replace(/ober/g,"o");
    if(text.includes("ufat"))text = text.replace(/ufat/g,"u");

    return text;
    
}