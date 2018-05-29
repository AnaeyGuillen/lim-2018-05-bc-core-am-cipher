let inputencode =  document.getElementById("codificar");
inputencode.addEventListener("click",() => {
    let offset = document.getElementById("text").value;
    let ingMensaje = document.getElementById("cifrar").value;
    let encode = cipher.encode(offset, ingMensaje);
    document.getElementById("resultado").innerHTML = encode
});


let btnlimpiar = document.getElementById("Limpiar");
btnlimpiar.addEventListener("click",() => {
    document.getElementById("txtOffset").value = "";
    document.getElementById("ingrese Mensaje").value = "";
    document.getElementById("descifra Mensaje").value = ""
});

let decode = document.getElementById("decodificar");
decode.addEventListener("click",() => {

})