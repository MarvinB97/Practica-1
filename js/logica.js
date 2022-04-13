/*----------------FECHA------------------------*/

const d=new Date();


const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const dias_semana =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

var dia_num = d.getDate();//fecha dia
var dia_sem = dias_semana[d.getDay()];//dia de la semana
var mes= meses[d.getMonth()];
var año =d.getFullYear();

document.getElementById('date').innerHTML=dia_sem+" "+dia_num+" de "+mes+" del "+año;








/*---------------CALCULADORA------------------*/

var p="";
var ope;
var n1=0;
var n2=0;



function agregar(value){
    p+=value;
    document.getElementById('entrada').innerHTML=p;
}


function constantes(value0){
    if(value0 == 'Pi'){
        p=Math.PI.toString();
        document.getElementById('entrada').innerHTML="Pi";

    }else{
        p=Math.E.toString();
        document.getElementById('entrada').innerHTML="E";

    }

}

function borrar(){
    p=p.slice(0,p.length-1);
    document.getElementById('entrada').innerHTML=p;
}



function operar(value2){

    if(ope==null){
        n1=Number(p);

        switch(value2){
          case '+': ope='+'; p=""; break;//n1+=n2; p=""; break;
          case '-': ope='-'; p=""; break; //n1-=n2; p=""; break;
          case '*': ope='*'; p=""; break; //n1*=n2; p=""; break;
          case '/': ope='/'; p=""; break; //n1/=n2; p=""; break;
          case '^': ope='^'; p=""; break; //n1^=n2; p=""; break;
          default: p="undefined"
        }
    }else{

        n2=Number(p);

        switch(ope){
            case '+': n1+=n2; p=""; document.getElementById('salida').innerHTML=n1; break;
            case '-': n1-=n2; p=""; document.getElementById('salida').innerHTML=n1; break;
            case '*': n1*=n2; p=""; document.getElementById('salida').innerHTML=n1; break;
            case '/': n1/=n2; p=""; document.getElementById('salida').innerHTML=n1; break;
            case '^': n1**=n2; p=""; document.getElementById('salida').innerHTML=n1; break;
            default: p="undefined"
          }
        
        switch(value2){
            case '+': ope='+'; p=""; break;//n1+=n2; p=""; break;
            case '-': ope='-'; p=""; break; //n1-=n2; p=""; break;
            case '*': ope='*'; p=""; break; //n1*=n2; p=""; break;
            case '/': ope='/'; p=""; break; //n1/=n2; p=""; break;
            case '^': ope='^'; p=""; break; //n1^=n2; p=""; break;
            default: p="undefined"
        }


    }

}


function igualdad(){

     document.getElementById('entrada').innerHTML='Operación';

     if(n1!=0){
         n2=Number(p);
    
         switch(ope){
             case '+': n1+=n2; p=""; document.getElementById('salida').innerHTML=n1; break;
             case '-': n1-=n2; p=""; document.getElementById('salida').innerHTML=n1; break;
             case '*': n1*=n2; p=""; document.getElementById('salida').innerHTML=n1; break;
             case '/': n1/=n2; p=""; document.getElementById('salida').innerHTML=n1; break;
             case '^': n1**=n2; p=""; document.getElementById('salida').innerHTML=n1; break;
             default: p="undefined"
           }
         

     }else{
        document.getElementById('salida').innerHTML=p;
        p="";
     }

     ope=null;
     n1=0;
     n2=0;


}
