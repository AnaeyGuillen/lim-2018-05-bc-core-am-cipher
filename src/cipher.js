window.cipher = {
  // ... Función que codifica
  encode: (offset, string) => {
    let mensajeCodificado = '';
    for (let index = 0; index < string.length; index++) {
      let codigoCaracter = string.toUpperCase().charCodeAt(index);
      if (codigoCaracter === 32){
        let space = " "; 
        mensajeCodificado = mensajeCodificado + space;
      } else {
        let nuevoCaracter = (codigoCaracter - 65 + offset)%26 + 65;
        let nuevoCaracterCodificado = String.fromCharCode(nuevoCaracter);
        mensajeCodificado = mensajeCodificado + nuevoCaracterCodificado;
      }      
    }
    return mensajeCodificado;
  },
 //... función que decodifica
  decode: (offset, string) => {
    let mensajeDecodificado='';
    for (let index=0; index<string.length; index++){
      let codigoCaracter = string.toUpperCase().charCodeAt(index);
      if (codigoCaracter === 32){
        let space = " ";
        mensajeCodificado= mensajeDecodificado + space
      } else{
        let nuevoCaracter = (codigoCaracter+65-offset)%26+65;
        let nuevoCaracterDecodificado = String.fromCharCode(nuevoCaracter);
        mensajeDecodificado = mensajeDecodificado + nuevoCaracterDecodificado;
      }

    }
    return mensajeDecodificado;
  }
}
