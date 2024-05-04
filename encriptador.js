const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textEncriptado = encriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
                    let MatrizCodigo = [["e","enter"],
                        ["i","imes"],["a","ai"],
                        ["o","ober"],["u","ufat"]];
                        stringEncriptado = stringEncriptado.toLowerCase()

        for(let i = 0; i < MatrizCodigo.length; i++ ){
            if(stringEncriptado.includes(MatrizCodigo[i][0])){
                stringEncriptado = stringEncriptado.replaceAll(MatrizCodigo[i][0], MatrizCodigo[i][1])
            }

        }   
        return stringEncriptado;       
}



function btnDesencriptar(){
    const textEncriptado = desencriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value = "";
    
}



function desencriptar(stringDesencriptado){
    let MatrizCodigo = [["e","enter"],
        ["i","imes"],["a","ai"],
        ["o","ober"],["u","ufat"]];
        stringDesencriptado = stringDesencriptado.toLowerCase()

for(let i = 0; i < MatrizCodigo.length; i++ ){
if(stringDesencriptado.includes(MatrizCodigo[i][1])){
    stringDesencriptado = stringDesencriptado.replaceAll(MatrizCodigo[i][1], MatrizCodigo[i][0])
}

}   
return stringDesencriptado;       
}

async function copiarContenido() {
    try {
        const mensaje = document.getElementById('mensaje');
        await navigator.clipboard.writeText(mensaje.value);
        // Cambiar el estilo del elemento copiado
        mensaje.style.backgroundColor = "yellow";
        setTimeout(() => {
          mensaje.style.backgroundColor = "";
        }, 1000);
    

    } catch (err) {
      console.error('Error al copiar: ', err);
      /* Rechazado - fallo al copiar el texto al portapapeles */
    }
  }
