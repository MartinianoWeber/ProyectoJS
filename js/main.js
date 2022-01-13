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
        let perifecomouse = prompt(`Tenemos los siguientes mouse \n1. ${mouses.nombre} $${mouses.precio} stock ${mouses.cantidad} \n2. ${mouses2.nombre} $${mouses2.precio} stock ${mouses2.cantidad} \n3. ${mouses3.nombre} $${mouses3.precio} stock ${mouses3.cantidad} \n4. Seguir comprando \n5. Terminar compra   \nIndique su respuesta con el numero que corresponde para cada mouse`).toUpperCase();
        switch(perifecomouse){
            case "1":  
                mouses.stock()
                valor = mouses.precioTOTAL 
                break;
            case "2":
                mouses2.stock()
                valor = mouses2.precioTOTAL
                break;
            case "3":
                mouses3.stock()
                valor = mouses3.precioTOTAL
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
        let perifecteclado = prompt(`Tenemos los siguientes teclados \n1. ${teclado.nombre} $${teclado.precio} stock ${teclado.cantidad} \n2. ${teclado2.nombre} $${teclado2.precio} stock ${teclado2.cantidad}\n3. ${teclado3.nombre} $${teclado3.precio} stock ${teclado3.cantidad}\n4. Seguir comprando \n5. Terminar compra \nIndique su respuesta con el numero que corresponde para cada teclado`).toUpperCase();
        switch(perifecteclado){
            case "1":
                teclado.stock()
                valor = teclado.precioTOTAL  
                break;
            case "2":
                teclado2.stock()
                valor = teclado2.precioTOTAL  
                break;
            case "3":
                teclado3.stock()
                valor = teclado3.precioTOTAL 
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
        let perifecoauricular = prompt(`Tenemos los siguientes auriculares \n1. ${auriculares.nombre} $${auriculares.precio} ${auriculares.cantidad} \n2. ${auriculares2.nombre} $${auriculares2.precio} ${auriculares2.cantidad}\n3. ${auriculares3.nombre} $${auriculares3.precio} ${auriculares3.cantidad} \n4. Seguir comprando \n5. Terminar compra \nIndique su respuesta con el numero que corresponde para cada auricular`).toUpperCase();
        switch(perifecoauricular){
            case "1":
                auriculares.stock()
                valor = auriculares.precioTOTAL 
                break;
            case "2":
                auriculares2.stock()
                valor = auriculares2.precioTOTAL 
                break;
            case "3":
                auriculares3.stock()
                valor = auriculares3.precioTOTAL 
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
        let netbooks10 = prompt(`Tenemos las siguientes netbooks \n1. Netbook HP i510210U, Ram: 8Gb y SSD de 256GB $${netbooks.precio} tiene un stock ${netbooks.cantidad} \n2. Netbook Lenovo i7 10510U Ram: 8Gb y SSD 512GB $${netbooks2.precio} tiene un stock ${netbooks2.cantidad} \n3. Netbook Asus  i7 1065G7 Ram: 8Gb SSD: 512GB HDD: 1TB $${netbooks3.precio} y tiene un stock ${netbooks3.cantidad} \n4. Seguir comprando \n5. Terminar compra \nIndique su respuesta con el numero que corresponde para cada netbook`).toUpperCase();
        switch(netbooks10){
            case "1":
                netbooks.stock()
                valor = netbooks.precioTOTAL 

                break;
            case "2":
                netbooks2.stock()
                valor = netbooks2.precioTOTAL 

                break;
            case "3":
                netbooks3.stock()
                valor = netbooks3.precioTOTAL 
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
        let combospc = prompt(`Tenemos las siguientes combos \n1. ${combosPc.nombre} $${combosPc.precio} y tiene un stock ${combosPc.cantidad} \n2. ${combosPc2.nombre} $${combosPc2.precio} y tiene un stock ${combosPc2.cantidad}\n3.  ${combosPc3.nombre} $${combosPc3.precio} y tiene un stock ${combosPc3.cantidad} \n4. Seguir comprando \n5. Terminar compra \nIndique su respuesta con el numero que corresponde para cada combo`).toUpperCase();
        switch(combospc){
            case "1":
                combosPc.stock()
                valor = combosPc.precioTOTAL 
                break;
            case "2":
                combosPc2.stock()
                valor = combosPc2.precioTOTAL 
                break;
            case "3":
                combosPc3.stock()
                valor = combosPc3.precioTOTAL 
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
        let placasVideos = prompt(`Tenemos las siguientes placas de video \n1. GTX 1050TI MSI $${graficas.precio} y tiene un stock ${graficas.cantidad} \n2. MSI VENTUS RTX 2060 SUPER $${graficas2.precio} y tiene un stock ${graficas2.cantidad} \n3. MSI VENTUS RTX 3090 $${graficas3.precio} y tiene un stock ${graficas3.cantidad}\n4. Seguir comprando \n5. Terminar compra \nIndique su respuesta con el numero que corresponde para cada placa`).toUpperCase();
        switch(placasVideos){
            case "1":
                graficas.stock()
                valor = graficas.precioTOTAL 
                break;
            case "2":
                graficas2.stock()
                valor = graficas2.precioTOTAL 
                break;
            case "3":
                graficas3.stock()
                valor = graficas3.precioTOTAL 
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
        let memoriasRampromp = prompt(`Tenemos las siguientes memorias Ram \n1. Memoria RAM Fury DDR4 8GB 2666mhz $${memoriasRam.precio} y stock de ${memoriasRam.cantidad} \n2.  Memoria RAM Fury DDR4 16GB 2133mhz $${memoriasRam2.precio} y stock de ${memoriasRam2.cantidad} \n3. x2 Memoria RAM Fury DDR4 8GB 2133mhz $${memoriasRam3.precio} y stock de ${memoriasRam3.cantidad} \n4. Seguir comprando \n5. Terminar compra  \nPor favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(memoriasRampromp){
            case "1":
                memoriasRam.stock()
                valor = memoriasRam.precioTOTAL 
                break;
            case "2":
                memoriasRam2.stock()
                valor = memoriasRam2.precioTOTAL 
                break;
            case "3":
                memoriasRam3.stock()
                valor = memoriasRam3.precioTOTAL 
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
        if(entrada == memoriasRam){
            trueofalse = false;
        }
    }
}
function consolas10(){
    while(trueofalse){
        let consolas10 = prompt(`Tenemos las siguientes consolas \n1. Xbox Series X 1TB $${consolas.precio}  y en stock ${consolas.cantidad} \n2. Xbox Series S 512GB $${consolas2.precio}  y en stock ${consolas2.cantidad} \n3. Sony PlayStation 5 825GB $${consolas3.precio} y en stock ${consolas3.cantidad}\n4. Seguir comprando \n5. Terminar compra  \nIndique su respuesta con el numero que corresponde para cada consola`).toUpperCase();
        switch(consolas10){
            case "1":
                consolas.stock()
                valor = consolas.precioTOTAL 
                break;
            case "2":
                consolas2.stock()
                valor = consolas2.precioTOTAL 
                break;
            case "3":
                consolas3.stock()
                valor = consolas3.precioTOTAL 
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
                alert(`${objeto = "AMD"} procederemos a ir por un procesador`)
                procesoamd()
                break;
            case "INTEL":
                entrada = "INTEL"
                alert(`${objeto = "INTEL"} procederemos a ir por un procesador`)
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
        let pcProcesadoramd = prompt(`Tenemos los siguientes procesadores \n1. ${procesadorAMD.nombre} $${procesadorAMD.precio} \n2. ${procesadorAMD2.nombre} $${procesadorAMD2.precio} \n3. ${procesadorAMD3.nombre} $${procesadorAMD.precio}\n Por favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(pcProcesadoramd){
            case "1":
                entrada = "1"
                procesadorValor = procesadorAMD.precio
                procesadorNombre = procesadorAMD.nombre
                alert(`${procesadorAMD.nombre} Buena eleccion! \n Ahora vamos a por la mother`)
                motheramd()
                sumadeproductos()
                
                break;
            case "2":
                entrada = "2"
                procesadorValor = procesadorAMD2.precio
                procesadorNombre = procesadorAMD2.nombre
                alert(`${procesadorAMD2.nombre} Buena eleccion! \n Ahora vamos a por la mother`)
                motheramd()
                sumadeproductos()
                break;
            case "3":
                entrada = "3"
                procesadorValor = procesadorAMD3.precio
                procesadorNombre = procesadorAMD3.nombre
                alert(`${procesadorAMD3.nombre} Buena eleccion! \n Ahora vamos a por la mother`)
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
        let pcmotheramd = prompt(`Tenemos las siguientes mothers \n1. ${motherAMD.nombre} $${motherAMD.precio} \n2. $${motherAMD2.nombre} ${motherAMD2.precio} \n3. ${motherAMD3.nombre} $${motherAMD3.precio} \n Por favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(pcmotheramd){
            case "1":
                entrada = "1"
                motherValor = motherAMD.precio
                motherNombre = motherAMD.nombre
                alert(`${motherAMD.nombre} Buena eleccion! \n Ahora vamos a por la ram`)
                memoriasRamGen()
                break;
            case "2":
                entrada = "2"
                motherValor = motherAMD2.precio
                motherNombre = motherAMD2.nombre
                motherAMD2.nombre
                alert(`${motherAMD2.nombre} Buena eleccion! \n Ahora vamos a por la ram`)
                memoriasRamGen()
                break;
            case "3":
                entrada = "3"
                motherValor = motherAMD3.precio
                motherNombre = motherAMD3.nombre
                motherAMD3.nombre
                alert(`${motherAMD3.nombre} Buena eleccion! \n Ahora vamos a por la ram`)
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
        let pcProcesadorintel = prompt(`Tenemos los siguientes procesadores \n1. ${procesadorIntel.nombre} $${procesadorIntel.precio} \n2. ${procesadorIntel2.nombre} $${procesadorIntel2.precio} \n3. ${procesadorIntel3.nombre} $${procesadorIntel3.precio}\n Por favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(pcProcesadorintel){
            case "1":
                entrada = "1"
                procesadorValor = procesadorIntel.precio
                procesadorNombre = procesadorIntel.nombre 
                alert(`${procesadorIntel.nombre} Buena eleccion! \n Ahora vamos a por la mother`)
                motherintel()
                sumadeproductos()
                
                break;
            case "2":
                entrada = "2"
                procesadorValor = procesadorIntel2.precio
                procesadorNombre = procesadorIntel2.nombre 
                alert(`${procesadorIntel2.nombre} Buena eleccion! \n Ahora vamos a por la mother`)
                motherintel()
                sumadeproductos()
                break;
            case "3":
                entrada = "3"
                procesadorValor = procesadorIntel3.precio
                procesadorNombre = procesadorIntel3.nombre 
                alert(`${procesadorIntel3.nombre} Buena eleccion! \n Ahora vamos a por la mother`)
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
        let pcmotherintel = prompt(`Tenemos las siguientes mothers \n1. ${motherIntel.nombre} $${motherIntel.precio} \n2.${motherIntel2.nombre} $${motherIntel2.precio} \n3. ${motherIntel3.nombre} $${motherIntel3.precio} \n Por favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(pcmotherintel){
            case "1":
                entrada = "1"
                motherIntel.nombre
                motherValor = motherIntel.precio
                motherNombre = motherIntel.nombre
                alert(`${motherIntel.nombre} Buena eleccion! \n Ahora vamos a por la ram`)
               memoriasRamGen()
                break;
            case "2":
                entrada = "2"
                motherIntel2.nombre
                motherValor = motherIntel2.precio
                motherNombre = motherIntel2.nombre
                alert(`${motherIntel2.nombre} Buena eleccion! \n Ahora vamos a por la ram`)
                memoriasRamGen()
                break;
            case "3":
                entrada = "3"
                motherIntel3.nombre
                motherValor = motherIntel3.precio
                motherNombre = motherIntel3.nombre
                alert(`${motherIntel3.nombre} Buena eleccion! \n Ahora vamos a por la ram`)
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
        let memoriasRamGen = prompt(`Tenemos las siguientes memorias Ram \n1. ${memoriasRam.nombre} $${memoriasRam.precio} \n2.  ${memoriasRam2.nombre} $${memoriasRam2.precio} \n3. ${memoriasRam.nombre} $${memoriasRam.precio} \nPor favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(memoriasRamGen){
            case "1":
                entrada = "1"
                memoriasRamNombre = memoriasRam.nombre
                memoriasRamValor = memoriasRam.precio
                alert(`${memoriasRam.nombre} Buena eleccion! \n Ahora vamos a por la grafica`)
                graficasintel()
                break;
            case "2":
                entrada = "2"
                memoriasRamNombre = memoriasRam2.nombre
                memoriasRamValor = memoriasRam2.precio
                alert(`${memoriasRam2.nombre} Buena eleccion! \n Ahora vamos a por la grafica`)
                graficasintel()
                break;
            case "3":
                entrada = "3"
                memoriasRamNombre = memoriasRam3.nombre
                memoriasRamValor = memoriasRam3.precio
                alert(`${memoriasRam3.nombre} Buena eleccion! \n Ahora vamos a por la grafica`)
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
        let palcasdevideo = prompt(`Tenemos las siguientes graficas \n1. ${graficas.nombre} $${graficas.precio} \n2. ${graficas2.nombre} $${graficas2.precio}  \n3. ${graficas3.nombre} $${graficas3.precio}   \nPor favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(palcasdevideo){
            case "1":
                entrada = "1"
                graficasNombre = graficas.nombre
                graficasValor = graficas.precio
                alert(`${graficas.nombre} Buena eleccion! \n Ahora vamos a por el almacenamiento`)
                almacenamientointel()
                break;
            case "2":
                entrada = "2"
                graficasNombre = graficas2.nombre
                graficasValor = graficas2.precio
                alert(`${graficas2.nombre} Buena eleccion! \n Ahora vamos a por el almacenamiento`)
                 almacenamientointel()
                break;
            case "3":
                entrada = "3"
                graficasNombre = graficas3.nombre
                graficasValor = graficas3.precio
                alert(`${graficas3.nombre} Buena eleccion! \n Ahora vamos a por el almacenamiento`)
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
        let discosrigidos = prompt(`Tenemos los siguientes discos rigidos y SSD \n1. ${almacenamiento.nombre} $${almacenamiento.precio} \n2. ${almacenamiento2.nombre} $${almacenamiento2.precio} \n3. ${almacenamiento3.nombre} $${almacenamiento3.precio}  \nPor favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(discosrigidos){
            case "1":
                entrada = "1"
                almacenamientoNombreGen = almacenamiento.nombre
                almacenamientoValor = almacenamiento.precio
                alert(`${almacenamiento.nombre} Buena eleccion! \n Ahora vamos a por el gabinete`)
                gabinetesintel()
                break;
            case "2":
                entrada = "2"
                almacenamientoNombreGen = almacenamiento2.nombre
                almacenamientoValor = almacenamiento2.precio
                alert(`${almacenamiento2.nombre} Buena eleccion! \n Ahora vamos a por el gabinete`)
                gabinetesintel()
                break;
            case "3":
                entrada = "3"
                almacenamientoNombreGen = almacenamiento3.nombre
                almacenamientoNombreGen = almacenamiento3.nombre
                alert(`${almacenamiento3.nombre} Buena eleccion! \n Ahora vamos a por el gabinete`)
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
        let gabinetesintel = prompt(`Tenemos los siguientes gabinetes \n1. ${gabinetes.nombre} $${gabinetes.precio} \n2. ${gabinetes2.nombre} $${gabinetes2.precio} \n3. ${gabinetes3.nombre} $${gabinetes3.precio} \nPor favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(gabinetesintel){
            case "1":
                entrada = "1"
                gabinetesNombre = gabinetes.nombre
                gabinetesValor = gabinetes.precio
                alert(`${gabinetes.nombre} Buena eleccion! \n Ahora vamos a por la fuente`)
                fuentesintel()
                break;
            case "2":
                entrada = "2"
                gabinetesNombre = gabinetes2.nombre
                gabinetesValor = gabinetes2.precio
                alert(`${gabinetes.nombre} Buena eleccion! \n Ahora vamos a por la fuente`)
                fuentesintel()
                break;
            case "3":
                entrada = "3"
                gabinetesNombre = gabinetes3.nombre
                gabinetesValor = gabinetes3.precio
                alert(`${gabinetes.nombre} Buena eleccion! \n Ahora vamos a por la fuente`)
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
        let fuentesintel = prompt(`Tenemos las siguientes fuentes \n1. ${fuentes.nombre} $${fuentes.precio} \n2. ${fuentes2.nombre} $${fuentes2.precio}  \n3.${fuentes3.nombre} $${fuentes3.precio}  \nPor favor haz tu eleccion con los numeros indicados en cada una.`).toUpperCase();
        switch(fuentesintel){
            case "1":
                entrada = "1"
                fuentesNombre = fuentes.nombre
                fuentesValor = fuentes.precio
                alert(`${fuentes.nombre} Buena eleccion! \n Muy bien, ahora te pasare el total de la PC`)
                break;
            case "2":
                entrada = "2"
                fuentesNombre = fuentes2.nombre
                fuentesValor = fuentes2.precio
                alert(`${fuentes2.nombre} Buena eleccion! \n Muy bien, ahora te pasare el total de la PC`)
                break;
            case "3":
                entrada = "3"
                fuentesNombre = fuentes3.nombre
                fuentesValor = fuentes3.precio
                alert(`${fuentes3.nombre} Buena eleccion! \n Muy bien, ahora te pasare el total de la PC`)
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
    suma = procesadorValor + motherValor + memoriasRamValor + graficasValor + almacenamientoValor + gabinetesValor + fuentesValor
    cuotasEfectivo()
    console.log(suma)
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
                document.getElementById('EFECTIVO2').innerHTML = `Bien su computadora esta compuesta por lo siguientes componentes: <br> ${procesadorNombre} $${procesadorValor} 
                <br> ${motherNombre} $${motherValor}
                <br> ${memoriasRamNombre} $${memoriasRamValor}
                <br> ${graficasNombre} $${graficasValor}
                <br> ${almacenamientoNombreGen} $${almacenamientoValor}
                <br> ${gabinetesNombre} $${gabinetesValor}
                <br> ${fuentesNombre} $${fuentesValor}`;
                
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
    document.getElementById('PCLIST').innerHTML = `Bien su computadora va a estar compuesta por lo siguientes componentes: <br> ${procesadorNombre} $${procesadorValor} <br> ${motherNombre} $${motherValor}<br> ${memoriasRamNombre} $${memoriasRamValor}<br> ${graficasNombre} $${graficasValor}<br> ${almacenamientoNombreGen} $${almacenamientoValor}<br> ${gabinetesNombre} $${gabinetesValor}<br> ${fuentesNombre} $${fuentesValor}`;
}
function cuotasEfectivonormal(){
    alert("Muy buena eleccion! vamos a proceder al pago")
    while(trueofalse){
    let cuotasoefectivo = prompt("Ahora que tipo de pago quieres, ¿Cuotas o efectivo?").toUpperCase()
       switch(cuotasoefectivo){
            case "EFECTIVO":
                entrada = "EFECTIVO"
                alert(`Muy bien vamos a proceder al pago`)
                document.getElementById('EFECTIVO').innerHTML = `GeekInformatica.SA <br>CUIT: 4239205884 <br> ING.BR: 1017936-4 <br> Formosa 127 <br> Ticket generado: 2041290 <br> Fecha: 22/03/2021 Hora: 16.40 <br> Lista de productos: <br> ${arrayNombresFinal.toString()}<br> paga ${valor}`;
                
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
    iva21 = (valor*21)/100;
    while(trueofalse){
    
    let cuotas = prompt("Podemos darle los siguientes planes de cuotas: \n3 cuotas \n6 cuotas \n9 cuotas \n12 cuotas")
    switch(cuotas){
        case "3":
        entrada = "3"
        intereses = (valor*6)/100;
        resultadototal = (valor+iva21+intereses)/3
        preciototal = valor+iva21+intereses
        alert(`Aca esta su plan de pago. quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
        alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
        aceptaononormal()
        break;
        
        case "6":
            entrada = "6"
            intereses = (valor*8)/100;
            resultadototal = (valor+iva21+intereses)/6
            preciototal = valor+iva21+intereses
            alert(`Aca esta su plan de pago. quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
            alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
            aceptaononormal()
            break;
        
        case "9":
            entrada = "9"
            intereses = (valor*11)/100;
            resultadototal = (valor+iva21+intereses)/9
            preciototal = valor+iva21+intereses
            alert(`Aca esta su plan de pago. quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
            alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
            aceptaononormal()
            break;

        case "12":
            entrada = "12"
            intereses = (valor*13)/100;
            resultadototal = (valor+iva21+intereses)/12
            preciototal = valor+iva21+intereses
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
    document.getElementById('EFECTIVO').innerHTML = `Lista de productos: <br> ${arrayNombresFinal.toString()}<br> valor sin iva ni intereses ${valor}`;
    document.getElementById('CUOTAS').innerHTML = `El plan de pago quedaria en un total de ${preciototal} \nLa cuota quedaria en ${resultadototal} <br> Iva ${iva21} <br> Interes de la cuota ${intereses} <br> El pago se realizara todos los dias 7 de cada mes.`;
}
comercio()




