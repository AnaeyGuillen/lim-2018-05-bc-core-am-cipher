window.cipher = {
  // ... Función encode
  encode: (offset, string) => {

    let mensajeCodificado = '';
    for (let index = 0; index < string.length; index++) {
      let codigoCaracter = string.toUpperCase().charCodeAt(index);
      let nuevoCaracter = (codigoCaracter - 65 + offset)%26 + 65;
      let nuevoCaracterCodificado = String.fromCharCode(nuevoCaracter);
      mensajeCodificado = mensajeCodificado + nuevoCaracterCodificado;
    }
  return mensajeCodificado;
  },
  
 //... función decode
  decode: (offset, string) => {
    let mensajeDecodificado='';
    for (let index=0; index<string.length; index++){
      let codigoCaracter=string.toUpperCase().charCodeAt(index);
      let nuevoCaracter= (codigoCaracter+65-offset)%26+65;
      let nuevoCaracterDecodificado = String.fromCharCode(nuevoCaracter);
      mensajeDecodificado = mensajeDecodificado + nuevoCaracterDecodificado
    }
  return mensajeDecodificado;

  }

};
