let encode =  document.getElementById("codificar");
encode.addEventListener("click",() => {
    let offset = document.getElementById("txtOffset").value;
    let ingMensaje = document.getElementById("ingrese su Mensaje").value;
    let encode = cipher.encode(offset, ingMensaje);
    document.getElementById("descidra Mensaje").value = encode
});


let limpiar = document.getElementById("Limpiar");
limpiar.addEventListener("click",() => {
    document.getElementById("txtOffset").value = "";
    document.getElementById("ingrese Mensaje").value = "";
    document.getElementById("descifra Mensaje").value = ""
});

let decode = document.getElementById("decodificar");
decode.addEventListener("click",() = > {

})