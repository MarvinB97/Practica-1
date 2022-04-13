/*const x=[];
var text="";

function guardar(){
    x.push(document.getElementById("texto").value);
}

function llamarA(){
    const w=x.sort();

    w.forEach(listar);

    document.getElementById("arrayh3").innerHTML=text;

    text="";
}

function llamarN(){
    const w=x.sort(function(a,b){return a-b});

    w.forEach(listar);

    document.getElementById("arrayh3").innerHTML=text;

    text="";
}


function listar(value){
    text+=value + '<br>';
}*/


/*----------------FECHA------------------------*/

const d=new Date();
//const d2=new Date();

//d2.setFullYear(2020,5,3);

//debugger;

const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const dias_semana =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

var dia_num = d.getDate();//fecha dia
var dia_sem = dias_semana[d.getDay()];//dia de la semana
var mes= meses[d.getMonth()];
var año =d.getFullYear();

document.getElementById('date').innerHTML=dia_sem+" "+dia_num+" de "+mes+" del "+año;



/*----------------AÑADIR ELEMENTOS A LISTAS-----------------*/

var lista1= document.getElementById('lista1');

const empresa = {
    name: "Coca-cola",
    custom: "Colombia",
    nit: 12323449887,
    tel: 3054365
}


function buscar(){

    var q=document.getElementById("text-buscar").value;
    var newelement1 = document.createElement('li');

    newelement1.textContent=empresa[q];

    lista1.appendChild(newelement1);

}



/*-------------------FOR IN-----------------------*/



var lista2= document.getElementById('lista2');

const compania = {
    name: "postobon",
    custom: "eeuu",
    nit: 1232355887,
    tel: 3035364
}


function info2(){

   for(let m in compania){

    var newelement2 = document.createElement('li');

    newelement2.textContent=compania[m];

    lista2.appendChild(newelement2);

   }

}



/*----------------FOR OF ------------------------*/


var lista3= document.getElementById('lista3');

const industria = ["Ecopetrol","España",1312868263,3067827];

//let industria="javascript";

function info3(){

    for(let m of industria){
        var elementli3= document.createElement('li');
        elementli3.textContent=m;

        lista3.appendChild(elementli3);

    }


}







/*--------------------METODOS MATH-----------------*/

//var t = Math.PI;

//document.querySelector('div p').innerHTML=Math.log10(t);





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





/*--------------FOR break y continue---------------*/

const cars=["audi","toyota","bmw","mitsushi","renol","ferrari","lamborgini"];
var txt="";

function forbreak(){
    for(let i=0;i<cars.length;i++){
        if(i==3){break;}

        var w=i+1;
        txt+=w+" "+cars[i]+"<br>";
    }
    
    document.getElementById('break').innerHTML=txt;

}


function forcontinue(){
    txt="";

    for(let i=0;i<cars.length;i++){
        if(i==3){continue;}

        var w=i+1;
        txt+=w+" "+cars[i]+"<br>";
    }
    
    document.getElementById('continue').innerHTML=txt;

}



/*------Regular Expresiones (buscan)-------------*/

var hhh= "Rusia es un pais del norte";

var aa= hhh.search(/Pais/i);
var bb= hhh.replace(/PaIs/i,"peleador");

function alertaT(){
    alert(bb);
}



/*------testear errores----------*/

function pruebaerror(){
    try{
        alerttt('mira, no tengo errores');
    }catch(err){

        alert("Error: "+ err +".");

    }
}


/*----------MODO STRIC---------- */

function modostric(){//usar en chrome f12 y ver console, de esta manera se puede revisar los errores
    'use strict';
    y=3.14;

}


/*-----Call y Bind 

const person={
    fullName: function(){return this.nam+" "+this.lastname;}
}

const mentor={
    nam="Marvin",
    lastname="Nuñez Zuñiga"
}

function metodos1(){

    let tN=person.fullName.apply('mentor');

    alert(tN);
    


    //document.getElementById('call1').innerHTML=(person.fullName.call(mentor)).toString();
    //document.getElementById('bind1').innerHTML=(person.fullName.bind(mentor)).toString();
}*/



/*----------REGULAR FUNCTIONS AND ARROW FUNCTIONS-----*/

// Regular Function:
/*
hello =function() {
    document.getElementById("call1").innerHTML+=this.toString();
}
*/
hello =()=>{
    document.getElementById("call1").innerHTML+=this;
}


function metodos1(){
    // The window object calls the function:
    //window.addEventListener("load", hello);
    // A button object calls the function:
    document.getElementById("btn").addEventListener("click", hello);
}