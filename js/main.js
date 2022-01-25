//VARIABLES
let entrada
let trueofalse = true

function comercio() {
    while(trueofalse){
        let  opciones = prompt("Bienvenido a GeekInformatica, que estaba buscando? Tenemos lo siguiente \n1. Perifericos \n2. Netbooks \n3. Combos de pc \n4. Placas de video \n5. Memorias ram \n6. Consolas \n7. Quiero armar mi pc").toUpperCase();
        switch(opciones){
            case "PERIFERICOS":
                entrada = "PERIFERICOS"
                alert("Muy bien te pasare mostrar la lista de perifericos disponibles")
                tipoPeriferico()
               
            break;

            case "NETBOOKS": 
                entrada = "NETBOOKS"
                alert("Muy bien te pasare mostrar la lista de netbooks disponibles")
                netbooks10()
               
            break;

            case "COMBOS DE PC":
                entrada = "COMBOS DE PC"
                alert("Muy bien te pasare mostrar la lista de combos de pc disponibles")
                combospc()
            break;

            case "PLACAS DE VIDEO":
                entrada = "PLACAS DE VIDEO"
                alert("Muy bien te pasare mostrar la lista de placas de video disponibles")
                placasVideos()
            break;

            case "MEMORIAS RAM":
                entrada = "MEMORIAS RAM"
                alert("Muy bien te pasare mostrar la lista de memorias ram disponibles")
                memoriasram2()
               
            break;
            
            case "CONSOLAS":
                entrada = "CONSOLAS"
                alert("Muy bien te pasare mostrar la lista de consolas disponibles")
                consolas10()
            break;

            case "QUIERO ARMAR MI PC":
                entrada = "QUIERO ARMAR MI PC"
                quieroArmarMipcinicio()
            break;
            default: alert("Elegi una opcion valida");
            break;
        }
        if(entrada == opciones){
            trueofalse = false;
        }
    }
    
}
// Perifericos
function tipoPeriferico(){
    while(trueofalse){
        let listaPerifericos = prompt("Que periferico buscabas? \n1. Mouse \n2. Teclados \n3. Auriculares").toUpperCase();
        switch(listaPerifericos){
            case "MOUSE":
                entrada = "MOUSE"
                mousePeriferico()
                break;
            case "TECLADOS":
                entrada = "TECLADOS"
                tecladoPeriferico()
                break;
            case "AURICULARES":
                entrada = "AURICULARES"
                auricularesPeriferico()
                break;
                default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == listaPerifericos){
            trueofalse = false;
        }
    }

}
function mousePeriferico(){
    while(trueofalse){
        let perifecomouse = prompt(`Tenemos los siguientes mouse \n1.${mouse[0].nombre} $${mouse[0].precio} y tenemos un stock de ${mouse[0].cantidad} \n2. ${mouse[1].nombre} $${mouse[1].precio} y tenemos un stock de ${mouse[1].cantidad} \n3.  ${mouse[2].nombre} $${mouse[2].precio} y tenemos un stock de ${mouse[2].cantidad}   \n4. Seguir comprando \n5. Terminar compra   \nIndique su respuesta con el numero que corresponde para cada mouse`).toUpperCase();
        switch(perifecomouse){
            case "1":  
                mouse[0].stock()
                // valor = mouses.precioTOTAL 
                break;
            case "2":
                mouse[1].stock()
                // valor = mouses2.precioTOTAL
                break;
            case "3":
                mouse[2].stock()
                // valor = mouses3.precioTOTAL
                break;
            case "4":
                entrada = "4"
                alert("Volveras al menu otra vez!")
                comercio()
                break;
            case "5":
                entrada = "5"
                alert("Terminemos con la compra")
                cuotasEfectivonormal()
                break;
                default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == perifecomouse){
            trueofalse = false;
        }
    }

}
function tecladoPeriferico(){
    while(trueofalse){
        let perifecteclado = prompt(`Tenemos los siguientes teclados \n1. ${teclados[0].nombre} $${teclados[0].precio} stock ${teclados[0].cantidad} \n2. ${teclados[1].nombre} $${teclados[1].precio} stock ${teclados[1].cantidad}\n3. ${teclados[2].nombre} $${teclados[2].precio} stock ${teclados[2].cantidad}\n4. Seguir comprando \n5. Terminar compra \nIndique su respuesta con el numero que corresponde para cada teclado`).toUpperCase();
        switch(perifecteclado){
            case "1":
                teclados[0].stock() 
                break;
            case "2":
                teclados[1].stock() 
                break;
            case "3":
                teclados[2].stock() 
                break;
            case "4":
                entrada = "4"
                alert("Volveras al menu otra vez!")
                comercio()
                break;
            case "5":
                entrada = "5"
                alert("Terminemos con la compra")
                cuotasEfectivonormal()
                break;
            default: alert("Elegi una opcion valida");
            break;
        }
        if(entrada == perifecteclado){
            trueofalse = false;
        }
    }
}
function auricularesPeriferico(){
    while(trueofalse){
        let perifecoauricular = prompt(`Tenemos los siguientes auriculares \n1. ${auriculares[0].nombre} $${auriculares[0].precio} ${auriculares[0].cantidad} \n2. ${auriculares[1].nombre} $${auriculares[1].precio} ${auriculares[1].cantidad}\n3. ${auriculares[2].nombre} $${auriculares[2].precio} ${auriculares[2].cantidad} \n4. Seguir comprando \n5. Terminar compra \nIndique su respuesta con el numero que corresponde para cada auricular`).toUpperCase();
        switch(perifecoauricular){
            case "1":
                auriculares[0].stock()
                // valor = auriculares.precioTOTAL 
                break;
            case "2":
                auriculares[1].stock()
                // valor = auriculares2.precioTOTAL 
                break;
            case "3":
                auriculares[2].stock()
                // valor = auriculares3.precioTOTAL 
                break;
            case "4":
                entrada = "4"
                alert("Volveras al menu otra vez!")
                comercio()
                break;
            case "5":
                entrada = "5"
                alert("Terminemos con la compra")
                cuotasEfectivonormal()
                break;
                default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == perifecoauricular){
            trueofalse = false;
        }
    }
 
}
// Netbooks 
function netbooks10(){
    while(trueofalse){
        let netbooks10 = prompt(`Tenemos las siguientes netbooks \n1. Netbook HP i510210U, Ram: 8Gb y SSD de 256GB $${netbooks[0].precio} tiene un stock ${netbooks[0].cantidad} \n2. Netbook Lenovo i7 10510U Ram: 8Gb y SSD 512GB $${netbooks[1].precio} tiene un stock ${netbooks[1].cantidad} \n3. Netbook Asus  i7 1065G7 Ram: 8Gb SSD: 512GB HDD: 1TB $${netbooks[2].precio} stock ${netbooks[2].cantidad} \n4. Seguir comprando \n5. Terminar compra \nIndique su respuesta con el numero que corresponde para cada netbook`).toUpperCase();
        switch(netbooks10){
            case "1":
                netbooks[0].stock()
                // valor = netbooks.precioTOTAL 

                break;
            case "2":
                netbooks[1].stock()
                // valor = netbooks2.precioTOTAL 

                break;
            case "3":
                netbooks[2].stock()
                // valor = netbooks3.precioTOTAL 
                break;
            case "4":
                entrada = "4"
                alert("Volveras al menu otra vez!")
                comercio()
                break;
            case "5":
                entrada = "5"
                alert("Terminemos con la compra")
                cuotasEfectivonormal()
                break;
                default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == netbooks){
            trueofalse = false;
        }
    }
}
// Combos PC
function combospc(){
    while(trueofalse){
        let combospc = prompt(`Tenemos las siguientes combos \n1. ${combopc[0].nombre} $${combopc[0].precio} y tiene un stock ${combopc[0].cantidad} \n2. ${combopc[1].nombre} $${combopc[1].precio} y tiene un stock ${combopc[1].cantidad}\n3.  ${combopc[2].nombre} $${combopc[2].precio} y tiene un stock ${combopc[2].cantidad} \n4. Seguir comprando \n5. Terminar compra \nIndique su respuesta con el numero que corresponde para cada combo`).toUpperCase();
        switch(combospc){
            case "1":
                combopc[0].stock()
                // valor = combosPc.precioTOTAL 
                break;
            case "2":
                combopc[1].stock()
                // valor = combosPc2.precioTOTAL 
                break;
            case "3":
                combopc[2].stock()
                // valor = combosPc3.precioTOTAL 
                break;
            case "4":
                entrada = "4"
                alert("Volveras al menu otra vez!")
                comercio()
                break;
            case "5":
                entrada = "5"
                alert("Terminemos con la compra")
                cuotasEfectivonormal()
                break;
                default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == combosPc){
            trueofalse = false;
        }
    }
}
// Placas video
function placasVideos(){
    while(trueofalse){
        let placasVideos = prompt(`Tenemos las siguientes placas de video \n1. GTX 1050TI MSI $${graficas[0].precio} y tiene un stock ${graficas[0].cantidad} \n2. MSI VENTUS RTX 2060 SUPER $${graficas[1].precio} y tiene un stock ${graficas[1].cantidad} \n3. MSI VENTUS RTX 3090 $${graficas[2].precio} y tiene un stock ${graficas[2].cantidad}\n4. Seguir comprando \n5. Terminar compra \nIndique su respuesta con el numero que corresponde para cada placa`).toUpperCase();
        switch(placasVideos){
            case "1":
                graficas[0].stock()
                // valor = graficas.precioTOTAL 
                break;
            case "2":
                graficas[1].stock()
                // valor = graficas2.precioTOTAL 
                break;
            case "3":
                graficas[2].stock()
                // valor = graficas3.precioTOTAL 
                break;
            case "4":
                entrada = "4"
                alert("Volveras al menu otra vez!")
                comercio()
                break;
            case "5":
                entrada = "5"
                alert("Terminemos con la compra")
                cuotasEfectivonormal()
                break;
            default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == placasVideos){
            trueofalse = false;
        }
    }
}
function memoriasram2(){
    while(trueofalse){
        let memoriasRampromp = prompt(`Tenemos las siguientes memorias Ram \n1. Memoria RAM Fury DDR4 8GB 2666mhz $${memoriasRAM[0].precio} y stock de ${memoriasRAM[0].cantidad} \n2.  Memoria RAM Fury DDR4 16GB 2133mhz $${memoriasRAM[1].precio} y stock de ${memoriasRAM[1].cantidad} \n3. x2 Memoria RAM Fury DDR4 8GB 2133mhz $${memoriasRAM[2].precio} y stock de ${memoriasRAM[2].cantidad} \n4. Seguir comprando \n5. Terminar compra  \nPor favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(memoriasRampromp){
            case "1":
                memoriasRAM[0].stock()
                // valor = memoriasRam.precioTOTAL 
                break;
            case "2":
                memoriasRAM[1].stock()
                // valor = memoriasRam2.precioTOTAL 
                break;
            case "3":
                memoriasRAM[2].stock()
                // valor = memoriasRam3.precioTOTAL 
                break;
            case "4":
                entrada = "4"
                alert("Volveras al menu otra vez!")
                comercio()
                break;
            case "5":
                entrada = "5"
                alert("Terminemos con la compra")
                cuotasEfectivonormal()
                break;
                default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == memoriasRampromp){
            trueofalse = false;
        }
    }
}
function consolas10(){
    while(trueofalse){
        let consolas10 = prompt(`Tenemos las siguientes consolas \n1. Xbox Series X 1TB $${consolas[0].precio}  y en stock ${consolas[0].cantidad} \n2. Xbox Series S 512GB $${consolas[1].precio}  y en stock ${consolas[1].cantidad}  \n3. Sony PlayStation 5 825GB $${consolas[2].precio}  y en stock ${consolas[2].cantidad} \n4. Seguir comprando \n5. Terminar compra  \nIndique su respuesta con el numero que corresponde para cada consola`).toUpperCase();
        switch(consolas10){
            case "1":
                consolas[0].stock()
                // valor = consolas.precioTOTAL 
                break;
            case "2":
                consolas[1].stock()
                // valor = consolas2.precioTOTAL 
                break;
            case "3":
                consolas[2].stock()
                // valor = consolas3.precioTOTAL 
                break;
            case "4":
                entrada = "4"
                alert("Volveras al menu otra vez!")
                comercio()
                break;
            case "5":
                entrada = "5"
                alert("Terminemos con la compra")
                cuotasEfectivonormal()
                break;
                default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == consolas){
            trueofalse = false;
        }
    }
}
// SISTEMA DE COMPRA INTEGRADA A PC ARMADO
function quieroArmarMipcinicio(){
    while(trueofalse){
        let pcprincipio = prompt("Que marca queres utilizar. AMD o INTEL").toUpperCase();
        switch(pcprincipio){
            case "AMD":
                entrada = "AMD"
                alert(`AMD procederemos a ir por un procesador`)
                procesoamd()
                break;
            case "INTEL":
                entrada = "INTEL"
                alert(`INTEL procederemos a ir por un procesador`)
                procesointel();
                break;
                default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == pcprincipio){
            trueofalse = false;
        }
    }
}
// INICIO PROCESO AMD
function procesoamd(){
    procesadoramd()
}
function procesadoramd(){
    while(trueofalse){
        let pcProcesadoramd = prompt(`Tenemos los siguientes procesadores \n1. ${procesadoresAmd[0].nombre} $${procesadoresAmd[0].precio} \n2. ${procesadoresAmd[1].nombre} $${procesadoresAmd[1].precio} \n3. ${procesadoresAmd[2].nombre} $${procesadoresAmd[2].precio}\n Por favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(pcProcesadoramd){
            case "1":
                entrada = "1"
                procesadoresAmd[0].armadopc()
                alert(`${procesadoresAmd[0].nombre} Buena eleccion! \n Ahora vamos a por la mother`)
                motheramd()
                sumadeproductos()
                
                break;
            case "2":
                entrada = "2"
                procesadoresAmd[1].armadopc()
                alert(`${procesadoresAmd[1].nombre} Buena eleccion! \n Ahora vamos a por la mother`)
                motheramd()
                sumadeproductos()
                break;
            case "3":
                entrada = "3"
                procesadoresAmd[2].armadopc()
                alert(`${procesadoresAmd[2].nombre} Buena eleccion! \n Ahora vamos a por la mother`)
                motheramd()
                sumadeproductos()
                break;
                default: alert("Elegi una opcion valida");
                break;

        }
        if(entrada == pcProcesadoramd){
            trueofalse = false;
        }
    }
}
function motheramd(){
    while(trueofalse){
        let pcmotheramd = prompt(`Tenemos las siguientes mothers \n1. ${mothersAmd[0].nombre} $${mothersAmd[0].precio} \n2. $${mothersAmd[1].nombre} ${mothersAmd[1].precio} \n3. ${mothersAmd[2].nombre} $${mothersAmd[2].precio} \n Por favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(pcmotheramd){
            case "1":
                entrada = "1"
                mothersAmd[0].armadopc()
                alert(`${mothersAmd[0].nombre} Buena eleccion! \n Ahora vamos a por la ram`)
                memoriasRamGen()
                break;
            case "2":
                entrada = "2"
                mothersAmd[1].armadopc()
                alert(`${mothersAmd[1].nombre} Buena eleccion! \n Ahora vamos a por la ram`)
                memoriasRamGen()
                break;
            case "3":
                entrada = "3"
                mothersAmd[2].armadopc()
                alert(`${mothersAmd[2].nombre} Buena eleccion! \n Ahora vamos a por la ram`)
                memoriasRamGen()
                break;
                default: alert("Elegi una opcion valida");
                break;

        }
        if(entrada == pcmotheramd){
            trueofalse = false;
        }
    }
}
//FIN PROCESO AMD
//INICIO PROCESO INTEL
function procesointel(){
    procesadorintel()
}
function procesadorintel(){
    while(trueofalse){
        let pcProcesadorintel = prompt(`Tenemos los siguientes procesadores \n1. ${procesadoresIntel[0].nombre} $${procesadoresIntel[0].precio} \n2. ${procesadoresIntel[1].nombre} $${procesadoresIntel[1].precio} \n3. ${procesadoresIntel[2].nombre} $${procesadoresIntel[2].precio}\n Por favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(pcProcesadorintel){
            case "1":
                entrada = "1"
                procesadoresIntel[0].armadopc()
                alert(`${procesadoresIntel[0].nombre} Buena eleccion! \n Ahora vamos a por la mother`)
                motherintel()
                sumadeproductos()
                
                break;
            case "2":
                entrada = "2"
                procesadoresIntel[1].armadopc()
                alert(`${procesadoresIntel[1].nombre} Buena eleccion! \n Ahora vamos a por la mother`)
                motherintel()
                sumadeproductos()
                break;
            case "3":
                entrada = "3"
                procesadoresIntel[2].armadopc()
                alert(`${procesadoresIntel[2].nombre} Buena eleccion! \n Ahora vamos a por la mother`)
                motherintel()
                sumadeproductos()
                break;
                default: alert("Elegi una opcion valida");
                break;

        }
        if(entrada == pcProcesadorintel){
            trueofalse = false;
        }
    }
}
function motherintel(){
    while(trueofalse){
        let pcmotherintel = prompt(`Tenemos las siguientes mothers \n1. ${mothersIntel[0].nombre} $${mothersIntel[0].precio} \n2.${mothersIntel[1].nombre} $${mothersIntel[1].precio} \n3. ${mothersIntel[2].nombre} $${mothersIntel[2].precio} \n Por favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(pcmotherintel){
            case "1":
                entrada = "1"
                mothersIntel[0].armadopc()
                alert(`${mothersIntel[0].nombre} Buena eleccion! \n Ahora vamos a por la ram`)
               memoriasRamGen()
                break;
            case "2":
                entrada = "2"
                mothersIntel[1].armadopc()
                alert(`${mothersIntel[1].nombre} Buena eleccion! \n Ahora vamos a por la ram`)
                memoriasRamGen()
                break;
            case "3":
                entrada = "3"
                mothersIntel[2].armadopc()
                alert(`${mothersIntel[2].nombre} Buena eleccion! \n Ahora vamos a por la ram`)
               memoriasRamGen()
                break;
                default: alert("Elegi una opcion valida");
                break;

        }
        if(entrada == pcmotherintel){
            trueofalse = false;
        }
    }
}
// FIN PROCESO INTEL
// PROCESO GENERALES
function memoriasRamGen(){
    while(trueofalse){
        let memoriasRamGen = prompt(`Tenemos las siguientes memorias Ram \n1. ${memoriasRAM[0].nombre} $${memoriasRAM[0].precio} \n2.  ${memoriasRAM[1].nombre} $${memoriasRAM[1].precio} \n3. ${memoriasRAM[2].nombre} $${memoriasRAM[2].precio} \nPor favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(memoriasRamGen){
            case "1":
                entrada = "1"
                memoriasRAM[0].armadopc()
                alert(`${memoriasRAM[0].nombre} Buena eleccion! \n Ahora vamos a por la grafica`)
                graficasintel()
                break;
            case "2":
                entrada = "2"
                memoriasRAM[1].armadopc()
                alert(`${memoriasRAM[1].nombre} Buena eleccion! \n Ahora vamos a por la grafica`)
                graficasintel()
                break;
            case "3":
                entrada = "3"
                memoriasRAM[2].armadopc()
                alert(`${memoriasRAM[2].nombre} Buena eleccion! \n Ahora vamos a por la grafica`)
                graficasintel()
                break;
                default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == memoriasRamGen){
            trueofalse = false;
        }
    }
}
function graficasintel(){
    while(trueofalse){
        let palcasdevideo = prompt(`Tenemos las siguientes graficas \n1. ${graficas[0].nombre} $${graficas[0].precio} \n2. ${graficas[1].nombre} $${graficas[1].precio}  \n3. ${graficas[2].nombre} $${graficas[2].precio}   \nPor favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(palcasdevideo){
            case "1":
                entrada = "1"
                graficas[0].armadopc()
                alert(`${graficas[0].nombre} Buena eleccion! \n Ahora vamos a por el almacenamiento`)
                almacenamientointel()
                break;
            case "2":
                entrada = "2"
                graficas[1].armadopc()
                alert(`${graficas[1].nombre} Buena eleccion! \n Ahora vamos a por el almacenamiento`)
                 almacenamientointel()
                break;
            case "3":
                entrada = "3"
                graficas[2].armadopc()
                alert(`${graficas[2].nombre} Buena eleccion! \n Ahora vamos a por el almacenamiento`)
                 almacenamientointel()
                break;
                default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == palcasdevideo){
            trueofalse = false;
        }
    }
}
function almacenamientointel(){
    while(trueofalse){
        let discosrigidos = prompt(`Tenemos los siguientes discos rigidos y SSD \n1. ${almacenamiento[0].nombre} $${almacenamiento[0].precio} \n2. ${almacenamiento[1].nombre} $${almacenamiento[1].precio} \n3. ${almacenamiento[2].nombre} $${almacenamiento[2].precio}  \nPor favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(discosrigidos){
            case "1":
                entrada = "1"
                almacenamiento[0].armadopc()
                alert(`${almacenamiento[0].nombre} Buena eleccion! \n Ahora vamos a por el gabinete`)
                gabinetesintel()
                break;
            case "2":
                entrada = "2"
                almacenamiento[1].armadopc()
                alert(`${almacenamiento[1].nombre} Buena eleccion! \n Ahora vamos a por el gabinete`)
                gabinetesintel()
                break;
            case "3":
                entrada = "3"
                almacenamiento[2].armadopc()
                alert(`${almacenamiento[2].nombre} Buena eleccion! \n Ahora vamos a por el gabinete`)
                gabinetesintel()
                break;
                default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == discosrigidos){
            trueofalse = false;
        }
    }
}
function gabinetesintel(){
    while(trueofalse){
        let gabinetesintel = prompt(`Tenemos los siguientes gabinetes \n1. ${gabinetes[0].nombre} $${gabinetes[0].precio} \n2. ${gabinetes[1].nombre} $${gabinetes[1].precio} \n3. ${gabinetes[2].nombre} $${gabinetes[2].precio} \nPor favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(gabinetesintel){
            case "1":
                entrada = "1"
                gabinetes[0].armadopc()
                alert(`${gabinetes[0].nombre} Buena eleccion! \n Ahora vamos a por la fuente`)
                fuentesintel()
                break;
            case "2":
                entrada = "2"
                gabinetes[1].armadopc()
                alert(`${gabinetes[1].nombre} Buena eleccion! \n Ahora vamos a por la fuente`)
                fuentesintel()
                break;
            case "3":
                entrada = "3"
                gabinetes[2].armadopc()
                alert(`${gabinetes[2].nombre} Buena eleccion! \n Ahora vamos a por la fuente`)
                fuentesintel()
                break;
                default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == gabinetesintel){
            trueofalse = false;
        }
    }
}
function fuentesintel(){
    while(trueofalse){
        let fuentesintel = prompt(`Tenemos las siguientes fuentes \n1. ${fuentes[0].nombre} $${fuentes[0].precio} \n2. ${fuentes[1].nombre} $${fuentes[1].precio}  \n3.${fuentes[2].nombre} $${fuentes[2].precio}  \nPor favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(fuentesintel){
            case "1":
                entrada = "1"
                fuentes[0].armadopc()
                alert(`${fuentes[0].nombre} Buena eleccion! \n Muy bien, ahora te pasare el total de la PC`)
                break;
            case "2":
                entrada = "2"
                fuentes[1].armadopc()
                alert(`${fuentes[1].nombre} Buena eleccion! \n Muy bien, ahora te pasare el total de la PC`)
                break;
            case "3":
                entrada = "3"
                fuentes[2].armadopc()
                alert(`${fuentes[2].nombre} Buena eleccion! \n Muy bien, ahora te pasare el total de la PC`)
                break;
                default: alert("Elegi una opcion valida");
                break;
        }
        if(entrada == fuentesintel){
            trueofalse = false;
        }
    }
}
function sumadeproductos(){
    sumapr()
    cuotasEfectivo()
}
function cuotasEfectivo(){
    trueofalse = true
    let resultado = (suma*15)/100;
    alert("Muy buena eleccion! Recuerde que tenemos una oferta de un 15% del valor total de la pc si la compra en efectivo!")
    while(trueofalse){
    let cuotasoefectivo = prompt("Ahora que tipo de pago quieres, ¿Cuotas o efectivo?").toUpperCase()
       switch(cuotasoefectivo){
            case "EFECTIVO":
                entrada = "EFECTIVO"
                alert(`Muy bien vamos a efectuar el pago`)
                document.getElementById('EFECTIVO').innerHTML = `GeekInformatica.SA <br>CUIT: 4239205884 <br> ING.BR: 1017936-4 <br> Formosa 127 <br> Ticket generado: 2041290 <br> Fecha: 22/03/2021 Hora: 16.40 <br> paga ${suma-resultado}`;
                document.getElementById('EFECTIVO2').innerHTML = `Bien su computadora esta compuesta por lo siguientes componentes: <br>
                ${pcCaritoNombre.toString()}`;
                
            break;
            case "CUOTAS":
                entrada = "CUOTAS"
                cuotas()
            break;
            default: alert("Elegi una opcion valida");
            break;
        }
        if(entrada == cuotasoefectivo){
            trueofalse = false;
        }
    }
}
function cuotas(){
    trueofalse = true
    iva21 = (suma*21)/100;
    while(trueofalse){
    
    let cuotas = prompt("Podemos darle los siguientes planes de cuotas: \n3 cuotas \n6 cuotas \n9 cuotas \n12 cuotas")
    switch(cuotas){
        case "3":
        entrada = "3"
        intereses = (suma*6)/100;
        resultadototal = (suma+iva21+intereses)/3
        preciototal = suma+iva21+intereses
        alert(`Aca esta su plan de pago. Quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
        alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
        aceptaono()
        break;
        
        case "6":
            entrada = "6"
            intereses = (suma*8)/100;
            resultadototal = (suma+iva21+intereses)/6
            preciototal = suma+iva21+intereses
            alert(`Aca esta su plan de pago. Quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
            alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
            aceptaono()
            break;
        
        case "9":
            entrada = "9"
            intereses = (suma*11)/100;
            resultadototal = (suma+iva21+intereses)/9
            preciototal = suma+iva21+intereses
            alert(`Aca esta su plan de pago. Quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
            alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
            aceptaono()
            break;

        case "12":
            entrada = "12"
            intereses = (suma*13)/100;
            resultadototal = (suma+iva21+intereses)/12
            preciototal = suma+iva21+intereses
            alert(`Aca esta su plan de pago. Quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
            alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
            aceptaono()
            break;
   
            default: alert("Elegi una opcion valida");
            break;
        }
        if(entrada == cuotas){
            trueofalse = false;
        }
    }
}
function aceptaono(){
    trueofalse = true

    while (trueofalse){
    trueofalse = true
    let propuesta = prompt("¿Quiere usted la computadora armada?").toUpperCase()
        switch(propuesta){
            case "SI":
                alert(`Bien vamos a hacer todo el pago.`)
                entrada = "SI"
                contrato()
                break;

            case "NO":
                alert(`Bueno no hay problema, esperemos que regrese pronto`)
                entrada = "NO"
            break;
            default: alert("Elegi una opcion valida");
            break;
        }
        if(entrada == propuesta){
            trueofalse = false;
    }
}}
function contrato(){
    document.getElementById('CUOTAS2').innerHTML =  `Aca esta su plan de pago. la pc quedaria en un total de ${preciototal} \nLa cuota quedaria en ${resultadototal} <br> Iva ${iva21} <br> Interes de la cuota ${intereses} <br> El pago se realizara todos los dias 7 de cada mes.`;
    listaPC()
}
function listaPC(){
    document.getElementById('PCLIST').innerHTML = `Bien su computadora va a estar compuesta por lo siguientes componentes: <br>${pcCaritoNombre.toString()} `;
}
function cuotasEfectivonormal(){
    sumapr()
    alert("Muy buena eleccion! vamos a proceder al pago")
    while(trueofalse){
    let cuotasoefectivo = prompt("Ahora que tipo de pago quieres, ¿Cuotas o efectivo?").toUpperCase()
       switch(cuotasoefectivo){
            case "EFECTIVO":
                entrada = "EFECTIVO"
                alert(`Muy bien vamos a proceder al pago`)
                document.getElementById('EFECTIVO').innerHTML = `GeekInformatica.SA <br>CUIT: 4239205884 <br> ING.BR: 1017936-4 <br> Formosa 127 <br> Ticket generado: 2041290 <br> Fecha: 22/03/2021 Hora: 16.40 <br> Lista de productos: <br> ${arrayNombresFinal.toString()}<br> paga ${suma}`;
                
            break;
            case "CUOTAS":
                entrada = "CUOTAS"
                cuotasnormal()
            break;
            default: alert("Elegi una opcion valida");
            break;
        }
        if(entrada == cuotasoefectivo){
            trueofalse = false;
        }
    }
       
        
}
function cuotasnormal(){
    iva21 = (suma*21)/100;
    while(trueofalse){
    
    let cuotas = prompt("Podemos darle los siguientes planes de cuotas: \n3 cuotas \n6 cuotas \n9 cuotas \n12 cuotas")
    switch(cuotas){
        case "3":
        entrada = "3"
        intereses = (suma*6)/100;
        resultadototal = (suma+iva21+intereses)/3
        preciototal = suma+iva21+intereses
        alert(`Aca esta su plan de pago. quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
        alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
        aceptaononormal()
        break;
        
        case "6":
            entrada = "6"
            intereses = (suma*8)/100;
            resultadototal = (suma+iva21+intereses)/6
            preciototal = suma+iva21+intereses
            alert(`Aca esta su plan de pago. quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
            alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
            aceptaononormal()
            break;
        
        case "9":
            entrada = "9"
            intereses = (suma*11)/100;
            resultadototal = (suma+iva21+intereses)/9
            preciototal = suma+iva21+intereses
            alert(`Aca esta su plan de pago. quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
            alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
            aceptaononormal()
            break;

        case "12":
            entrada = "12"
            intereses = (suma*13)/100;
            resultadototal = (suma+iva21+intereses)/12
            preciototal = suma+iva21+intereses
            alert(`Aca esta su plan de pago. quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
            alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
            aceptaononormal()
            break;
            default: alert("Elegi una opcion valida");
            break;
        }
        if(entrada == cuotas){
            trueofalse = false;
        }
    }
}

function aceptaononormal() {
    while (trueofalse){
    let propuesta = prompt("¿Acepta el plan?").toUpperCase()
        switch(propuesta){
            case "SI":
                alert(`Muy bien, que disfrute su compra`)
                contratonormal()
                entrada = "SI"
                break;

            case "NO":
                alert(`Bueno no hay problema, esperemos que regrese pronto`)
                entrada = "NO"
            break;
            default: alert("Elegi una opcion valida");
            break;
        }
        if(entrada == propuesta){
            trueofalse = false;
    }
}}
function contratonormal(){
    document.getElementById('EFECTIVO').innerHTML = `Lista de productos: <br> ${arrayNombresFinal.toString()}<br> valor sin iva ni intereses ${suma}`;
    document.getElementById('CUOTAS').innerHTML = `El plan de pago quedaria en un total de ${preciototal} \nLa cuota quedaria en ${resultadototal} <br> Iva ${iva21} <br> Interes de la cuota ${intereses} <br> El pago se realizara todos los dias 7 de cada mes.`;
}
// comercio()






