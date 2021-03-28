function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function Calificacion(){
    var cal1 = document.formulario.Calif1.value;
    var v1 = parseInt(cal1);
    var cal2 = document.formulario.Calif2.value;
    var v2 = parseInt(cal2);
    var cal3 = document.formulario.Calif3.value;
    var v3 = parseInt(cal3);
    var suma = (v1+v2+v3)/3;
    var total = suma*.55;

    document.formulario.cantidadi.value = total;
}

function Examen(){
    var valor = document.formulario.examen.value;
    var result = parseInt(valor);
    var interes = result*0.30;

    document.formulario.exa1.value = interes;
}

function Proyecto(){
    var valor = document.formulario.proyecto.value;
    var result = parseInt(valor);
    var interes = result*0.15;

    document.formulario.pro.value = interes;
}

function Total(){
    
    var proyectos = document.formulario.pro.value;
    var v1 = parseInt(proyectos);
    var examenes = document.formulario.exa1.value;
    var v2 = parseInt(examenes);
    var calificaciones = document.formulario.cantidadi.value;
    var v3 = parseInt(calificaciones);

    var Promedio = (v1+v2+v3);

    document.formulario.miau.value = Promedio;
    
}


function borrar(){
    document.formulario.pro.value = "";
    document.formulario.exa1.value = "";
    document.formulario.cantidadi.value= "";
    document.formulario.miau.value= "";
    document.formulario.Calif1.value = "";
    document.formulario.Calif2.value = "";
    document.formulario.Calif3.value = "";
    document.formulario.examen.value = "";
    document.formulario.proyecto.value = "";

}

