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
    
    
    if (40==y ){
        
            m = x*40 ;
        
    }
    if (y>40 ){
        if(48>y){
            

                  p = x*40;
                  h=y-40;
                  m = (x*h*2)+p;

            
        }
     }  
    if (y > 40 ){
        if(y>48){
            
                p = x*40;
                k=8*x*2;
                h= y-48;
                j=x*h*3;
             m =p+k+j;
            
        } 
    }
    if (40>y ){
    
            m = x*y;
             
     }
     if (48==y ){
        
        p = x*40 ;
        m= (x*8*2)+p;
    
} 
           
document.formulario.op1.value = m+"$" ;
    
}

function borrar(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.op1.value= "";
    document.formulario.num3.value = "";
    

}