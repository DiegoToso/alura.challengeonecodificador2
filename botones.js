var btnEncrip = document.querySelector("#btnEncriptar");
var btnCopi = document.querySelector("#btnCopiar");
var btnDesencrip = document.querySelector("#btnDesencriptar");
var txtIn = document.querySelector("#txtIni");
var txtFin = document.querySelector("#txtFin");
var labelIngrese = document.querySelector("#ingtxt");

txtIn.addEventListener("focus", function(){
    labelIngrese.style.visibility = "hidden";
});

btnEncrip.addEventListener("click", function(){
    var texto = txtIn.value;
    var nomsj = document.querySelector("#ceromsj");
    var ingmsj = document.querySelector("#ingresarmsj");
    var chico = document.querySelector(".imgChico");
    var copiar = document.querySelector(".copiar")
    var ingtxt = document.querySelector("#ingtxt")
    if (texto.length>0){
        chico.style.visibility = "hidden";
        nomsj.style.visibility = "hidden";
        ingmsj.style.visibility = "hidden";
        copiar.style.visibility = "visible";
        texto = txtIn.value;
        var encriptado = fEncriptar(texto);
        txtFin.value = encriptado;
    }else{
        nomsj.style.visibility = "visible";
        ingmsj.style.visibility = "visible";
        ingtxt.style.visibility = "visible";
    }
});

function fEncriptar(texto){
    var encriptado ="";
    for(i=0; i<texto.length; i++){
        switch(texto[i]){
            case 'a':
                encriptado+="ai";
                break;
            case 'e':
                encriptado+="enter";
                break;
            case 'i':
                encriptado+="imes";
                break;
            case 'o':
                encriptado+="ober";
                break;
            case 'u':
                encriptado+="ufat";
                break;
            default:
                encriptado+=texto[i];
                break;

        }
    }
    return (encriptado);
};

btnCopi.addEventListener("click", function(){
    txtIn.value = txtFin.value;
    var portapapeles = document.getElementById('txtFin');
    portapapeles.select();
    document.execCommand('copy');
    txtIn.focus();
});

btnDesencrip.addEventListener("click", function(){
    var texto = txtIn.value;
    var desencriptado = fDesencriptar(texto);
    txtFin.value = desencriptado;

})

function fDesencriptar(texto){
    var desencriptado = "";
    for(i=0; i<texto.length; i++){
        switch(texto[i]){
            case 'a':
               if(texto.substr(i,2)=='ai'){
                    desencriptado+="a";
                    i=i++;
               }
                break;
            case 'e':
                if(texto.substr(i,5)=='enter'){
                    desencriptado+="e";
                    i=i+4;
                   }
                break;
            case 'i':
                if(texto.substr(i,4)=='imes'){
                    desencriptado+="i";
                    i=i+3;
                   }
                break;
            case 'o':
                if(texto.substr(i,4)=='ober'){
                    desencriptado+="o";
                    i=i+3;
                   }
                break;
            case 'u':
                if(texto.substr(i,4)=='ufat'){
                    desencriptado+="u";
                    i=i+3;
                   }
                break;
            default:
                desencriptado+=texto[i];
                break;

        }
    }
    return(desencriptado);
}