const areaTexto = document.getElementById("areaTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const derecha = document.getElementById("derecha");
const muñeco = document.getElementById("muñeco");
const mensaje = document.getElementById("mensaje");
const derechaMensajeInformativo = document.getElementById("derechaMensajeInformativo");
const botonCopiar = document.getElementById("botonCopiar");


let reemplazar = [
    ["e","enter"],
    ["o", "ober"],
    ["i" , "imes"],
    ["a" , "ai" ],
    ["u" , "ufat"]
];

const intercambiar = (valor) => {
    mensaje.innerHTML= valor
    areaTexto.value = "";
    derecha.classList.add("justificar");
    muñeco.classList.add("ocultar");
    mensaje.classList.add("justificar");
    derechaMensajeInformativo.style.display = "none";
    botonCopiar.style.display = "block";
};

const restablecer = () => {
    mensaje.innerHTML = "";
    areaTexto.focus();
    derecha.classList.remove("justificar");
    muñeco.classList.remove("ocultar")
    mensaje.classList.remove("justificar");
    derechaMensajeInformativo.style.display = "block";
    botonCopiar.style.display = "none";
}

botonEncriptar.addEventListener("click", () =>{
    const texto = areaTexto.value.toLowerCase();
    if (texto!= ""){
    function encriptar(textoNuevo){
        for(let i = 0; i < reemplazar.length; i++){
            if (textoNuevo.includes(reemplazar[i][0])){
                textoNuevo = textoNuevo.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return textoNuevo;
    };
}else{
    alert("Ingrese un texto para encriptar");
    restablecer();
}
    intercambiar(encriptar(texto));

});


botonDesencriptar.addEventListener("click", () =>{
    const texto = areaTexto.value.toLowerCase();
    if (texto!= ""){
    function desencriptar(textoNuevo){
        for (let i = 0; i < reemplazar.length; i++){
            if(textoNuevo.includes(reemplazar[i][1])){
                textoNuevo = textoNuevo.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            };
        };
        return textoNuevo;
    };
}else{
    alert("Se necesita ingresar un texto para desencriptar!");
    restablecer();
}
    intercambiar(desencriptar(texto));
});

botonCopiar.addEventListener("click", () =>{
    let texto = mensaje.innerHTML;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Copiaste el texto al portapapeles!");
        restablecer();
    }).catch(err => {
        console.error('Hubo un error al copiar el texto: ', err);
    });
});
