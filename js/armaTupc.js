// QUERYES SELECTOR
const piezasSelect = document.querySelector('#piezasSelect')
const reset = document.querySelector('#reset')
const informacionPc = document.querySelector('#mainarmadocardInformacion')
const procesadores = document.querySelector('#mainarmadocardProcesador')
const coolers  = document.querySelector('#mainarmadocardCooler')
const motherboards = document.querySelector('#mainarmadocardMother')
const memoriasRams = document.querySelector('#mainarmadocardRams')
const placasdeVideo = document.querySelector('#mainarmadocardGraficas')
const discoPrincipal  = document.querySelector('#mainarmadocardDisk1')
const discoSecundario  = document.querySelector('#mainarmadocardDisk2')
const towerCase  = document.querySelector('#mainarmadocardGabinete')
const powerSupply  = document.querySelector('#mainarmadocardFuente')
//Constructor 
class piezasPc {
    constructor({id, nombre, precio, idB, nombrecorto, marca, imagen, watts}) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.idB = idB
        this.nombrecorto = nombrecorto
        this.marca = marca
        this.imagen = imagen
        this.watts = watts
    }
}

// Array
let arrayArmapc = []
let productos = []
let watts = []
let entrada = []
// llamar DB
const requestURL= "js/armaTupc.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const productosArmaPc = request.response;
    productosArmaPc.map(elm =>{
        crearProductoPc(elm);
        
    })
}
function crearProductoPc(elm){
    arrayArmapc.push(new piezasPc(elm));
    crearPiezas(arrayArmapc)
    armadoDepc(arrayArmapc)
}

function formatearHtml(){
    piezasSelect.innerHTML = ``;
}



// Funciones
// GENERA LOS PRODUCTOS
function crearPiezas(productos){
    piezasSelect.innerHTML = ``;
    formatearHtml(piezasSelect)
    productos.forEach(elm => {
        piezasSelect.innerHTML += `
        <div class="mainArmado__productos">
        <div class="card">
            <div class="card2">
                <div class="cardPr__img" style="background-image: url('${elm.imagen}');"></div>
                    <div class="cardPr__info">
                        <p>${elm.nombrecorto}</p>
                    <p>Precio: $${elm.precio}</p>
                    <div class="boton__añadir">
                        <a id="${elm.idB}" class="" href="">Añadir al carrito</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `
    });


}

// FUNCION DE ARMAR PC
function armadoDepc(){
    // Array Vacio para que no cargue productos
    let arrayVacio = arrayArmapc.filter(e => e.nombre === "")
    crearPiezas(arrayVacio)
    // Selector de marca
    piezasSelect.innerHTML += `<div class="mainArmado__cardselect">
    <a id="intelSelect" href="#"><img src="./imagenes/INTELselect.jpg" alt=""></a>
    <p>Quiero armar mi pc con Intel</p>
    </div>
    <div class="mainArmado__cardselect">
    <a id="amdSelect" href="#"><img src="./imagenes/AMDselect.jpg" alt=""></a>
    <p>Quiero armar mi pc con AMD</p>
    </div>`
    // Queryes de marcas
    const intelSelect = document.querySelector('#intelSelect')
    const amdSelect = document.querySelector('#amdSelect')
   // ARMADO DE PC PARA INTEL
    intelSelect.addEventListener('click', (e) =>{
        e.preventDefault()
        // push para saber que opcion se trata
        entrada.push(1)
        // Remueve y agrega otra clase mas acorde al contenido
        piezasSelect.classList.remove('mainArmado__selects')
        piezasSelect.classList.add('mainArmado__selects2')
        // Crea aside
        procesadores.innerHTML = `
        <div class="mainArmado__cardImg">
                <img src="./imagenes/procesador.png" alt="">
            </div>
            <div class="mainArmado__cardtextos">
                <h4>Procesador</h4>
                <p>Actualmente esta en este paso</p>
            </div>
            `
        // Filtra los procesadores intel
        let procesadoresIntel = arrayArmapc.filter(e => e.idB === "procesadoresIntel")
        // Crea los productos
        crearPiezas(procesadoresIntel)
        // Queye selector para bnts
        const procesadorIntel = document.querySelectorAll('#procesadoresIntel')
        procesadorIntel.forEach(elm => {
            elm.addEventListener('click', (e) =>{
                e.preventDefault()
                // filtra para agregar imagenes al aside
                let pieza1 = e.composedPath()[2].children[0].textContent
                let filtradoPieza = arrayArmapc.filter(e => e.nombrecorto === pieza1)
                // Crea aside
                procesadores.innerHTML = `<div class="mainArmado__cardImg">
                <img src="${filtradoPieza[0].imagen}" alt="">
            </div>
            <div class="mainArmado__cardtextos">
                <h4>${e.composedPath()[2].children[0].textContent}</h4>
                <p>${e.composedPath()[2].children[1].textContent}</p>
            </div>`
            // pushea datos para info de la compra
            productos.push(filtradoPieza[0].precio)
            watts.push(filtradoPieza[0].watts)
            precio()
            cooler()
            })
        })

    })
    // ARMADO DE PC PARA AMD
    amdSelect.addEventListener('click', (e) =>{
        e.preventDefault()
        entrada.push(2, 3)
        // CAMBIO DE CSS PARA EL DIV CONTENEDOR
        piezasSelect.classList.remove('mainArmado__selects')
        piezasSelect.classList.add('mainArmado__selects2')
        // CAMBIO EN CONTENEDOR ASIDE    
        procesadores.innerHTML = ` 
        <div class="mainArmado__cardImg">
                <img src="./imagenes/procesador.png" alt="">
            </div>
            <div class="mainArmado__cardtextos">
                <h4>Procesador</h4>
                <p>Actualmente esta en este paso</p>
            </div>
            `

        let procesadoresAmd = arrayArmapc.filter(e => e.idB === "procesadoresAmd")
        crearPiezas(procesadoresAmd)
        const procesadorIntel = document.querySelectorAll('#procesadoresAmd')
        procesadorIntel.forEach(elm => {
            elm.addEventListener('click', (e) =>{
                e.preventDefault()
                cooler()
                let pieza1 = e.composedPath()[2].children[0].textContent
                let filtradoPieza = arrayArmapc.filter(e => e.nombrecorto === pieza1)
                procesadores.innerHTML = `<div class="mainArmado__cardImg">
                <img src="${filtradoPieza[0].imagen}" alt="">
            </div>
            <div class="mainArmado__cardtextos">
                <h4>${e.composedPath()[2].children[0].textContent}</h4>
                <p>${e.composedPath()[2].children[1].textContent}</p>
            </div>`
       
            productos.push(filtradoPieza[0].precio)
            watts.push(filtradoPieza[0].watts)
            precio()
            })
        })
    })
}
// ARMADO DE PC PARA INTEL
function cooler(){
   // FILTRAMOS LOS COOLES
    let coolerint = arrayArmapc.filter(e => e.idB === "coolerIntel")
// CREAMOS TODOS LOS ITEMS DE COOLERS
    crearPiezas(coolerint)
    // STOCK
    piezasSelect.innerHTML += ` <div class="card">
    <div class="card2">
        <div class="cardPr__img" style="background-image: url('https://hardzone.es/app/uploads-hardzone.es/2019/04/Intel-Stock-cooler-04.jpg');"></div>
            <div class="cardPr__info">
                <p>Ventilacion Stock</p>
                <div class="boton__añadir">
                    <a id="siguiente" class="" href="">Siguiente paso</a>
                </div>
            </div>
             </div>
        </div>
     </div>`
     const siguiente = document.querySelector('#siguiente')
     siguiente.addEventListener('click', (e) => {
         e.preventDefault()
         if(entrada.length === 1){
            mothersdeIntel()
         }else{
            mothersdeamd()
         }
         coolers.innerHTML = `  <div class="mainArmado__cardImg">
         <img src="https://hardzone.es/app/uploads-hardzone.es/2019/04/Intel-Stock-cooler-04.jpg">
         </div>
         <div class="mainArmado__cardtextos">
             <h4>Ventilacion STOCK </h4>
         </div>`
     })
    // ASIDE MODIFICACION
    coolers.innerHTML = `  <div class="mainArmado__cardImg">
    <img src="./imagenes/fan.png" alt="">
    </div>
    <div class="mainArmado__cardtextos">
        <h4>Cooler</h4>
        <p>Actualmente esta en este paso</p>
    </div>`
    const coolersIntel = document.querySelectorAll('#coolerIntel')
    coolersIntel.forEach(elm =>{
        elm.addEventListener('click', (e) =>{
            e.preventDefault()
           

            // PUSHEO PARA SACAR DATOS
            let pieza2 = e.composedPath()[2].children[0].textContent
            let filtradoPieza = arrayArmapc.filter(e => e.nombrecorto === pieza2)
            // CREAMOS HTML ASIDE
            coolers.innerHTML = `  <div class="mainArmado__cardImg">
            <img src="${filtradoPieza[0].imagen}">
            </div>
            <div class="mainArmado__cardtextos">
                <h4>${e.composedPath()[2].children[0].textContent}</h4>
                <p>${e.composedPath()[2].children[1].textContent}</p>
            </div>`

            productos.push(filtradoPieza[0].precio)
            watts.push(filtradoPieza[0].watts)
            precio()
            if(entrada.length === 1){
                   mothersdeIntel()
                }else{
                   mothersdeamd()
                }
        })
    })       
}
// Funcion mother intel
function mothersdeIntel(){
    let motherInt = arrayArmapc.filter(e => e.idB === "mothersIntel")
    crearPiezas(motherInt)
    motherboards.innerHTML = `<div class="mainArmado__cardImg">
    <img src="./imagenes/motherboard.png" alt="">
    </div>
    <div class="mainArmado__cardtextos">
    <h4>Mother</h4>
    <p>Actualmente esta en este paso</p>
    </div>`
    const motherIntel = document.querySelectorAll('#mothersIntel')
    motherIntel.forEach(elm =>{
        elm.addEventListener('click', (e) =>{
            e.preventDefault()
            let pieza3 = e.composedPath()[2].children[0].textContent
            let filtradoPieza = arrayArmapc.filter(e => e.nombrecorto === pieza3)
            motherboards.innerHTML = `<div class="mainArmado__cardImg">
            <img src="${filtradoPieza[0].imagen}" alt="">
        </div>
        <div class="mainArmado__cardtextos">
            <h4>${e.composedPath()[2].children[0].textContent}</h4>
            <p>${e.composedPath()[2].children[1].textContent}</p>
        </div>`

        productos.push(filtradoPieza[0].precio)
        watts.push(filtradoPieza[0].watts)
            ram()
            precio()
        })
    })
}

// ARMADO DE PC PARA AMD
function mothersdeamd(){
    let mothersamd= arrayArmapc.filter(e => e.idB === "mothersAmd")
    crearPiezas(mothersamd)
    motherboards.innerHTML = `<div class="mainArmado__cardImg">
    <img src="./imagenes/motherboard.png" alt="">
    </div>
    <div class="mainArmado__cardtextos">
    <h4>Mother</h4>
    <p>Actualmente esta en este paso</p>
    </div>`
    const mothersAmds = document.querySelectorAll('#mothersAmd')
    mothersAmds.forEach(elm =>{
        elm.addEventListener('click', (e) =>{
            e.preventDefault()
            let pieza3 = e.composedPath()[2].children[0].textContent
            let filtradoPieza = arrayArmapc.filter(e => e.nombrecorto === pieza3)
           
            productos.push(filtradoPieza[0].precio)
            motherboards.innerHTML = `<div class="mainArmado__cardImg">
            <img src="${filtradoPieza[0].imagen}" alt="">
        </div>
        <div class="mainArmado__cardtextos">
            <h4>${e.composedPath()[2].children[0].textContent}</h4>
            <p>${e.composedPath()[2].children[1].textContent}</p>
        </div>`
       
        watts.push(filtradoPieza[0].watts)
            ram()
            precio()
        })
    })
}
// FUNCIN DE RAM
function ram(){
    memoriasRams.innerHTML = `<div class="mainArmado__cardImg">
    <img src="./imagenes/ram.png" alt="">
    </div>
    <div class="mainArmado__cardtextos">
    <h4>Rams</h4>
    <p>Actualmente esta en este paso</p>
    </div>`
    let rams = arrayArmapc.filter(e => e.idB === "rams")
    crearPiezas(rams)
    const ram = document.querySelectorAll('#rams')
    ram.forEach(elm =>{
        elm.addEventListener('click', (e) =>{
            e.preventDefault()
            let pieza4 = e.composedPath()[2].children[0].textContent
            let filtradoPieza = arrayArmapc.filter(e => e.nombrecorto === pieza4)
            memoriasRams.innerHTML = `<div class="mainArmado__cardImg">
            <img src="${filtradoPieza[0].imagen}" alt="">
            </div>
            <div class="mainArmado__cardtextos">
            <h4>${e.composedPath()[2].children[0].textContent}</h4>
            <p>${e.composedPath()[2].children[1].textContent}</p>
            </div>`

            productos.push(filtradoPieza[0].precio)
            watts.push(filtradoPieza[0].watts)
            placasdevideo()
            precio()
        })
    })
}
// funcion de placas de video
function placasdevideo(){
    // Filtrado
    let graficas = arrayArmapc.filter(e => e.idB === "graficas")
    // creacion de items
    crearPiezas(graficas)
    // HTML PARA ELEGIR NADA
    piezasSelect.innerHTML += ` <div class="card">
    <div class="card2">
        <div class="cardPr__img" style="background-image: url('https://images.assetsdelivery.com/compings_v2/blankstock/blankstock1811/blankstock181103766.jpg');"></div>
            <div class="cardPr__info">
                <p>No quiero grafica</p>
                <div class="boton__añadir">
                    <a id="siguiente" class="" href="">Siguiente paso</a>
                </div>
            </div>
             </div>
        </div>
     </div>`
     const siguiente = document.querySelector('#siguiente')
     siguiente.addEventListener('click', (e) => {
         e.preventDefault()
         Discoprincipal()
         placasdeVideo.innerHTML = `  <div class="mainArmado__cardImg">
         <img src="https://images.assetsdelivery.com/compings_v2/blankstock/blankstock1811/blankstock181103766.jpg">
         </div>
         <div class="mainArmado__cardtextos">
             <h4>Sin GRAFICA</h4>
         </div>`
     })

    // HTML PARA ASIDE
    placasdeVideo.innerHTML = `<div class="mainArmado__cardImg">
    <img src="./imagenes/tarjeta-grafica.png" alt="">
    </div>
    <div class="mainArmado__cardtextos">
    <h4>Placa de video</h4>
    <p>Actualmente esta en este paso</p>
    </div>`
    const placas = document.querySelectorAll('#graficas')
    placas.forEach(elm =>{
        elm.addEventListener('click', (e) =>{
            e.preventDefault()
            let pieza5 = e.composedPath()[2].children[0].textContent
            let filtradoPieza = arrayArmapc.filter(e => e.nombrecorto === pieza5)
            placasdeVideo.innerHTML = `<div class="mainArmado__cardImg">
            <img src="${filtradoPieza[0].imagen}" alt="">
            </div>
            <div class="mainArmado__cardtextos">
            <h4>${e.composedPath()[2].children[0].textContent}</h4>
            <p>${e.composedPath()[2].children[1].textContent}</p>
            </div>`

            productos.push(filtradoPieza[0].precio)
            watts.push(filtradoPieza[0].watts)
            Discoprincipal()
            precio()
        })
    })
}
//  Disco principal
function Discoprincipal(){
    discoPrincipal.innerHTML = `<div class="mainArmado__cardImg">
    <img src="./imagenes/discoRigido.png" alt="">
    </div>
    <div class="mainArmado__cardtextos">
    <h4>Disco principal</h4>
    <p>Actualmente esta en este paso</p>
    </div>`
    let disco1 = arrayArmapc.filter(e => e.idB === "almacenamiento")
    crearPiezas(disco1)
    const disco = document.querySelectorAll('#almacenamiento')
    disco.forEach(elm =>{
        elm.addEventListener('click', (e) =>{
            e.preventDefault()
            let pieza6 = e.composedPath()[2].children[0].textContent
            let filtradoPieza = arrayArmapc.filter(e => e.nombrecorto === pieza6)
            discoPrincipal.innerHTML = `<div class="mainArmado__cardImg">
            <img src="${filtradoPieza[0].imagen}" alt="">
            </div>
            <div class="mainArmado__cardtextos">
            <h4>${e.composedPath()[2].children[0].textContent}</h4>
            <p>${e.composedPath()[2].children[1].textContent}</p>
            </div>`

            productos.push(filtradoPieza[0].precio)
            watts.push(filtradoPieza[0].watts)
            Discosecundario()
            precio()
        })
    })
}
// discp secundaria
function Discosecundario(){
    // Crear HTML para aside
    discoSecundario.innerHTML = `<div class="mainArmado__cardImg">
    <img src="./imagenes/discoRigido.png" alt="">
    </div>
    <div class="mainArmado__cardtextos">
    <h4>Disco secundario</h4>
    <p>Actualmente esta en este paso</p>
    </div>`
    // Filtro para productos
    let disco2 = arrayArmapc.filter(e => e.idB === "almacenamiento")
    crearPiezas(disco2)
    
        // HTML PARA ELEGIR NADA
        piezasSelect.innerHTML += ` <div class="card">
        <div class="card2">
            <div class="cardPr__img" style="background-image: url('https://previews.123rf.com/images/blankstock/blankstock1903/blankstock190301593/118083216-no-or-stop-sign-hdd-icon-hard-disk-storage-sign-hard-drive-memory-symbol-caution-prohibited-ban-stop.jpg');"></div>
                <div class="cardPr__info">
                    <p>No quiero disco Secundario</p>
                    <div class="boton__añadir">
                        <a id="siguiente" class="" href="">Siguiente paso</a>
                    </div>
                </div>
                 </div>
            </div>
         </div>`
         const siguiente = document.querySelector('#siguiente')
         siguiente.addEventListener('click', (e) => {
             e.preventDefault()
             gabinetes()
             discoSecundario.innerHTML = `  <div class="mainArmado__cardImg">
             <img src="https://previews.123rf.com/images/blankstock/blankstock1903/blankstock190301593/118083216-no-or-stop-sign-hdd-icon-hard-disk-storage-sign-hard-drive-memory-symbol-caution-prohibited-ban-stop.jpg">
             </div>
             <div class="mainArmado__cardtextos">
                 <h4>Sin DISCO SECUNDARIO</h4>
             </div>`
         })
    const disco = document.querySelectorAll('#almacenamiento')
    disco.forEach(elm =>{
        elm.addEventListener('click', (e) =>{
            e.preventDefault()
            let pieza7 = e.composedPath()[2].children[0].textContent
            let filtradoPieza = arrayArmapc.filter(e => e.nombrecorto === pieza7)
            discoSecundario.innerHTML = `<div class="mainArmado__cardImg">
            <img src="${filtradoPieza[0].imagen}" alt="">
            </div>
            <div class="mainArmado__cardtextos">
            <h4>${e.composedPath()[2].children[0].textContent}</h4>
            <p>${e.composedPath()[2].children[1].textContent}</p>
            </div>`

            productos.push(filtradoPieza[0].precio)
            watts.push(filtradoPieza[0].watts)
            gabinetes()
            precio()
        })
    })
}
// gabienetes
function gabinetes(){
    towerCase.innerHTML = `<div class="mainArmado__cardImg">
    <img src="./imagenes/cpu-tower.png" alt="">
    </div>
    <div class="mainArmado__cardtextos">
    <h4>Gabinete</h4>
    <p>Actualmente esta en este paso</p>
    </div>`
    let gabinete = arrayArmapc.filter(e => e.idB === "gabinetes")
    crearPiezas(gabinete)
    const gabinetes = document.querySelectorAll('#gabinetes')
    gabinetes.forEach(elm =>{
        elm.addEventListener('click', (e) =>{
            e.preventDefault()
            let pieza8 = e.composedPath()[2].children[0].textContent
            let filtradoPieza = arrayArmapc.filter(e => e.nombrecorto === pieza8)
            towerCase.innerHTML = `<div class="mainArmado__cardImg">
        <img src="${filtradoPieza[0].imagen}" alt="">
        </div>
        <div class="mainArmado__cardtextos">
        <h4>${e.composedPath()[2].children[0].textContent}</h4>
        <p>${e.composedPath()[2].children[1].textContent}</p>
        </div>`

        productos.push(filtradoPieza[0].precio)
        watts.push(filtradoPieza[0].watts)
            fuente()
            precio()
        })
    })
}
// Fuente
function fuente(){
    powerSupply.innerHTML = `<div class="mainArmado__cardImg">
    <img src="./imagenes/fuente.png" alt="">
    </div>
    <div class="mainArmado__cardtextos">
    <h4>Fuente</h4>
    <p>Actualmente esta en este paso</p>
    </div>`
    let fuente = arrayArmapc.filter(e => e.idB === "fuentes")
    crearPiezas(fuente)
    const fuentes = document.querySelectorAll('#fuentes')
    fuentes.forEach(elm =>{
        elm.addEventListener('click', (e) =>{
            e.preventDefault()
            let pieza9 = e.composedPath()[2].children[0].textContent
            let filtradoPieza = arrayArmapc.filter(e => e.nombrecorto === pieza9)
            powerSupply.innerHTML = `<div class="mainArmado__cardImg">
            <img src="${filtradoPieza[0].imagen}" alt="">
            </div>
            <div class="mainArmado__cardtextos">
            <h4>${e.composedPath()[2].children[0].textContent}</h4>
            <p>${e.composedPath()[2].children[1].textContent}</p>
            </div>`

            productos.push(filtradoPieza[0].precio)
            watts.push(filtradoPieza[0].watts)
            precio()
            terminarCompra()
        })
    })
}
// GENERA EL PRECIO AUTOMATICO
function precio(){
            let totalPC = productos.reduce((a, b) => a + b, 0);
            let totalWatts = watts.reduce((a, b) => a + b, 0);
            let iva = (totalPC*21)/100;
            let intereses = (totalPC*13)/100;
            let resultadototal = (totalPC+iva+intereses)/12
            
            mainarmadocardInformacion.innerHTML = `
            <p>Total: $${totalPC}</p>
            <p>12 cuotas de: $${Math.floor(resultadototal) }</p>
            <p>Watts Estimados de consumo: ${totalWatts}</p>
            <p class="no-view">${totalPC}</p>
            `
}
// FUNCION PARA GENERAR HTML FINAL
function terminarCompra(totalPC){
    piezasSelect.classList.add('mainArmado__selects')
        piezasSelect.classList.remove('mainArmado__selects2')
    piezasSelect.innerHTML = `
    <div class="finalizar__compra">
    <p> ¿Quieres terminar la compra? </p>
    <p> Tenemos una oferta en efectivo del 15%, tambien tenemos cuotas con tajerta de credito</p>
        <div class="finalizar__botones">
        <a id="btnVolveralmenu" href="./index.html">Volver al inicio</a>
        <a id="btnRehacerpc" href="">Volver a rehacer la pc</a>
        <a id="btnTerminarCompra" href="./finalizaciondecompra.html">Terminar compra</a>
        </div>
    </div>   
    `
    const btnRehacerpc = document.querySelector('#btnRehacerpc')
    const btnTerminarCompra = document.querySelector('#btnTerminarCompra')

    btnRehacerpc.addEventListener('click', (e) =>{
        e.preventDefault()
        productos = []
        watts = []
        entrada = []
        armadoDepc()
    })
    btnTerminarCompra.addEventListener('click', (e) =>{
        let totalFinal = parseInt(e.composedPath()[4].children[0].children[0].children[3].textContent)
        sessionStorage.setItem('totalFinal', totalFinal)
        sessionStorage.setItem('precioFinal', -1)
    })
}
