var labelIngrese = document.querySelector("#ingtxt");

labelIngrese.addEventListener("click", function(){
    labelIngrese.style.visibility = "hidden";
    var txtIn = document.querySelector("#txtIni");
    txtIn.focus();
})