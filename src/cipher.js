window.cipher = {
  // ... Función encode
  encode: (offset, string){

    let mensajeCodificado = '';
    for (let index = 0; index < string.length; index++) {
      let codigoCaracter = string.charCodeAt(index);
      let nuevoCaracter = (codigoCaracter - 65 + offset)%26 + 65;
      let nuevoCaracterCodificado = String.fromCharCode(nuevoCaracter);
      mensajeCodificado = mensajeCodificado + nuevoCaracterCodificado;
    }
  return mensajeCodificado;
  },
  
  decode: (offset, string){
  
  
  }




};
