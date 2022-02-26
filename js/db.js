//VARIABLES
let entrada
let trueofalse = true
let valorTotal = []
let restaCarrito = []
let pcCarritoValor = []
let pcCaritoNombre = []
let suma
let suma2
let productosArray = []


// CONSTRUCTOR 1
class productos {
    constructor({id, nombre, precio, cantidad, idB, nombrecorto, marca, descripcion, imagen}) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.idB = idB
        this.precioTOTAL
        this.nombrecorto = nombrecorto
        this.marca = marca
        this.descripcion = descripcion
        this.imagen = imagen
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
            this.precioTOTAL = multiplicacion        
            let arrayValor = []
            arrayValor.push(this.precioTOTAL)
            let total = arrayValor.reduce((a, b) => a + b, 0)
            suma = total
            valorTotal.push(suma)
        }
    }
  

}
//  LLAMADO DE PRODUCTOS
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
// FUNCION PARA LOS ELEMENTOS DEL FILTRO
function crearProducto(elm){
    productosArray.push(new productos(elm));
    updateElements(productosArray)
    controlesDemov(productosArray);
    filtradoAside (productosArray)
    
}


