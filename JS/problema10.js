function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function Operacionñ(){

    var v = document.formulario.men1.value;
    var mesp = parseInt(v);
    var v2 = document.formulario.dura.value;
    var año = parseInt(v2);
    
    if(1>año){
        h=mesp*0.05;
        m = mesp+h ;
    }
    if (1 >= año ){
        if(2>=año){
            h=mesp*0.07;
            m = mesp+h ;
        }
    }
    if (año > 2 ){
        if(5>=año){
            h=mesp*0.10;
            m = h+mesp;
        }
     }  
    if (año > 5 ){
        if(10>año){
            h=mesp*0.15;
            m = mesp+h;;
        } 
    }
    if(año>=10){
        h=mesp*0.20;
        m = mesp+h ;
    }
           
document.formulario.op1.value = m ;
    
}

function borrar(){
    document.formulario.men1.value = "";
    document.formulario.dura.value = "";
    document.formulario.op1.value= "";
    document.formulario.num3.value = "";
    

}