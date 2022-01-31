let arrayValor = []
let arrayNombreDuplicados = []
let arrayNombresFinal = []
let vecesCompradas = 1
let cantidadComprada = []
let pcCarritoValor = []
let pcCaritoNombre = []
let suma



class productos {
    constructor({id, nombre, precio, cantidad, idB, nombrecorto, marca, descripcion}) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.idB = idB
        this.precioTOTAL
        this.nombrecorto = nombrecorto
        this.marca = marca
        this.descripcion = descripcion
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

const requestURL= "js/db.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const productosDB = request.response;
    productosDB.map(elm =>{
        crearProducto(elm);
        
    })
}
function crearProducto(elm){
    productosArray.push(new productos(elm));
    updateElements(productosArray)
    pruebita(productosArray);
    filtradoAside (productosArray)
}



















