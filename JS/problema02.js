function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function borrar(){
    document.formulario.sueldo.value = "";
    document.formulario.sueldoti.value = "";
    document.formulario.sueldot.value = "";
}

function calculo(){
    var valor = document.formulario.sueldo.value;
    var result = parseInt(valor);
    var comision = result*0.30;
    var total = result+comision;

    document.formulario.sueldoti.value = "$"+comision;
    document.formulario.sueldot.value = "$"+total;

}


