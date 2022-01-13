let procesadorValor
let procesadorNombre
let motherValor
let motherNombre
let memoriasRamValor
let memoriasRamNombre
let graficasValor
let graficasNombre
let almacenamientoValor
let almacenamientoNombreGen
let gabinetesValor
let gabinetesNombre
let fuentesValor
let fuentesNombre
let valor
let precioFinal
let resultadoTotalObjeto
let arrayValor = []
let arrayNombreDuplicados = []
let arrayNombresFinal = []
let vecesCompradas = 1
let cantidadComprada = []

class productos {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.precioTOTAL
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
                this.precioTOTAL = total
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

// Mouses
let mouses = new productos("Mouse Logitech G305", 1400, 4)
let mouses2 = new productos("Mouse Redragon Storm Elite M988", 1100, 2)
let mouses3 = new productos("Mouse Logitech MX Anywhere 3", 1300, 1)
console.log(mouses)
// Teclado 
let teclado = new productos("Teclado Razer Huntsman Tournament", 5000, 3)
let teclado2 = new productos("Teclado HyperX Alloy Elite 2", 4000, 3)
let teclado3 = new productos("Teclado Redragon Draconic K530", 3500, 1)


// auriculares 
let auriculares = new productos("Auriculares inalámbricos HyperX Cloud Flight", 7000, 1)
let auriculares2 = new productos("Auriculares gamer HyperX Cloud Stinger S", 5000, 2)
let auriculares3 = new productos("Auriculares gamer Logitech G Series G433", 4500, 3)

// Combos PC 
let combosPc = new productos("Combo Actualizacion Amd Ryzen 5 3600 + A320 + 8gb", 22000, 2)
let combosPc2 = new productos("Combo De Actualizacion Biostar A68mhe + Amd A6 7480 + 8 Gb", 20000, 1)
let combosPc3 = new productos("Combo Actualizacion Amd Ryzen 5 3600 + A320 + 8gb", 30000,3)

// Consolas 
let consolas = new productos("Xbox Series X 1TB", 110000, 2)
let consolas2 = new productos("Xbox Series S 512GB", 110000, 2)
let consolas3 = new productos("Sony PlayStation 5 825GB", 90000,1)

// AMD
// procesadores
let procesadorAMD = new productos("Ryzen 5600G", 7000, 1)
let procesadorAMD2 = new productos("Ryzen 7 5700G", 8000, 2)
let procesadorAMD3 = new productos("Ryzen 9 5950X", 10000, 5)

// Mother
let motherAMD = new productos("Gygabyte GA-A320M-H", 5000, 3)
let motherAMD2 = new productos("Asus prime B450M-A II", 5500, 2)
let motherAMD3 = new productos("Asus TUF B450M-Plus II", 6500, 5)



// INTEL
// procesadores
let procesadorIntel = new productos("Core i3-10100F", 3000, 2)
let procesadorIntel2 = new productos("Core I5-10400F", 5000, 5)
let procesadorIntel3 = new productos("Core i9-10900K", 10000, 2)

// Mother
let motherIntel = new productos("Asus prime B460m-a", 2000, 3)
let motherIntel2 = new productos("Gigabyte h410m H V3", 4000, 2)
let motherIntel3 = new productos("Asus prime h510 M-e", 6000, 1)

// GeneralesPC

// Memorias ram 
let memoriasRam = new productos("Memoria RAM Fury DDR4 8GB 2666mhz", 600, 1)
let memoriasRam2 = new productos("Memoria RAM Fury DDR4 16GB 2133mhz", 1200, 2)
let memoriasRam3 = new productos("x2 Memoria RAM Fury DDR4 8GB 2133mhz", 1100,1)

// Placas videos 
let graficas = new productos("GTX 1050TI MSI", 60000, 2)
let graficas2 = new productos("MSI VENTUS RTX 2060 SUPER", 200000, 1)
let graficas3 = new productos("MSI VENTUS RTX 3090", 300000, 3)

// Almacenamiento
let almacenamiento = new productos("SSD Kingston de 512GB", 1000, 2)
let almacenamiento2 = new productos("Disco rigido Western Digital 1TB 7200RPM", 2000, 2)
let almacenamiento3 = new productos("Disco solido Samsung 870 1tb", 32000,1)

// Gabinetes
let gabinetes = new productos("Gabinete gamemax h601", 1200, 2)
let gabinetes2 = new productos("Gabinete SYX Fearless ATX", 2000, 2)
let gabinetes3 = new productos("Gabinete Aerocool MECHA TG 1", 3200,1)

// Fuentes
let fuentes = new productos("Fuente Gigabyte 750w 80 plus bronce", 2200, 2)
let fuentes2 = new productos("Fuente Asus ROG Thor 850w 80 plus platinum", 5000, 2)
let fuentes3 = new productos("Fuente Seasonic 1000w Focus PLus Gold", 5500, 1)

// netbooks 
class netbooksProductos {
    constructor(nombre, precio, cantidad, procesador, ram, almacenamiento, almacenamiento1 ) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.procesador = procesador
        this.ram = ram
        this.almacenamiento = almacenamiento
        this.almacenamiento1 = almacenamiento1 
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
let netbooks = new netbooksProductos("Netbook HP", 30000, 2, "Procesador: i5-10210U", "Ram: 8GB", "SSD: 256GB")
let netbooks2 = new netbooksProductos("Netbook Lenovo", 40000, 5, "Procesador: i7-10510U", "Ram: 8GB", "SSD: 512GB")
let netbooks3 = new netbooksProductos("Netbook Asus", 60000, 1, "Procesador: i7-1065G7", "Ram: 8GB",  "SSD: 512GB", "HDD: 1TB")



