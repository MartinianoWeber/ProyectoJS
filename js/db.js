let arrayValor = []
let arrayNombreDuplicados = []
let arrayNombresFinal = []
let vecesCompradas = 1
let cantidadComprada = []
let pcCarritoValor = []
let pcCaritoNombre = []

let suma


class productos {
    constructor(nombre, precio, cantidad, id, nombrecorto, marca) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.precioTOTAL
        this.id = id
        this.nombrecorto = nombrecorto
        this.marca = marca
    }
    armadopc(){
        let resultadototalPC = this.precio
        pcCarritoValor.push(resultadototalPC) 
        let totalPC = pcCarritoValor.reduce((a, b) => a + b, 0);
        suma = totalPC
        sumapr()
        let nombres = this.nombre
        pcCaritoNombre.push(nombres) 
    }
    stock(){
        alert(`${this.nombre} Tiene un precio de ${this.precio}`)
        let stockPrompt = parseInt(prompt("Por favor ingrese la cantidad que desea comprar"))
        if(stockPrompt <= this.cantidad){
            alert(`Muy bien te llevaras ${stockPrompt}`)
            let resultado =  this.cantidad - stockPrompt
            this.cantidad = resultado
                let precios = stockPrompt 
                let resultadototal = precios*this.precio
                arrayValor.push(resultadototal) 
                let total = arrayValor.reduce((a, b) => a + b, 0);
                suma = total
                sumapr()
                let nombres = this.nombre
                arrayNombreDuplicados.push(nombres) 
                arrayNombresFinal = [...new Set(arrayNombreDuplicados)];
                console.log(total)
                console.log(arrayNombresFinal);
                
    }else {
        alert("La cantidad que desea llevar no esta disponible ")
        }
    }

}

function sumapr(){
    suma
}

let productosArray = []

let slice = []

productosArray.forEach(item => {
    item.stock()
    item.armadopc()
    item.prueba()
});


// Mouses
productosArray.push (new productos("Mouse Logitech G305", 1400, 4, "mouse", "Mouse Logitech G305", "logitech"))
productosArray.push (new productos("Mouse Redragon Storm Elite M988", 1100, 2, "mouse", "Mouse Redragon Storm Elite M988", "redragon"))
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
    stock(){
        alert(`${this.nombre}, ${this.procesador}, ${this.ram}, ${this.almacenamiento}Tiene un precio de ${this.precio}`)
        let stockPrompt = parseInt(prompt("Por favor ingrese la cantidad que desea comprar"))
        if(stockPrompt <= this.cantidad){
            alert(`Muy bien te llevaras ${stockPrompt}`)
            let resultado =  this.cantidad - stockPrompt
            this.cantidad = resultado
                let precios = stockPrompt 
                let resultadototal = precios*this.precio
                arrayValor.push(resultadototal) 
                let total = arrayValor.reduce((a, b) => a + b, 0);
                this.precioTOTAL = total
                let nombres = this.nombre
                arrayNombreDuplicados.push(nombres) 
                arrayNombresFinal = [...new Set(arrayNombreDuplicados)];
                console.log(total)
                console.log(arrayNombresFinal);
                
        }
    }
    
}
productosArray.push (new netbooksProductos("Netbook HP", 30000, 2, "Procesador: i5-10210U", "Ram: 8GB", "SSD: 256GB", "", "netbooks", "Netbook HP"))
productosArray.push (new netbooksProductos("Netbook Lenovo", 40000, 5, "Procesador: i7-10510U", "Ram: 8GB", "SSD: 512GB", "", "netbooks", "Netbook Lenovo"))
productosArray.push (new netbooksProductos("Netbook Asus", 60000, 1, "Procesador: i7-1065G7", "Ram: 8GB",  "SSD: 512GB", "HDD: 1TB", "netbooks", "Netbook Asus"))





// EVENTOS
function eventos (){
// Boton de carrito
const btnCarrito = document.querySelector('.productos__carritolink')
const backgroundCarrito = document.querySelector('#carrito')
const btnContinuar = document.querySelector('#btnContinuar')

btnCarrito.addEventListener('click', (e) =>{
    e.preventDefault()
    backgroundCarrito.classList.remove('background__no-show')
})
btnContinuar.addEventListener('click', (e) => {
    e.preventDefault()
    backgroundCarrito.classList.add('background__no-show')
 })
      
//boton mas informacion
const boton = document.querySelectorAll('a[class = "btnInformacion"]')
const popup = document.querySelector('#pop-up')
popup.parentNode
const productosPadre = document.querySelector('#productos')


const h4Title = document.createElement('h4')
const parrafoPro = document.createElement('p')
productosPadre.addEventListener('click', (e) => {
    let path =  e.path[1].children[0].textContent
    h4Title.innerText =""
    h4Title.textContent = path 
    h4Title.classList.add('subrayado')
    parrafoPro.textContent = "Descricion"
    popup.prepend(parrafoPro)
    popup.prepend(h4Title)
   if(e.path[1].children[0]){
       return
   }


})



boton.forEach(btnAbrir => {
    btnAbrir.addEventListener('click', (e) => {
        e.preventDefault()
        popup.parentNode.classList.remove('backgroundpopup-show')
        console.log(btnAbrir)
        
    })
});

const botoncerrar = document.querySelector('.btn-popup')


botoncerrar.addEventListener('click', (e) => {
    e.preventDefault()
    h4Title.remove()
    parrafoPro.remove()
    popup.parentNode.classList.add('backgroundpopup-show')
    })


}
    


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
        img1.src  = '/imagenes/background.png'
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
        a2.href = "#"
        a2.textContent = `Añadir al carrito`

    
        container.appendChild(div1 );
        div1.appendChild(span1)
        div1.appendChild(span2)
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
    eventos()
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

