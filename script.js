"use strict"


class Tarea{
    constructor(nomObj,prioObj,asigObj){
        this.nombre=nomObj;
        this.prioridad=prioObj;
        this.asignacion=asigObj;
    } 

    

}



function pintarDomCompletada(valorTexto,valorPriori,valorAsignacion){

    let nodoDivTituloComple=document.createElement("div");

    $($(nodoDivTituloComple)).addClass("tituloCompletada");

    let nodoTituloH4Comple=document.createElement("h4");

    nodoTituloH4Comple.innerHTML=valorTexto;

    nodoDivTituloComple.append(nodoTituloH4Comple);



    
    let nodoDivLogosComple=document.createElement("div");

    $($(nodoDivLogosComple)).addClass("logosCompletada");

    let nodoCuboComple=document.createElement("i");

    $($(nodoCuboComple)).addClass("far");

    $($(nodoCuboComple)).addClass("fa-trash-alt");

    let nodoTicComple=document.createElement("i");

    $($(nodoTicComple)).addClass("far");

    $($(nodoTicComple)).addClass("fa-check-circle");

    $($(nodoDivLogosComple)).append(nodoCuboComple);

    $($(nodoDivLogosComple)).append(nodoTicComple);





    let nodoH5ArribaComple=document.createElement("h5");

    nodoH5ArribaComple.innerHTML="Prioridad:";

    let nodoDivPrioridadComple=document.createElement("div");

    $($(nodoDivPrioridadComple)).addClass("prioridadCompletada");

    if( valorPriori == 1 ){

        $($(nodoDivPrioridadComple)).css( {

            "background-color":"red"


        } )

    }

    if( valorPriori == 2 ){

        $($(nodoDivPrioridadComple)).css( {

            "background-color":"orange"


        } )

    }

    if( valorPriori == 3 ){

        $($(nodoDivPrioridadComple)).css( {

            "background-color":"green"


        } )
    
    }

    

    let nodoH5AbajoComple=document.createElement("h5");

    nodoH5AbajoComple.innerHTML="Asignado a: "+valorAsignacion;
    
    let nodoDivAsigComple=document.createElement("div");

    $($(nodoDivAsigComple)).addClass("asignacionCompletada")

    $($(nodoDivAsigComple)).append(nodoH5AbajoComple);

    let nodoDivExtrasComple=document.createElement("div");

    $($(nodoDivExtrasComple)).addClass("extrasCompletada");

    $($(nodoDivExtrasComple)).append(nodoH5ArribaComple);

    $($(nodoDivExtrasComple)).append(nodoDivPrioridadComple);

    $($(nodoDivExtrasComple)).append(nodoDivAsigComple);






    let nodoDivTareaComple=document.createElement("div");

    $($(nodoDivTareaComple)).addClass("tareaCompletada");

    $($(nodoDivTareaComple)).append(nodoDivTituloComple);

    $($(nodoDivTareaComple)).append(nodoDivLogosComple);

    $($(nodoDivTareaComple)).append(nodoDivExtrasComple);


    $($("#contenedorCompletada")).append(nodoDivTareaComple);

    


    $($(".logosCompletada .fa-check-circle")).css( {

        "color":"green"

    } )

    $($(nodoTituloH4Comple)).css( {

        "text-decoration":"line-through"

    } )

    $(nodoTicComple).on( {

        click:function(){

            let textoCuatro=$(nodoTituloH4Comple).text();

            let valPrioridadComple=valorPriori;

            let textoAsigComple=valorAsignacion;

            pintarDomHacer(textoCuatro,valPrioridadComple,textoAsigComple);

            $(nodoDivTareaComple).remove();

           

            for( let n=0; n<tareas.tareasCompletadas.length;n++ ){

                if( tareas.tareasCompletadas[n].nombre === textoCuatro ){
    
    
                    tareas.tareasCompletadas.splice(n,1);
    
    
                }
    
    
    
            }

            let returnObjComple=new Tarea(textoCuatro,valPrioridadComple,textoAsigComple)
            

            tareas.tareasPorHacer.push(returnObjComple);

            

            let ticAStringComple=JSON.stringify(tareas);

            localStorage.setItem("lista tareas",ticAStringComple);




        }
    } )


    $(nodoCuboComple).on( {

        click:function(){

            let textoTres=$(nodoTituloH4Comple).text();

            $(nodoDivTareaComple).remove();

            for( let n=0; n<tareas.tareasCompletadas.length;n++ ){

                if( tareas.tareasCompletadas[n].nombre === textoTres ){
    
                    
    
                    tareas.tareasCompletadas.splice(n,1);
    
    
                }
    
    
    
            }

            

            let borradoAStringComple=JSON.stringify(tareas);

            localStorage.setItem("lista tareas",borradoAStringComple);


        }







    } )

}






function pintarDomHacer(valor,valorDos,valorTres){

    let nodoDivTitulo=document.createElement("div");

    $($(nodoDivTitulo)).addClass("titulo");

    let nodoTituloH4=document.createElement("h4");

    nodoTituloH4.innerHTML=valor;

    nodoDivTitulo.append(nodoTituloH4);




    let nodoDivLogos=document.createElement("div");

    $($(nodoDivLogos)).addClass("logos");

    let nodoCubo=document.createElement("i");

    $($(nodoCubo)).addClass("far");

    $($(nodoCubo)).addClass("fa-trash-alt");

    let nodoTic=document.createElement("i");

    $($(nodoTic)).addClass("far");

    $($(nodoTic)).addClass("fa-check-circle");

    $($(nodoDivLogos)).append(nodoCubo);

    $($(nodoDivLogos)).append(nodoTic);



    
    
    
    
    let nodoH5Arriba=document.createElement("h5");

    nodoH5Arriba.innerHTML="Prioridad:";

    let nodoDivPrioridad=document.createElement("div");

    $($(nodoDivPrioridad)).addClass("prioridad");

    if( valorDos == 1 ){

        $($(nodoDivPrioridad)).css( {

            "background-color":"red"


        } )

    }

    if( valorDos == 2 ){

        $($(nodoDivPrioridad)).css( {

            "background-color":"orange"


        } )

    }

    if( valorDos == 3 ){

        $($(nodoDivPrioridad)).css( {

            "background-color":"green"


        } )
    
    }

    

    let nodoH5Abajo=document.createElement("h5");

    nodoH5Abajo.innerHTML="Asignado a: "+valorTres;
    
    let nodoDivAsig=document.createElement("div");

    $($(nodoDivAsig)).addClass("asignacion")

    $($(nodoDivAsig)).append(nodoH5Abajo);

    let nodoDivExtras=document.createElement("div");

    $($(nodoDivExtras)).addClass("extras");

    $($(nodoDivExtras)).append(nodoH5Arriba);

    $($(nodoDivExtras)).append(nodoDivPrioridad);

    $($(nodoDivExtras)).append(nodoDivAsig);
    
    
    
    let nodoDivTarea=document.createElement("div");

    $($(nodoDivTarea)).addClass("tarea");

    $($(nodoDivTarea)).append(nodoDivTitulo);

    $($(nodoDivTarea)).append(nodoDivLogos);

    $($(nodoDivTarea)).append(nodoDivExtras);





    $($("#contenedorPorHacer")).append(nodoDivTarea);

   


    $($(".logos .fa-check-circle:hover")).css( {

        "color":"green"

    } )

    $($(nodoTituloH4)).css( {

        "text-decoration":"none"

    } )
    
    $(nodoTic).on( {

        click:function(){


        let texto=$(nodoTituloH4).text();

        let valPrioridad=valorDos;

        let textoAsig=valorTres;

        

        $(nodoDivTarea).remove();

        pintarDomCompletada(texto,valPrioridad,textoAsig);

       

        for( let n=0; n<tareas.tareasPorHacer.length;n++ ){

            if( tareas.tareasPorHacer[n].nombre === texto ){

                

                tareas.tareasPorHacer.splice(n,1);


            }



        }

        
        
        let returnObjHacer=new Tarea(texto,valPrioridad,textoAsig)

        tareas.tareasCompletadas.push(returnObjHacer);

        

        let compleAString=JSON.stringify(tareas);

        localStorage.setItem("lista tareas",compleAString);





        }


    } )
    
    $(nodoCubo).on( {

        click:function(){

            let textoDos=$(nodoTituloH4).text();

            $(nodoDivTarea).remove()

            for( let n=0; n<tareas.tareasPorHacer.length;n++ ){

                if( tareas.tareasPorHacer[n].nombre === textoDos ){
    
                    
    
                    tareas.tareasPorHacer.splice(n,1);
    
    
                }
    
    
    
            }
    

            

            let borradoAString=JSON.stringify(tareas);

            localStorage.setItem("lista tareas",borradoAString);

        }





    } )

  

}




var tareas={

    tareasPorHacer:[],

    tareasCompletadas:[]


};

var objeto={};


if( localStorage.getItem("lista tareas")){

    

}else{

    var pruebas=JSON.stringify(tareas);  

    localStorage.setItem("lista tareas",pruebas);

}  

      
   

var stringVueltaLocalStorage=localStorage.getItem("lista tareas");



var objetoVueltaLocalStorage=JSON.parse(stringVueltaLocalStorage);

tareas=objetoVueltaLocalStorage;

    

    for( let z=0; z<objetoVueltaLocalStorage.tareasPorHacer.length;z++ ){


        pintarDomHacer(objetoVueltaLocalStorage.tareasPorHacer[z].nombre,objetoVueltaLocalStorage.tareasPorHacer[z].prioridad,objetoVueltaLocalStorage.tareasPorHacer[z].asignacion);


    }

    for( let x=0; x<objetoVueltaLocalStorage.tareasCompletadas.length;x++ ){


        pintarDomCompletada(objetoVueltaLocalStorage.tareasCompletadas[x].nombre,objetoVueltaLocalStorage.tareasCompletadas[x].prioridad,objetoVueltaLocalStorage.tareasCompletadas[x].asignacion);

    }  



$($("#btnInput")).on( {

    click:function(){

        let nodoInput=$($("#textoIntroducido")).val();


        let nodoPrioridadInput=$($("#prioridadIntroducido")).val();


        let nodoAsigInput=$($("#asigIntroducido")).val();


        pintarDomHacer(nodoInput,nodoPrioridadInput,nodoAsigInput);

        let returnObj=new Tarea(nodoInput,nodoPrioridadInput,nodoAsigInput);

        tareas.tareasPorHacer.push(returnObj);


        let tareasAString=JSON.stringify(tareas);

        localStorage.setItem("lista tareas",tareasAString);
    }

} )


$($("#textoIntroducido")).on( {

        keyup:function(evento){

            let codigo=evento.keyCode;

            if( codigo==13 ){

                let nodoInput=$($("#textoIntroducido")).val();

        
                pintarDomHacer(nodoInput);
        
                tareas.tareasPorHacer.push(nodoInput);
        
        
                let tareasAString=JSON.stringify(tareas);
        
                 localStorage.setItem("lista tareas",tareasAString);




            }
        }
} )
