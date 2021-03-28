function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function Operacion(){
    
    var v1 = document.formulario.grupo.value;
    var grupo = parseInt(v1);
    var v2 = document.formulario.Hombre.value;
    var Hombres = parseInt(v2);
    
    var Promedio = (Hombres*100)/grupo;
    var Mujeres = 100- Promedio;

    document.formulario.miau.value ="%" + Promedio;
    document.formulario.muu.value ="%" + Mujeres;
    
}

function borrar(){
    document.formulario.muu.value = "";
    document.formulario.miau.value = "";
    document.formulario.grupo.value= "";
    document.formulario.Hombre.value= "";
    
}