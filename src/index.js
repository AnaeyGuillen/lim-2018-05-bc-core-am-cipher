let btnencode =  document.getElementById("Codificar");
btnencode.addEventListener("click",() => {
    let offset = parseInt(document.getElementById("number").value);
    let ingMensaje = document.getElementById("cifrar").value;
    let encode = cipher.encode(offset, ingMensaje);
    document.getElementById("resultado").innerHTML = encode;
    
});

let btnlimpiar = document.getElementById("Limpiar");
btnlimpiar.addEventListener("click",() => {
    document.getElementById("number").value = "";
    document.getElementById("cifrar").value = "";
    document.getElementById("resultado").innerHTML = ""
});

let btndecode = document.getElementById("decodificar");
btndecode.addEventListener("click",() => {
    let offset = parseInt(document.getElementById("number").value);
    let ingMensaje = document.getElementById("cifrar").value;
    let decode = cipher.decode(offset,ingMensaje);
    document.getElementById("resultado").innerHTML=decode
})