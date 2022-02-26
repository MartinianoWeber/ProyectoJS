

// QUERY SELECTORS
const btnCancelarcompra = document.querySelector('#btnCancelar')
const btnAgregarcompra = document.querySelector('#btnFinalizar')
const agregarPrcarrito = document.querySelector('#appendParacarrito')
const cantidadProductos = document.querySelector('#cantidadProductos')
const finalizarCompra  = document.querySelector('#btnFinalizarcompra')
const btnCarrito = document.querySelector('.productos__carritolink')
const backgroundCarrito = document.querySelector('#carrito')
const btnContinuar = document.querySelector('#btnContinuar')
const popup = document.querySelector('#pop-up')
const contador = document.querySelector('#spinner')
const inhabilitarBtn = document.querySelector('#btn__inhabilitar')
const backgroundCompra = document.querySelector('#backgroundPopupcompra')
const popUpcompra = document.querySelector('#pop-upDatos')
const btnInhabilitarcompra = document.querySelector('#btnInhabilitarterminar')
const buscadorDeproductos = document.querySelector('#buscadorDeproductos')
const ingresarBusqueda = document.querySelector('#ingresarBusqueda')
// EVENTOS
function eventos (){
// QUERY SELECTOR
const botoncerrar = document.querySelector('.btn-popup')
const btnAñadir = document.querySelectorAll('#btnAñadir')
popup.parentNode
const boton = document.querySelectorAll('a[class = "btnInformacion"]')
const btnCancelarcompra = document.querySelector('#btnCancelar')

// APERTURA DEL CARRITO DESDE EL ICONO
btnCarrito.addEventListener('click', (e) =>{
    e.preventDefault()
    // VALIDACION DE SI HAY CONTENIDO O NO
    // SI NO HAY NADA NO SE PUEDE PROSEGUIR CON LA COMPRA
    let validacion = parseInt(e.composedPath()[4].children[2].children[0].children[1].children[0].children[2].children[0].children[1].children[0].innerHTML)
    if(validacion === 0){
        btnInhabilitarcompra.classList.remove('no-view')
    }else{
        btnInhabilitarcompra.classList.add('no-view')
    }
    // SE REMUEVE LA CLASE PARA PODER VISIBILIZAR EL CARRITo
    backgroundCarrito.classList.remove('backgroundpopup-show')
})
// BOTON PARA CONTINUAR CON LA COMPRA SI TE FALTO ALGO EN EL CARRo
btnContinuar.addEventListener('click', (e) => {
    e.preventDefault()
    
    backgroundCarrito.classList.add('backgroundpopup-show')
 })
      
//BOTON MAS INFORMACION DE CADA PRODUCTO
    const h4Title = document.createElement('h4')
    const parrafoPro = document.createElement('p')
    boton.forEach(e => {
       
        e.addEventListener('click', (e) => {
            e.preventDefault()
            
            let path = e.composedPath()[1].children[0].textContent
            let pathDescripcion = e.composedPath()[4].children[2].textContent
            h4Title.innerText =""
            h4Title.textContent = path 
            h4Title.classList.add('subrayado')
            parrafoPro.textContent = pathDescripcion
            popup.prepend(parrafoPro)
            popup.prepend(h4Title)
            popup.parentNode.classList.remove('backgroundpopup-show')
        })
      
    })
// BOTON CERRAR LA VENTANA MODAL DE MAS INFORMACION 
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
        let path = e.composedPath()[2].children[1].children[0].textContent
        let pathCantidad = e.composedPath()[4].children[4].textContent
        let pathPrecio = e.composedPath()[4].children[3].textContent
        // CREA EL HTML PARA LA VENTANA MODAL DE CONFIRMACION
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
        pathCantidadspinner[0].cantidad
        // VALIDA QUE SI LA CANTIDAD ES IGUAL A 0 SE REMUEVE EL CONTADOR
        if(pathCantidadspinner[0].cantidad == 0){
            contador.classList.add("no-view")
            inhabilitarBtn.classList.remove("no-view")
        }else{
            contador.classList.remove("no-view")
            inhabilitarBtn.classList.add("no-view")
        }

        // DATOS OCULTOS PARA ENCONTRAR VALORES DEL PATH
        let nombreProductonv = document.createElement('p')
        let precioProductonv = document.createElement('p')
        let cantidadProductonv = document.createElement('p')
        nombreProductonv.textContent = path
        precioProductonv.textContent = pathPrecio
        cantidadProductonv.textContent = pathCantidad
        nombreProductonv.classList.add('no-view')
        precioProductonv.classList.add('no-view')
        cantidadProductonv.classList.add('no-view')
        // PREPENT PARA DATOS NO VIEW  PARA ENCONTRAR VALORES DEL PATH
        popUpcompra.prepend(nombreProductonv)
        popUpcompra.prepend(precioProductonv)
        popUpcompra.prepend(cantidadProductonv)

        // INYECTAMOS HTML DE CONTADOR
        contador.innerHTML = `
        <div class="container2">
                                <span id="next" class="next"></span>
                                <span id="prev" class="prev"></span>
                                <div id="box"></div>
        `
        // LOGICA DEL CONTADOR
        let numbers = document.querySelector('#box');
        for(i=1;i<=pathCantidadspinner[0].cantidad;i++){

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
        // CERRAR VENTANA AL DAR AGREGAR AL CARRITO    
        btnAgregarcompra.addEventListener('click', (e) =>{
            nombreProducto.remove()
            precioProducto.remove()
            box.innerHTML = ""
            cantidadProducto.remove()
            backgroundCompra.classList.add('backgroundpopup-show')
            $('#cajaConfirmacion').fadeIn(2000).fadeOut(4000)
            
        })  
        
    })
    
})

}




// AGREGA PRODUCTOS AL CARRITO Y HACE LA SUMA Y EL TOTAL

btnAgregarcompra.addEventListener('click', (e) =>{
    // TOMAMOS LOS DATOS DEL PRODUCTO SELECCIONADO
    let pathNombre = e.composedPath()[2].children[0].children[2].textContent
    let pathPrecio = e.composedPath()[2].children[0].children[1].textContent
    let pathcount = e.composedPath()[2].children[2].children[0].innerText
    let countNumber = parseInt(pathcount)
    let precioNumber = parseInt(pathPrecio)
    // FILTRAMOS EL NOMBRE
    let filtradoStock = productosArray.filter(nombre => nombre.nombrecorto === pathNombre)
    let id = Date.now()
    // TRABAJAMOS CON LA FUNCION DE CONSTRUCTOR PARA EL STOCK
    filtradoStock[0].stock(countNumber, id)
    
        
        // INYECTAMOS HTML EN CARRITO
        let pruebaLS = agregarPrcarrito.innerHTML += `
        <div class="items__productos " id="b${id}">
        <p>${pathNombre}</p>
        <p>$${pathPrecio}</p>
        <p>Cantidad: ${pathcount}</p>
        <p>Total: $${suma}</p>
        <p class="no-view">b${id}</p>
        <p class="no-view" > ${suma}</p>
        <p class="no-view" > ${pathPrecio}</p>
        <p class="no-view" > ${pathcount}</p>
        <a class="no-view"  id="cheackBox" href="#"><img src="./imagenes/delete-button.png" width="31px" height="31px" alt=""></a>
        </div>
        `   
        // BOTONES DE ELIMINAR
        const btnEliminarpr = document.querySelectorAll('#cheackBox')     
        // FUNCION ELIMINAR PRODUCTO
        eliminarPr(btnEliminarpr)
        // FUNCION AGREGAR PRODUCTO
        agregarPr()
        // BOTON DE ELIMINAR CARRITO, GENERA BOTONES DE ELIMINAR
        btnEliminarcarrito(btnEliminarpr)
})
      
// FUNCION AGREGAR PRODUCTO
function agregarPr(){
    let totalComprado = valorTotal.reduce((a, b) => a + b, 0)
    suma2 = totalComprado
    let totalDeCompra = document.querySelector('#totalDelacompra')
    totalDeCompra.innerHTML = `$<span>${suma2}</span></p>`
    eliminarPr()
}
// FUNCION ELIMINAR PRODUCTO
function eliminarPr(btnEliminarpr){
    $(btnEliminarpr).click((e) =>{
        e.preventDefault()
        let pathNombre = e.originalEvent.composedPath()[2].children[0].textContent
        let pathremove = e.originalEvent.composedPath()[2]
        let filtradoStock = productosArray.filter(nombre => nombre.nombrecorto === pathNombre)
        let pathPrecio = parseInt(e.originalEvent.composedPath()[2].children[5].textContent)
        let resta = valorTotal.push(-pathPrecio) 
        agregarPr(resta)
        pathremove.remove()
        let validacion = parseInt(e.originalEvent.composedPath()[4].children[2].children[0].children[1].children[0].innerText)
        // VALIDACION DE BTN de FINALIZAR COMPRA
        if(validacion == 0){
            btnInhabilitarcompra.classList.remove('no-view')
        }else{
            btnInhabilitarcompra.classList.add('no-view')
        }
        $('#productoEliminado').fadeIn(2000).fadeOut(4000)
        

             
    })
}
// BOTON DE ELIMINAR CARRITO, GENERA BOTONES DE ELIMINAR
function btnEliminarcarrito(btnEliminarpr){
    const btnEliminarcompra = document.querySelector('#btnEliminarpr')
    btnEliminarcompra.addEventListener('click', (e) =>{
    e.preventDefault()

    btnEliminarpr.forEach(elm => {
        elm.classList.remove('no-view')
    })
    })
}
// BOTON DE FINALIZAR COMPRA
function finalizarCompras(){
    finalizarCompra.addEventListener('click', (e) =>{
        // TOMA EL TOTAL DE LA COMPRA Y LO ENVIA A SESSION STORAGE
        let totalFinal = parseInt(e.composedPath()[2].children[2].children[0].children[1].children[0].innerHTML)
        sessionStorage.setItem('precioFinal', totalFinal)

    })
}
finalizarCompras()



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
        span1.style.backgroundImage = `url('${elm.imagen}')`;
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
        // span1.appendChild(img)
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
// CONTROLES DE MOVIMIENTO 1-8
function controlesDemov(productosArray){
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
}
// ASIDE DE FILTRADO 
function filtradoAside (){
// FILTRO Netbooks
    const netbooksFilter = document.querySelector('#netbooksAside')
    const netbooks = productosArray.filter(id => id.idB === "netbooks")
    netbooksFilter.textContent = `Netbooks(${netbooks.length})`
    netbooksFilter.addEventListener('click', (e) =>{
        e.preventDefault()
        updateElements(netbooks)
    })
    
    // Procesadores
    const procesadoresFilter = document.querySelector('#procesadoresAside')
    const procesadores = productosArray.filter(id => id.idB === "procesadores")
    procesadoresFilter.textContent = `Procesadores(${procesadores.length})`
    procesadoresFilter.addEventListener('click', (e) =>{
        e.preventDefault()
        updateElements(procesadores)
    })
    // Mothers
    const motherFilter = document.querySelector('#mothersAside')
    const mother = productosArray.filter(id => id.idB === "mothers")
    motherFilter.textContent = `Mother(${mother.length})`
    motherFilter.addEventListener('click', (e) =>{
        e.preventDefault()
        updateElements(mother)
    })
    // Rams
    const ramsFilter = document.querySelector('#ramsAside')
    const rams = productosArray.filter(id => id.idB === "rams")
    ramsFilter.textContent = `Rams(${rams.length})`
    ramsFilter.addEventListener('click', (e) =>{
        e.preventDefault()
        updateElements(rams)
    })
    // Graficas
    const graficasFilter = document.querySelector('#graficasAside')
    const graficasfil = productosArray.filter(id => id.idB === "graficas")
    graficasFilter.textContent = `Graficas(${graficasfil.length})`
    graficasFilter.addEventListener('click', (e) =>{
        e.preventDefault()
        updateElements(graficasfil)
    })
    // almacenamiento
    const almacenamientoFilter = document.querySelector('#almacenamientoAside')
    const almacenamiento = productosArray.filter(id => id.idB === "almacenamiento")
    almacenamientoFilter.textContent = `Almacenamiento(${almacenamiento.length})`
    almacenamientoFilter.addEventListener('click', (e) =>{
        e.preventDefault()
        updateElements(almacenamiento)
    })
    // fuentes
    const fuentesFilter = document.querySelector('#fuentesAside')
    const fuentes = productosArray.filter(id => id.idB === "fuentes")
    fuentesFilter.textContent = `Fuentes(${fuentes.length})`
    fuentesFilter.addEventListener('click', (e) =>{
        e.preventDefault()
        updateElements(fuentes)
    })
    // mouse
    const mousesFilter = document.querySelector('#mousesAside')
    const mouse = productosArray.filter(id => id.idB === "mouse")
    mousesFilter.textContent = `Mouses(${mouse.length})`
    mousesFilter.addEventListener('click', (e) =>{
        e.preventDefault()
        updateElements(mouse)
    })
    // teclados
    const tecladosFilter = document.querySelector('#tecladosAside')
    const teclados = productosArray.filter(id => id.idB === "teclados")
    tecladosFilter.textContent = `Teclados(${teclados.length})`
    tecladosFilter.addEventListener('click', (e) =>{
        e.preventDefault()
        updateElements(teclados)
    })
    // auriculares
    const auricularesFilter = document.querySelector('#auricularesAside')
    const auriculares = productosArray.filter(id => id.idB === "auriculares")
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
    }
// Filtrado inputs

filtrado = {
    marca: '',
    precioMin: '',
    precioMax: ''
}
// FILTRO DE MARCA
const marcaFiltro = document.getElementById('marca');
marcaFiltro.addEventListener('click', (e) => {
    filtrado.marca = e.target.value 
    filtradoMarcas()
})
// FILTRO DE MINIMO
const filtrarMin = document.getElementById('minimo');
filtrarMin.addEventListener('click', (e) => {
    filtrado.precioMin = Number(e.target.value) 
    filtradoMarcas()
    
})
// FILTRO DE MAXIMO
const filtrarMax = document.getElementById('maximo');
filtrarMax.addEventListener('click', (e) => {
    filtrado.precioMax = Number(e.target.value) 
    filtradoMarcas()
    
})
// EJECUTA LA FUNCION
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

// CONSTRUCTOR PARA BUSQUEDA
class busquedaConst{
    constructor({id, nombre, precio, cantidad, idB, nombrecorto, marca, descripcion, imagen}){
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
}
// ARRAY PARA BUSQUEDA
let arrayBusqueda = []
// FUNCION PARA BUSQUEDA
function busqueda(){
    buscadorDeproductos.addEventListener('change', (e) =>{
        e.preventDefault()
        let nombrePr = e.target.value.toLowerCase()
        ingresarBusqueda.addEventListener('click', (e) =>{
            e.preventDefault()
            productosArray.forEach(elm => {
                
                let nombres = elm.nombre.toLowerCase()
                let busquedaFiltro = nombres.indexOf(nombrePr)
                if(busquedaFiltro !== -1){
                    arrayBusqueda.push(new busquedaConst (elm))
                    updateElements(arrayBusqueda)
                    
                }
                
            })
            arrayBusqueda = []
        })
        
    })
}

busqueda()