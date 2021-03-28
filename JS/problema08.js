function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function Operacionñ(){

    var v = document.formulario.num1.value;
    var x = parseInt(v);
    var v2 = document.formulario.num2.value;
    var y = parseInt(v2);
    var v3 = document.formulario.num3.value;
    var z = parseInt(v3);
    
    if (x > y ){
        if(x>z){
            m = x ;
        }
    }
    if (y > x ){
        if(y>z){
            m = y;
        }
     }  
    if (z > x ){
        if(z>y){
            m = z;
        } 
    }
           
document.formulario.op1.value = m ;
    
}

function borrar(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.op1.value= "";
    document.formulario.num3.value = "";
    

}