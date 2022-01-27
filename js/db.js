let arrayValor = []
let arrayNombreDuplicados = []
let arrayNombresFinal = []
let vecesCompradas = 1
let cantidadComprada = []
let pcCarritoValor = []
let pcCaritoNombre = []
let suma


class productos {
    constructor(nombre, precio, cantidad, id, nombrecorto, marca, descripcion) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.precioTOTAL
        this.id = id
        this.nombrecorto = nombrecorto
        this.marca = marca
        this.descripcion = descripcion
        this.carrito = []
    }
    armadopc(){
        let resultadototalPC = this.precio
        pcCarritoValor.push(resultadototalPC) 
        let totalPC = pcCarritoValor.reduce((a, b) => a + b, 0);
        suma = totalPC
      
        let nombres = this.nombre
        pcCaritoNombre.push(nombres) 
    }
    stock(countNumber){
        if(countNumber <= this.cantidad){
            this.cantidad = this.cantidad - countNumber
            let cantidad = countNumber
            let multiplicacion = cantidad*this.precio
            arrayValor.push(multiplicacion)
            let total = arrayValor.reduce((a, b) => a + b, 0)
            suma = total

        }
    }
  
}





let productosArray = []


// Mouses
productosArray.push (new productos("Mouse Logitech G305", 1400, 4, "mouse", "Mouse Logitech G305", "logitech", " Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos."))
productosArray.push (new productos("Mouse Redragon Storm Elite M988", 1100, 2, "mouse", "Mouse Redragon Storm Elite M988", "redragon", "DESCRIPCION DE PRUEBA2"))
productosArray.push (new productos("Mouse Logitech MX Anywhere 3", 1300, 1, "mouse", "Mouse Logitech MX Anywhere 3", "logitech"))

const mouse = productosArray.filter(id => id.id === "mouse")

// Teclado 
productosArray.push  (new productos("Teclado Razer Huntsman Tournament", 5000, 3, "teclados", "Teclado Razer Huntsman", "razer"))
productosArray.push  (new productos("Teclado HyperX Alloy Elite 2", 4000, 3, "teclados", "Teclado HyperX Alloy Elite 2", "hiperex"))
productosArray.push  (new productos("Teclado Redragon Draconic K530", 3500, 1, "teclados", "Teclado Redragon Draconic K530", "redragon"))

const teclados = productosArray.filter(id => id.id === "teclados")

// auriculares 
productosArray.push (new productos("Auriculares inalámbricos HyperX Cloud Flight", 7000, 1, "auriculares", "Auriculares HyperX Cloud Flight", "hiperex"))
productosArray.push (new productos("Auriculares gamer HyperX Cloud Stinger S", 5000, 2, "auriculares", "Auriculares HyperX Stinger S", "hiperex"))
productosArray.push (new productos("Auriculares gamer Logitech G Series G433", 4500, 3, "auriculares", "Auriculares Logitech G G433", "logitech"))

const auriculares = productosArray.filter(id => id.id === "auriculares")

// Combos PC 
productosArray.push (new productos("Combo Actualizacion Amd Ryzen 5 3600 + A320 + 8gb", 22000, 2, "combopc", "Combo Ryzen 5 3600 +A320+8gb", "amd"))
productosArray.push (new productos("Combo De Actualizacion Biostar A68mhe + Amd A6 7480 + 8 Gb", 20000, 1, "combopc", "Combo A68mhe + A6 7480 + 8Gb", "amd"))
productosArray.push (new productos("Combo Actualizacion Amd Ryzen 5 5600G + A320 + 8gb", 30000,3, "combopc", "Combo Ryzen 5 5600G+A320+8gb", "amd"))

const combopc = productosArray.filter(id => id.id === "combopc")

// Consolas 
productosArray.push (new productos("Xbox Series X 1TB", 110000, 2, "consolas", "Xbox Series X 1TB", "microsoft"))
productosArray.push (new productos("Xbox Series S 512GB", 110000, 2, "consolas", "Xbox Series S 512GB", "microsoft"))
productosArray.push (new productos("Sony PlayStation 5 825GB", 90000, 1, "consolas", "Sony PlayStation 5 825GB", "sony"))


const consolas = productosArray.filter(id => id.id === "consolas")

// AMD
// procesadores
productosArray.push (new productos("Ryzen 5600G", 7000, 1, "procesadores", "Ryzen 5600G", "amd"))
productosArray.push (new productos("Ryzen 7 5700G", 8000, 2, "procesadores", "Ryzen 7 5700G", "amd"))
productosArray.push (new productos("Ryzen 9 5950X", 10000, 5, "procesadores", "Ryzen 9 5950X", "amd"))

// Mother
productosArray.push (new productos("Gygabyte GA-A320M-H", 5000, 3, "mothers", "Gygabyte GA-A320M-H", "gigabyte"))
productosArray.push (new productos("Asus prime B450M-A II", 5500, 2, "mothers", "Asus prime B450M-A II", "asus"))
productosArray.push (new productos("Asus TUF B450M-Plus II", 6500, 5, "mothers", "Asus TUF B450M-Plus II", "asus"))
const mothersAmd = productosArray.filter(id => id.id === "mothers1")

// INTEL
// procesadores
productosArray.push (new productos("Core i3-10100F", 3000, 2, "procesadores", "Core i3-10100F", "intel"))
productosArray.push (new productos("Core I5-10400F", 5000, 5, "procesadores", "Core I5-10400F", "intel"))
productosArray.push (new productos("Core i9-10900K", 10000, 2, "procesadores", "Core i9-10900K", "intel"))


// Mother
productosArray.push (new productos("Asus prime B460m-a", 2000, 3, "mothers", "Asus prime B460m-a", "asus"))
productosArray.push (new productos("Gigabyte h410m H V3", 4000, 2, "mothers", "Gigabyte h410m H V3", "gigabyte"))
productosArray.push (new productos("Asus prime h510 M-e", 6000, 1, "mothers", "Asus prime h510 M-e", "asus"))
const mothersIntel = productosArray.filter(id => id.id === "mothers2")
// GeneralesPC

// Memorias ram 
productosArray.push (new productos("Memoria RAM Fury DDR4 8GB 2666mhz", 600, 1, "memoria", "RAM Fury DDR4 8GB 2666mhz", "fury"))
productosArray.push (new productos("Memoria RAM Fury DDR4 16GB 2133mhz", 1200, 2, "memoria", "RAM Fury DDR4 16GB 2133mhz", "fury"))
productosArray.push (new productos("x2 Memoria RAM Fury DDR4 8GB 2133mhz", 1100,1, "memoria", "x2 RAM Fury DDR4 8GB 2133mhz", "fury"))

const memoriasRAM = productosArray.filter(id => id.id === "memoria")

// Placas videos 
productosArray.push (new productos("GTX 1050TI MSI", 60000, 2, "graficas", "GTX 1050TI MSI", "msi"))
productosArray.push (new productos("MSI VENTUS RTX 2060 SUPER", 200000, 1, "graficas", "MSI VENTUS RTX 2060 SUPER", "msi"))
productosArray.push (new productos("MSI VENTUS RTX 3090", 300000, 3, "graficas", "MSI VENTUS RTX 3090", "msi"))

const graficas = productosArray.filter(id => id.id === "graficas")
// Almacenamiento
productosArray.push (new productos("SSD Kingston de 512GB", 1000, 2, "almacenamiento", "SSD Kingston de 512GB", "kingston"))
productosArray.push (new productos("Disco rigido Western Digital 1TB 7200RPM", 2000, 2, "almacenamiento", "Disco rigido Western Digital 1TB", "westernDigital"))
productosArray.push (new productos("Disco solido Samsung 870 1tb", 32000,1, "almacenamiento","Disco solido Samsung 870 1tb", "samsung"))

const almacenamiento = productosArray.filter(id => id.id === "almacenamiento")

// Gabinetes
productosArray.push (new productos("Gabinete gamemax h601", 1200, 2, "gabinetes","Gabinete gamemax h601", "gamemax"))
productosArray.push (new productos("Gabinete SYX Fearless ATX", 2000, 2, "gabinetes", "Gabinete SYX Fearless ATX", "syx"))
productosArray.push (new productos("Gabinete Aerocool MECHA TG 1", 3200,1, "gabinetes", "Gabinete Aerocool MECHA TG 1", "aerocool"))

const gabinetes = productosArray.filter(id => id.id === "gabinetes")

// Fuentes
productosArray.push (new productos("Fuente Gigabyte 750w 80 plus bronce", 2200, 2, "fuentes", "Fuente Gigabyte 750w 80+ bronce", "gigabyte"))
productosArray.push (new productos("Fuente Asus ROG Thor 850w 80 plus platinum", 5000, 2, "fuentes", "Fuente Asus 850w 80+ platinum", "asus"))
productosArray.push (new productos("Fuente Seasonic 1000w Focus PLus Gold", 5500, 1, "fuentes", "Fuente Seasonic 1000w PLus Gold", "seasonic"))

const fuentes = productosArray.filter(id => id.id === "fuentes")



// netbooks 
class netbooksProductos {
    constructor(nombre, precio, cantidad, procesador, ram, almacenamiento, almacenamiento1, id, nombrecorto ) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.procesador = procesador
        this.ram = ram
        this.almacenamiento = almacenamiento
        this.almacenamiento1 = almacenamiento1 
        this.id = id
        this.nombrecorto = nombrecorto
    }
    stock(countNumber){
        if(countNumber <= this.cantidad){
            this.cantidad = this.cantidad - countNumber
            let cantidad = countNumber
            let multiplicacion = cantidad*this.precio
            arrayValor.push(multiplicacion)
            let total = arrayValor.reduce((a, b) => a + b, 0)
            suma = total
            
        }
    }
    
}
productosArray.push (new netbooksProductos("Netbook HP", 30000, 2, "Procesador: i5-10210U", "Ram: 8GB", "SSD: 256GB", "", "netbooks", "Netbook HP"))
productosArray.push (new netbooksProductos("Netbook Lenovo", 40000, 5, "Procesador: i7-10510U", "Ram: 8GB", "SSD: 512GB", "", "netbooks", "Netbook Lenovo"))
productosArray.push (new netbooksProductos("Netbook Asus", 60000, 1, "Procesador: i7-1065G7", "Ram: 8GB",  "SSD: 512GB", "HDD: 1TB", "netbooks", "Netbook Asus"))




const btnCancelarcompra = document.querySelector('#btnCancelar')
const btnAgregarcompra = document.querySelector('#btnFinalizar')
const agregarPrcarrito = document.querySelector('#appendParacarrito')
const cantidadProductos = document.querySelector('#cantidadProductos')

// EVENTOS
function eventos (){
// QUERY SELECTOR
const btnCarrito = document.querySelector('.productos__carritolink')
const backgroundCarrito = document.querySelector('#carrito')
const btnContinuar = document.querySelector('#btnContinuar')
const popup = document.querySelector('#pop-up')
popup.parentNode
const boton = document.querySelectorAll('a[class = "btnInformacion"]')
const botoncerrar = document.querySelector('.btn-popup')
const btnAñadir = document.querySelectorAll('#btnAñadir')
const backgroundCompra = document.querySelector('#backgroundPopupcompra')
const popUpcompra = document.querySelector('#pop-upDatos')
const contador = document.querySelector('#spinner')
const btnCancelarcompra = document.querySelector('#btnCancelar')
const btnAgregarcompra = document.querySelector('#btnFinalizar')
const agregarPrcarrito = document.querySelector('#appendParacarrito')
btnCarrito.addEventListener('click', (e) =>{
    e.preventDefault()
    backgroundCarrito.classList.remove('backgroundpopup-show')
})
btnContinuar.addEventListener('click', (e) => {
    e.preventDefault()
    
    backgroundCarrito.classList.add('backgroundpopup-show')
 })
      
//boton mas informacion





    const h4Title = document.createElement('h4')
    const parrafoPro = document.createElement('p')
    boton.forEach(e => {
       
        e.addEventListener('click', (e) => {
            e.preventDefault()
            
            let path = e.path[1].children[0].textContent
            let pathDescripcion = e.path[4].children[2].textContent
            console.log(path)
            h4Title.innerText =""
            h4Title.textContent = path 
            h4Title.classList.add('subrayado')
            parrafoPro.textContent = pathDescripcion
            popup.prepend(parrafoPro)
            popup.prepend(h4Title)
            popup.parentNode.classList.remove('backgroundpopup-show')
        })
      
    })

botoncerrar.addEventListener('click', (e) => {
    e.preventDefault()
    h4Title.remove()
    parrafoPro.remove()
    popup.parentNode.classList.add('backgroundpopup-show')
    })

// Boton añadir al carrito
btnAñadir.forEach(elm => {
    elm.addEventListener('click', (e) => {
        e.preventDefault()
        backgroundCompra.classList.remove('backgroundpopup-show')
        // BUSQUEDAS DE DATOS POR PATH
        let path = e.path[2].children[1].children[0].textContent
        let pathCantidad = e.path[4].children[4].textContent
        let pathPrecio = e.path[4].children[3].textContent
        let nombreProducto = document.createElement('h4')
        nombreProducto.textContent = `Nombre: ${path}`
        let precioProducto = document.createElement('p')
        precioProducto.textContent = `$${pathPrecio}`
        let cantidadProducto = document.createElement('p')
                // CANTIDAD DEL SPINNER ACTUAL
                let pathCantidadspinner = productosArray.filter(nombre => nombre.nombrecorto === path)
        cantidadProducto.textContent = `Cantidad disponible: ${pathCantidadspinner[0].cantidad}` 
        // Tarjeta de añadir al carrito DOM
        cantidadProductos.appendChild(cantidadProducto)
        popUpcompra.prepend(precioProducto)
        popUpcompra.prepend(nombreProducto)
        // DATOS PARA TOMAR NO VIEW
        let nombreProductonv = document.createElement('p')
        let precioProductonv = document.createElement('p')
        let cantidadProductonv = document.createElement('p')
        nombreProductonv.textContent = path
        precioProductonv.textContent = pathPrecio
        cantidadProductonv.textContent = pathCantidad
        nombreProductonv.classList.add('no-view')
        precioProductonv.classList.add('no-view')
        cantidadProductonv.classList.add('no-view')
        // PREPENT PARA DATOS NO VIEW
        popUpcompra.prepend(nombreProductonv)
        popUpcompra.prepend(precioProductonv)
        popUpcompra.prepend(cantidadProductonv)


        // INYECTAMOS HTML DE CONTADOR
        contador.innerHTML = `
        <div class="container">
                                <span id="next" class="next"></span>
                                <span id="prev" class="prev"></span>
                                <div id="box"></div>
        `
        // LOGICA DEL CONTADOR
        let numbers = document.querySelector('#box');
        for(i=0;i<=pathCantidadspinner[0].cantidad;i++){
            let span = document.createElement('span');
            span.textContent = i;
            numbers.appendChild(span);
        }
        let num = numbers.getElementsByTagName('span');
        let index = 0;
      
           const nextSpinner = document.querySelector('#next')
           const prevSpinner = document.querySelector('#prev')
           nextSpinner.addEventListener('click', (e) => {
               e.preventDefault()
               num[index].style.display = 'none';
               index=(index + 1) % num.length;
               num[index].style.display = 'initial';
           })
           prevSpinner.addEventListener('click', (e) => {
               e.preventDefault()
               num[index].style.display = 'none';
               index=(index - 1 + num.length) % num.length;
               num[index].style.display = 'initial';
           })
        // CANCELAR LA COMPRA BOTON 
        btnCancelarcompra.addEventListener('click', (e) => {
            e.preventDefault()
            nombreProducto.remove()
            precioProducto.remove()
            box.innerHTML = ""
            cantidadProducto.remove()
            
            backgroundCompra.classList.add('backgroundpopup-show')
            })
    })
   
})
}

let carritoFinal = []

btnAgregarcompra.addEventListener('click', (e) =>{
    
    let pathNombre = e.path[2].children[0].children[2].textContent
    let pathPrecio = e.path[2].children[0].children[1].textContent
    let pathcount = e.path[2].children[2].children[0].innerText
    let countNumber = parseInt(pathcount)
    let precioNumber = parseInt(pathPrecio)
    let prueba = productosArray.filter(nombre => nombre.nombrecorto === pathNombre)
    prueba[0].stock(countNumber)
    console.log(prueba)

    // pruebas(countNumber, precioNumber, suma)
    agregarPrcarrito.innerHTML += `
    <div class="items__productos" id="itemsCarrito">
    <p>${pathNombre}</p>
    <p>$${pathPrecio}</p>
    <p>Cantidad: ${pathcount}</p>
    <p>Total: $${suma}</p>
   <a href="#"><img src="/imagenes/delete-button.png" width="25px" alt=""></a>
    </div>
    `
})

// limpiar html

function limpiarHTML(){
    document.getElementById('productos').innerHTML = ``;
}


// generar DOM de productos
const updateElements = (productos)=>{
    const container = document.getElementById('productos');
    
    limpiarHTML(container);
    //Por cada elemento pasado se agrega a container el siguiente codigo HTML
    productos.forEach(elm =>{ 
        const div1 = document.createElement('div')
        div1.classList.add('productos')
    
        const span1 = document.createElement('span')
        span1.classList.add('producto__imagen')
    
        const span2 = document.createElement('span')
        span2.classList.add('producto__background')
    
        const span3 = document.createElement ('span')
        span3.classList.add('productos__contenido')
        
        const img1 = document.createElement ('img')
        img1.src  = './imagenes/background.png'
        img1.classList.add('productos__backgroundB')
    
        const div2 = document.createElement ('div')
        div2.classList.add('texto__producto')

        const h41 = document.createElement('h4')
        h41.textContent = `${elm.nombrecorto}`

        const div3 = document.createElement('div')
        div3.classList.add('linea')

        const p1 = document.createElement('p')
        p1.textContent = `Valor: $${elm.precio}`

        const a1 = document.createElement('a')
        a1.classList.add('btnInformacion')
        a1.href = "#"
        a1.textContent = `Mas informacion`

        const span4 = document.createElement('span')
        span4.classList.add('boton__añadir')

        const a2 = document.createElement('a')
        a2.id = 'btnAñadir'
        a2.href = "#"
        a2.textContent = `Añadir al carrito`

        const descripcion = document.createElement('p')
        descripcion.textContent = `${elm.descripcion}`
        descripcion.classList.add('no-view')
        const precioItem = document.createElement('p')
        precioItem.textContent = `${elm.precio}`
        precioItem.classList.add('no-view')
        const cantidadItem = document.createElement('p')
        cantidadItem.textContent = `${elm.cantidad}`
        cantidadItem.classList.add('no-view')
        const nombreItem = document.createElement('p')
        nombreItem.textContent = `${elm.nombre}`
        nombreItem.classList.add('no-view')

        container.appendChild(div1 );
        div1.appendChild(span1)
        div1.appendChild(span2)
        div1.append(descripcion)
        div1.append(precioItem)
        div1.append(cantidadItem)
        div1.append(nombreItem)
        span2.appendChild(span3)
        span3.appendChild(img1)
        span3.appendChild(div2)
        div2.appendChild(h41)
        div2.appendChild(div3)
        div2.appendChild(p1)
        div2.appendChild(a1)
        span3.appendChild(span4)
        span4.appendChild(a2)
        
    })
    eventos ()
}

    const updatePage = ( elements, page, elementsPerPage)=>
    {
        const firstElement = (page * elementsPerPage) - elementsPerPage;
        const lastElement = page * elementsPerPage;
        return elements.slice(firstElement, lastElement);
    }
    
    let focusElements = [...productosArray];
    const btnsNav = document.querySelector('#barra__cambio').children;
    let ActualPage = 1;
    let lastPage = Math.round(focusElements.length/6);
    updateElements(updatePage(focusElements, 1, 6));
    btnsNav[1].innerText = `${ActualPage} - ${lastPage}`;
    btnsNav[0].onclick = ()=>
    {
        if(ActualPage > 1)
        {
            ActualPage--;
            updateElements(updatePage(focusElements, ActualPage, 6));
            btnsNav[1].innerText = `${ActualPage} - ${lastPage}`
        }
    }
    btnsNav[2].onclick = ()=>
    {
        if(ActualPage < lastPage)
        {
            ActualPage++
            updateElements(updatePage(focusElements, ActualPage, 6));
            btnsNav[1].innerText = `${ActualPage} - ${lastPage}`
        }
    }


//filtrado aside
// Netbooks
const netbooksFilter = document.querySelector('#netbooksAside')
const netbooks = productosArray.filter(id => id.id === "netbooks")
netbooksFilter.textContent = `Netbooks(${netbooks.length})`
netbooksFilter.addEventListener('click', (e) =>{
    e.preventDefault()
    updateElements(netbooks)
})
// Procesadores
const procesadoresFilter = document.querySelector('#procesadoresAside')
const procesadores = productosArray.filter(id => id.id === "procesadores")
procesadoresFilter.textContent = `Procesadores(${procesadores.length})`
procesadoresFilter.addEventListener('click', (e) =>{
    e.preventDefault()
    updateElements(procesadores)
})
// Mothers
const motherFilter = document.querySelector('#mothersAside')
const mother = productosArray.filter(id => id.id === "mothers")
motherFilter.textContent = `Mother(${mother.length})`
motherFilter.addEventListener('click', (e) =>{
    e.preventDefault()
    updateElements(mother)
})
// Rams
const ramsFilter = document.querySelector('#ramsAside')
const rams = productosArray.filter(id => id.id === "memoria")
ramsFilter.textContent = `Rams(${rams.length})`
ramsFilter.addEventListener('click', (e) =>{
    e.preventDefault()
    updateElements(rams)
})
// Graficas
const graficasFilter = document.querySelector('#graficasAside')
const graficasfil = productosArray.filter(id => id.id === "graficas")
graficasFilter.textContent = `Graficas(${graficas.length})`
graficasFilter.addEventListener('click', (e) =>{
    e.preventDefault()
    updateElements(graficasfil)
})
// almacenamiento
const almacenamientoFilter = document.querySelector('#almacenamientoAside')
almacenamientoFilter.textContent = `Almacenamiento(${almacenamiento.length})`
almacenamientoFilter.addEventListener('click', (e) =>{
    e.preventDefault()
    updateElements(almacenamiento)
})
// fuentes
const fuentesFilter = document.querySelector('#fuentesAside')
fuentesFilter.textContent = `Fuentes(${fuentes.length})`
fuentesFilter.addEventListener('click', (e) =>{
    e.preventDefault()
    updateElements(fuentes)
})
// mouse
const mousesFilter = document.querySelector('#mousesAside')
mousesFilter.textContent = `Mouses(${mouse.length})`
mousesFilter.addEventListener('click', (e) =>{
    e.preventDefault()
    updateElements(mouse)
})
// teclados
const tecladosFilter = document.querySelector('#tecladosAside')
tecladosFilter.textContent = `Teclados(${teclados.length})`
tecladosFilter.addEventListener('click', (e) =>{
    e.preventDefault()
    updateElements(teclados)
})
// auriculares
const auricularesFilter = document.querySelector('#auricularesAside')
auricularesFilter.textContent = `auriculares(${auriculares.length})`
auricularesFilter.addEventListener('click', (e) =>{
    e.preventDefault()
    updateElements(auriculares)
})
// sony
const sonyFilter = document.querySelector('#sonyAside')
const sony = productosArray.filter(marca => marca.marca === "sony")
sonyFilter.textContent = `sony(${sony.length})`
sonyFilter.addEventListener('click', (e) =>{
    e.preventDefault()
    updateElements(sony)
})
// microsoft
const microsoftFilter = document.querySelector('#microsoftAside')
const microsoft = productosArray.filter(marca => marca.marca === "microsoft")
microsoftFilter.textContent = `Microsoft(${microsoft.length})`
microsoftFilter.addEventListener('click', (e) =>{
    e.preventDefault()
    updateElements(microsoft)
})
// Filtrado inputs

filtrado = {
    marca: '',
    precioMin: '',
    precioMax: ''
}
const marcaFiltro = document.getElementById('marca');
marcaFiltro.addEventListener('click', (e) => {
    filtrado.marca = e.target.value 
    filtradoMarcas()
})
const filtrarMin = document.getElementById('minimo');
filtrarMin.addEventListener('click', (e) => {
    filtrado.precioMin = Number(e.target.value) 
    filtradoMarcas()
    
})
const filtrarMax = document.getElementById('maximo');
filtrarMax.addEventListener('click', (e) => {
    filtrado.precioMax = Number(e.target.value) 
    filtradoMarcas()
    
})

function filtradoMarcas(){
    let resultado = productosArray.filter(marca).filter(precioMin).filter(precioMax)
    updateElements(resultado)
    
}

function marca(productos){
    if(filtrado.marca){
    return productos.marca === filtrado.marca
    }else {
    return productos
    }
}
function precioMin(productos){
    if(filtrado.precioMin){
    return productos.precio >= filtrado.precioMin
    }else {
        return productos
    }
}
function precioMax(productos){
    if(filtrado.precioMax){
    return productos.precio <= filtrado.precioMax
    }else {
        return productos
    }
}

