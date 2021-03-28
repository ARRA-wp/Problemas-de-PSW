function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function Fecha(){
    var v = document.formulario.año.value;
    var r = parseInt(v);
    var interes = 2021-r;
    var pp = interes*360;
    var tt = interes*8760;
    
    document.formulario.edad1.value =interes+" Años";
    document.formulario.CCC.value =pp+" Dias";
    document.formulario.rtr.value =tt+" Horas";
}

function Dias(){
    var v = document.formulario.dias.value;
    var r = parseInt(v);
    var m = r/365;
    var t = m/8760;

    document.formulario.edad2.value = m+" Años";
    document.formulario.TTT.value =t+" Horas";
}

function Horas(){
    var v = document.formulario.horas.value;
    var r = parseInt(v);
    var m = r/8760;

    document.formulario.edad3.value = m+" Años";

}

function borrar(){
    document.formulario.edad1.value = "";
    document.formulario.edad2.value = "";
    document.formulario.edad3.value= "";
    document.formulario.año.value= "";
    document.formulario.dias.value= "";
    document.formulario.horas.value= "";
    document.formulario.TTT.value = "";
    document.formulario.CCC.value =" ";
    document.formulario.rtr.value =" ";

}

