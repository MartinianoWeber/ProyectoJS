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
    
});



productosArray.forEach(producto => {
    const productoHTML = document.createElement('p')
    productoHTML.innerHTML = `
    <p> ${producto.nombre} ${producto.precio} dsd </p>
    `
    contenedor.appendChild(autoHTML);
})




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
productosArray.push (new productos("Ryzen 5600G", 7000, 1, "procesadores1", "Ryzen 5600G", "amd"))
productosArray.push (new productos("Ryzen 7 5700G", 8000, 2, "procesadores1", "Ryzen 7 5700G", "amd"))
productosArray.push (new productos("Ryzen 9 5950X", 10000, 5, "procesadores1", "Ryzen 9 5950X", "amd"))
const procesadoresAmd = productosArray.filter(id => id.id === "procesadores1")
// Mother
productosArray.push (new productos("Gygabyte GA-A320M-H", 5000, 3, "mothers1", "Gygabyte GA-A320M-H", "gigabyte"))
productosArray.push (new productos("Asus prime B450M-A II", 5500, 2, "mothers1", "Asus prime B450M-A II", "asus"))
productosArray.push (new productos("Asus TUF B450M-Plus II", 6500, 5, "mothers1", "Asus TUF B450M-Plus II", "asus"))
const mothersAmd = productosArray.filter(id => id.id === "mothers1")

// INTEL
// procesadores
productosArray.push (new productos("Core i3-10100F", 3000, 2, "procesadores2", "Core i3-10100F", "intel"))
productosArray.push (new productos("Core I5-10400F", 5000, 5, "procesadores2", "Core I5-10400F", "intel"))
productosArray.push (new productos("Core i9-10900K", 10000, 2, "procesadores2", "Core i9-10900K", "intel"))
const procesadoresIntel = productosArray.filter(id => id.id === "procesadores2")

// Mother
productosArray.push (new productos("Asus prime B460m-a", 2000, 3, "mothers2", "Asus prime B460m-a", "asus"))
productosArray.push (new productos("Gigabyte h410m H V3", 4000, 2, "mothers2", "Gigabyte h410m H V3", "gigabyte"))
productosArray.push (new productos("Asus prime h510 M-e", 6000, 1, "mothers2", "Asus prime h510 M-e", "asus"))
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

const netbooks = productosArray.filter(id => id.id === "netbooks")

// EVENTOS
function eventosCards(){
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

boton.forEach(btnAbrir => {
    btnAbrir.addEventListener('click', (e) => {
        e.preventDefault()
        popup.classList.add('pruebapopup-show')
    })
});

const botoncerrar = document.querySelector('.btn-popup')
const popup = document.querySelector('#pop-up')


botoncerrar.addEventListener('click', (e) => {
    e.preventDefault()
    popup.classList.remove('pruebapopup-show')
})
}


// limpiar html

function limpiarHTML(){
    document.getElementById('productos').innerHTML = ``;
}

function domProductos(){
    const contenedor = document.querySelector('#productos');
    limpiarHTML()
    slice.forEach(productos => {
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
        h41.textContent = `${productos.nombrecorto}`

        const div3 = document.createElement('div')
        div3.classList.add('linea')

        const p1 = document.createElement('p')
        p1.textContent = `Valor: $${productos.precio}`

        const a1 = document.createElement('a')
        a1.classList.add('btnInformacion')
        a1.href = "#"
        a1.textContent = `Mas informacion`

        const span4 = document.createElement('span')
        span4.classList.add('boton__añadir')

        const a2 = document.createElement('a')
        a2.href = "#"
        a2.textContent = `Añadir al carrito`

    
        contenedor.appendChild(div1 );
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
    eventosCards()    
}


    let a = document.querySelectorAll('.btnSig')
    a.forEach(a =>{
        a.addEventListener('click', (e) => {
            e.preventDefault()
        })
    })
    console.log(a)
    
    let flechasig = document.querySelector('#img2')
    let flecharetroceso = document.querySelector('#img1')
    let posicionactual = document.querySelector('#contador1')
    let prueba = 1
    
    posicionactual.textContent = prueba
    slice = productosArray.slice(0, 6)
    domProductos(slice)
    function sumarFlecha(){
        flechasig.addEventListener('click', (e) => {
        
            switch(posicionactual.textContent = prueba){
                case 1:
                    ++prueba 
                break; 
                case 2:
                    slice = productosArray.slice(7, 13)
                    domProductos(slice)
                    ++prueba
                    break; 
                    case 3:
                        slice = productosArray.slice(14, 20)
                        domProductos(slice)
                        ++prueba
                        break; 
                        case 4:
                            slice = productosArray.slice(20, 26)
                            domProductos(slice)
                            ++prueba
                            break; 
                            case 5:
                                slice = productosArray.slice(26, 32)
                                domProductos(slice)
                                ++prueba
                                break; 
                                case 6:
                                    slice = productosArray.slice(38, 44)
                                    domProductos(slice)
                                    ++prueba
                                    break; 
                                    case 7:
                                        slice = productosArray.slice(42, 47)
                                        domProductos(slice)
                                        break; 
            }
            e.preventDefault() 
        })
    }
    
  


    
   
        flecharetroceso.addEventListener('click', (e) => {
            
            switch(posicionactual.textContent = prueba){
                case 1:
                   
                break; 
                case 2:
                    slice = productosArray.slice(7, 13)
                    domProductos(slice)
                    --prueba
                    break; 
                    case 3:
                        slice = productosArray.slice(14, 20)
                        domProductos(slice)
                        --prueba
                        break; 
                        case 4:
                            slice = productosArray.slice(20, 26)
                            domProductos(slice)
                            --prueba
                            break; 
                            case 5:
                                slice = productosArray.slice(26, 32)
                                domProductos(slice)
                                --prueba
                                break; 
                                case 6:
                                    slice = productosArray.slice(38, 44)
                                    domProductos(slice)
                                    --prueba
                                    break; 
                                    case 7:
                                        slice = productosArray.slice(42, 47)
                                        domProductos(slice)
                                        --prueba
                                        break; 
            }
            e.preventDefault() 
        })
        sumarFlecha()