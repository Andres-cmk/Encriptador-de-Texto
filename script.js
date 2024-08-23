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
        encriptar(input.value);
        return;
    }
    alert("Enetrada incorrecta");
    return;
    
});


function encriptar(texto){
    textEncriptado = "";
    for (i of texto){

    }
}

function desencriptar(textCriptado){
    
}