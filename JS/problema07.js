function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function Operacions(){

    var v = document.formulario.num1.value;
    var x = parseInt(v);
    var v2 = document.formulario.num2.value;
    var y = parseInt(v2);
    
    if (x == y){
        m= x * y;
    }
    if (x > y){
        m= x - y;
     }  
    if (x < y){
        m= x + y;
    }
           
document.formulario.op1.value = m ;
    
}

function borrar(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.op1.value= "";
    

}

