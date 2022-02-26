// QUERYES SELECTORS
const totalPrecio = document.querySelector('#precioFinal')
const appendMetodo = document.querySelector('#appendMetodoenvio')
const appendPago = document.querySelector('#appendMetodopago')
const appendMetodosefectivo = document.querySelector('#appendMetodosefectivo')
const appendCodigopago = document.querySelector('#appendCodigopago')
const retiro = document.querySelector('#retirar')
const envio = document.querySelector('#envio')
const efectivo = document.querySelector('#efectivo')
const debito = document.querySelector('#debito')
const tarjetaCredito = document.querySelector('#tarjetaCredito')
let precio = parseInt(sessionStorage.getItem('precioFinal'))
let precioPcarmada = parseInt(sessionStorage.getItem('totalFinal'))
const inputUser = document.querySelector('#inputUser')
const inputpassword = document.querySelector('#inputpassword')
const btnIniciosesion = document.querySelector('#btnIniciosesion')
const backgroundSesion = document.querySelector('#sesion__background')
const errorUser = document.querySelector('#errorUser')
const errorPass = document.querySelector('#errorPass')
const usersDisponibles = document.querySelector('#usersDisponibles')
const modalUsuarios = document.querySelector('#modalUsuarios')
const nameUsuario = document.querySelector('#nameUsuario')
const validacionCompra = document.querySelector('#validacionCompra')


// ARRAYS
let validacionArray = []
let validacionForm2 = []
let users = []
let userArray = []
let passArray = []
let tarjetasArray = []
let precioTotalArray = []
// PROCESO DE CREAR PRECIO
function crearPrecio(){
    if(precio > 0){
        totalPrecio.innerHTML = `<p class="p__cards p__preciototal">Precio total: $${precio} </p>`
    }else{
        totalPrecio.innerHTML = `<p class="p__cards p__preciototal">Precio total: $${precioPcarmada} </p>`
    }
  
}
crearPrecio()
   

// PROCESO DE RETIRO
retiro.addEventListener('click', (e) =>{
    appendMetodo.innerHTML = `<div class="form__retirar"></div>
    <p class="p__cards p__retirar"> Muy bien! Nuestra direccion es xxxx, numero xxx y estamos de 8AM a 8PM de corrido. Por Favor llevar numero de guia.</p>
    <div  class="btn__card2">
        <a id="btnSig" href="#">Siguiente paso</a>
    </div>
    `
    // BTN SIGUIENTE PARA VALIDAR
    const btnSig = document.querySelector('#btnSig')
    btnSig.addEventListener('click', (e) =>{
        e.preventDefault()
        validacionCompra.classList.add('no-view')
    })
})


// PROCESO DE ENVIO
envio.addEventListener('click', (e) =>{
  
    appendMetodo.innerHTML = `                        <div class="form__background">
    </div>
    <form class="formulario__card1">
        <label class="label__card1" for="provincia">Ingrese provincia</label>
        <input id="provincia" placeholder="Ingrese provincia" type="text">
        <label class="label__card1"  for="ciudad" >Ingrese ciudad</label>
        <input id="ciudad" placeholder="Ingrese ciudad" type="text">
        <label class="label__card1"  for="postal">Codigo postal</label>
        <input id="postal" placeholder="Codigo postal" type="text">
        <label class="label__card1"  for="calleNumero">Calle y numero</label>
        <input id="calleNumero" placeholder="Calle y numero" type="text">
        <label class="label__card1"  for="deptoYpiso">Depto y piso(opcional)</label>
        <input class="inputOpcional" type="text" placeholder="Depto y piso(opcional)">
        <input id="envioDireccion" class="submit__card1" type="submit">
        <div id="errorMs"></div>
    </form></p>
    `
    // QUERYES SELECTOR
    const errorMsg = document.querySelector('#errorMs')
    const envioDireccion = document.querySelector('#envioDireccion') 
    let provinciaStatus = document.querySelector('#provincia')
    let ciudadStatus = document.querySelector('#ciudad')
    let postalStatus = document.querySelector('#postal')
    let calleNumberStatus = document.querySelector('#calleNumero')
    // VALIDACION DE ENVIO
    $('#provincia').change((e) =>{
        let provincia = e.target.value
        if(provincia != ""){
            
            provinciaStatus.classList.add('okInput')
            validacionArray.push("provinciaOk")
        }else{
            provinciaStatus.classList.remove('okInput')
        }
    })
    $('#ciudad').change((e) =>{
        let ciudad = e.target.value
        if(ciudad != ""){

            ciudadStatus.classList.add('okInput')
            validacionArray.push("ciudadOk")
        }else{
            ciudadStatus.classList.remove('okInput')
        }
    })
    $('#postal').change((e) =>{
        let postal = parseInt(e.target.value)
        if(Number.isInteger(postal)){
            
            postalStatus.classList.add('okInput')
            validacionArray.push('postalOk')
        }else{
           validacionArray.splice(2, 1)
          
            
            postalStatus.classList.remove('okInput')
        }
    })
    $('#calleNumero').change((e) =>{
        let calleNumber = e.target.value
        
        if(calleNumber != ""){
            calleNumberStatus.classList.add('okInput')
            validacionArray.push('calleOk')
        }else{
            calleNumberStatus.classList.remove('okInput')

            
        }
    })
    // BOTON DE ENVIO DE DIRECCION
    envioDireccion.addEventListener('click', (e) =>{
            e.preventDefault()
            // VALIDACIOn
            if(validacionArray.length === 4){
                appendMetodo.innerHTML = `
            <div class="confimacion__background"></div>
            <p class="p__direccionConfirmada"><img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" class="img__confirmacion" alt="">  Su direccion ha sido confirmada con exito! </p>
            `  
                validacionCompra.classList.add('no-view')
            }else{
                errorMsg.innerHTML = `<p class="errormsg"> Error en los campos, verifique los campos rojos</p>`
            }
                 
        })     
})

//PROCESO PARA EFECTIVO

efectivo.addEventListener('click', (e) =>{
    appendPago.innerHTML = ` <p class="p__cards">Elija su metodo de pago en efectivo</p>
    <div class="p__cards card2__form2">
        <p>Rapipago<span><input  name="type__efectivo" id="rapipago" type="radio"></span></p>
        <p>PagoFacil<span><input  name="type__efectivo" id="pagofacil"  type="radio"></span></p>
    </div>
    `
    // VALIDACION DE SESSION STORAGE SI ES DE ARMADO DE PC O PRODUCTOS
    if(precio > 0){
        totalPrecio.innerHTML = `<p class="p__cards p__preciototal">Precio total: $${precio} </p>`
    }else{
        let calculo = (precioPcarmada*0.15)
        let precioFinal = precioPcarmada -calculo
        totalPrecio.innerHTML = `<p class="p__cards p__preciototal">Precio total: $${precioFinal} </p>`
    }
    // SELECCION DE RAPIPAGO
    const rapipago = document.querySelector('#rapipago')
    rapipago.addEventListener('click', (e) =>{
        appendMetodosefectivo.innerHTML = ` <div  class="btn__card2">
        <a id="btnpago" href="#">Generar boleta de pago</a>
    </div>
        `  
        appendCodigopago.innerHTML = "" 
        const btnpago = document.querySelector('#btnpago')
        // BOTON PARA GENERAR CODIGO
        btnpago.addEventListener('click', (e) =>{
            e.preventDefault()
            let numeroAleatorio = Date.now()
            appendCodigopago.innerHTML = `<div class="codigo__card2">
            <p>Su codigo de pago es: ${numeroAleatorio}</p>
            <p>Por favor conserve el ticket de pago, por su seguridad y la nuestra</p>
            <p>Tiene 15 segundos para copiar el codigo antes de ser llevado al inicio</p>
        </div>
            ` 
            setTimeout( function() { window.location.href = "./index.html"; }, 15000 );       
        })     
    })
      // SELECCION DE PAGO FACIL
    const pagofacil = document.querySelector('#pagofacil')
    pagofacil.addEventListener('click', (e) =>{
        
        appendMetodosefectivo.innerHTML = ` <div  class="btn__card2">
        <a id="btnpago" href="#">Generar boleta de pago</a>
    </div>
        ` 
                // BOTON PARA GENERAR CODIGO
        appendCodigopago.innerHTML = ""
        const btnpago = document.querySelector('#btnpago')
        btnpago.addEventListener('click', (e) =>{
            e.preventDefault()
            let numeroAleatorio = Date.now()
            appendCodigopago.innerHTML = `<div class="codigo__card2">
            <p>Su codigo de pago es: ${numeroAleatorio} </p>
            <p>Por favor conserve el ticket de pago, por su seguridad y la nuestra</p>
            <p>Tiene 15 segundos para copiar el codigo antes de ser llevado al inicio</p>
        </div>
            `        
            setTimeout( function() { window.location.href = "./index.html"; }, 15000 );  
        })          
    })
})

// CONSTRUCTOR DE TARJETAS
class tarjetas {
    constructor({numero, nombretitular, vencimiento, cvv}){
        this.numero = numero
        this.nombretitular = nombretitular
        this.vencimiento = vencimiento
        this.cvv = cvv
    }
}
// LLAMDO DE TARJETAS EN EL JSON
const requestURL2= "js/tarjetasDB.json";
const request2 = new XMLHttpRequest();
request2.open('GET', requestURL2);
request2.responseType = 'json';
request2.send();
request2.onload = function() {
    const tarjetasDB = request2.response;
    tarjetasDB.map(elm =>{
        tarjetasArray.push(elm)
    })
}

// PROCESO DEBITO
debito.addEventListener('click', (e) =>{
    crearPrecio()
    // REINICIAR HTML
    appendCodigopago.innerHTML = ""
    appendMetodosefectivo.innerHTML = ""
    // GENERAMOS HTML DE DEBITO
    appendPago.innerHTML = `    
    <div class="form__background">
                    </div>
    <div class="formulario__card2">
    <label class="label__card1" for="tarjetaNum">Numero de la tarjeta</label>
    <input class="errorInput" id="tarjetaNum" placeholder="Numero de la tarjeta" type="text">
    <label class="label__card1"  for="nombreTitular" >Nombre del titular</label>
    <input class="errorInput" id="nombreTitular" placeholder="Nombre del titular" type="text">
    <label class="label__card1"  for="vencimiento">Vencimiento</label>
    <input class="errorInput"  id="vencimiento" placeholder="Vencimiento" type="text">
    <label class="label__card1"  for="cvv">Codigo de seguridad</label>
    <input class="errorInput" id="cvv" placeholder="CVV" type="text">
    <button id="btnPagardebito"  class="submit__card1" type="submit"> Pagar </button>
    <button class="btn__tarjetasdisponibles" id="btnTarjetas">Ver tarjetas disponibles</button>
    <div id="tarjetasVer"></div>
</div>
    `
    // BTN NUMEROS DE TARJETA
    $('#btnTarjetas').click((e) =>{
        let modalTarjeta = document.querySelector('#tarjetasVer')
        const divback = document.createElement('div')
        divback.classList.add('fixed')
        const divbackground = document.createElement('div')
        divbackground.classList.add('divBackgroundTarjeta')
        const texto = document.createElement('p')
        texto.classList.add('textoTarjeta')
        texto.textContent = `las tarjetas son:
        numero: 2313 2342 4123 4213
         nombretitular: Juan Pedro
         vencimiento: 06/02
         cvv: 765
        `

        modalTarjeta.appendChild(divbackground)
        divbackground.appendChild(texto)

     })
    // VALIDACION DE DEBITO
    $('#tarjetaNum').change((e) =>{
        let tarjeta = e.target.value
        let numeroFilter = tarjetasArray.filter(elm => elm.numero === tarjeta)
        if(numeroFilter.length === 1){
            $("#tarjetaNum").addClass('okInput')
            validacionForm2.push('numero ok')

        }else{
            let busqueda = validacionForm2.indexOf("numero ok")
            if(busqueda != -1){
                validacionForm2.splice(busqueda, 1)
            }else{
               
            }
            $("#tarjetaNum").removeClass('okInput')
        }
    })
    $('#nombreTitular').change((e) =>{
        let nombre = e.target.value
        let nombreFilter = tarjetasArray.filter(elm => elm.nombretitular === nombre)
        if(nombreFilter.length === 1){
            validacionForm2.push("nombre ok")
            $("#nombreTitular").addClass('okInput')
        }else{
            let busqueda = validacionForm2.indexOf("nombre ok")
            if(busqueda != -1){
                validacionForm2.splice(busqueda, 1)
            }else{
               
            }
            $("#nombreTitular").removeClass('okInput')
        }
        
    })
    $('#vencimiento').change((e) =>{
        let vencimiento = e.target.value
        let vencimientoFilter = tarjetasArray.filter(elm => elm.vencimiento === vencimiento)
        if(vencimientoFilter.length === 1){
            validacionForm2.unshift("vencimiento ok")
            $("#vencimiento").addClass('okInput')
        }else{
            let busqueda = validacionForm2.indexOf("vencimiento ok")
            if(busqueda != -1){
                validacionForm2.splice(busqueda, 1)
            }else{
               
            }
            $("#vencimiento").removeClass('okInput')
        }
    })
    $('#cvv').change((e) =>{
        let cvv = e.target.value
        let cvvFilter = tarjetasArray.filter(elm => elm.cvv === cvv)
        if(cvvFilter.length === 1){
            validacionForm2.unshift("cvv ok")
            $("#cvv").addClass('okInput')
        }else{
            let busqueda = validacionForm2.indexOf("cvv ok")
            if(busqueda != -1){
                validacionForm2.splice(busqueda, 1)
            }else{
               
            }
            
            
            $("#cvv").removeClass('okInput')
        }
    })
    // BOTON PARA PAGAR DEBITO
    $('#btnPagardebito').click((e) =>{
        if(validacionForm2.length == 4){
            // VALIDACION DE PRECIO SI ES DE PRODUCTOS O PC ARMADA
            if(precio > 0){
                appendPago.innerHTML = `    
                <div class="form__background sesion__form"></div>
                <p  class="session__pagoConfirmado"><img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" class="img__confirmacion" alt=""> Su pago de ${precio} fue procesado con exito! Sera redireccionado al inicio en 3 segundos.</p>
                
                
                `
                setTimeout( function() { window.location.href = "./index.html"; }, 3000 );
            }else{
                appendPago.innerHTML = `    
                <div class="form__background sesion__form"></div>
                <p  class="session__pagoConfirmado"><img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" class="img__confirmacion" alt=""> Su pago de ${precioPcarmada} fue procesado con exito! Sera redireccionado al inicio en 3 segundos.</p>
                
                
                `
                setTimeout( function() { window.location.href = "./index.html"; }, 3000 );
            }
           
        }
    })   
})


// PROCESO CREDITO

$("#btnSalircuotas").click((e) =>{
    $('#cuotasBackground').addClass('no-view')
})
// PROCESAMOS EL TARJETA DE CREDTIO
tarjetaCredito.addEventListener('click', (e) =>{
    crearPrecio()
    // REINICIAR HTML
    appendCodigopago.innerHTML = ""
    appendMetodosefectivo.innerHTML = ""
    // GENERAR FORMULARIO 
    appendPago.innerHTML = `
    <div class="form__background">
                    </div>
     <div class="formulario__card2">
    <label class="label__card1" for="tarjetaNum">Numero de la tarjeta</label>
    <input class="errorInput" id="tarjetaNum" placeholder="Numero de la tarjeta" type="text">
    <label class="label__card1"  for="nombreTitular" >Nombre del titular</label>
    <input class="errorInput" id="nombreTitular" placeholder="Nombre del titular" type="text">
    <label class="label__card1"  for="vencimiento">Vencimiento</label>
    <input class="errorInput" id="vencimiento" placeholder="Vencimiento" type="text">
    <label class="label__card1"  for="cvv">Codigo de seguridad</label>
    <input class="errorInput" id="cvv" placeholder="CVV" type="text">
    <label class="label__card1"  for="cuotas">Cuotas</label>
    <select class="select__card2" name="cuotas" id="cantidadCuotas">
        <option value="">Elija cantidad de cuotas</option>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
        <option value="12">12</option>
    </select>
    <button id="btnPagarcredito"  class="submit__card1" type="submit"> Pagar </button>
    <button class="btn__estimador" id="btnEstimador"> Ver calculadora de cuotas </button>
    <button class="btn__tarjetasdisponibles" id="btnTarjetas">Ver tarjetas disponibles</button>
    <div id="tarjetasVer"></div>
</div>
    `
    // VALIDACION DE TARJETA
    $('#tarjetaNum').change((e) =>{
        let tarjeta = e.target.value
        let numeroFilter = tarjetasArray.filter(elm => elm.numero === tarjeta)
        if(numeroFilter.length === 1){
            $("#tarjetaNum").addClass('okInput')
            validacionForm2.push('numero ok')

        }else{
            let busqueda = validacionForm2.indexOf("numero ok")
            if(busqueda != -1){
                validacionForm2.splice(busqueda, 1)
            }else{
               
            }
            $("#tarjetaNum").removeClass('okInput')
        }
    })
    $('#nombreTitular').change((e) =>{
        let nombre = e.target.value
        let nombreFilter = tarjetasArray.filter(elm => elm.nombretitular === nombre)
        if(nombreFilter.length === 1){
            validacionForm2.push("nombre ok")
            $("#nombreTitular").addClass('okInput')
        }else{
            let busqueda = validacionForm2.indexOf("nombre ok")
            if(busqueda != -1){
                validacionForm2.splice(busqueda, 1)
            }else{
               
            }
            $("#nombreTitular").removeClass('okInput')
        }
        
    })
    $('#vencimiento').change((e) =>{
        let vencimiento = e.target.value
        let vencimientoFilter = tarjetasArray.filter(elm => elm.vencimiento === vencimiento)
        if(vencimientoFilter.length === 1){
            validacionForm2.unshift("vencimiento ok")
            $("#vencimiento").addClass('okInput')
        }else{
            let busqueda = validacionForm2.indexOf("vencimiento ok")
            if(busqueda != -1){
                validacionForm2.splice(busqueda, 1)
            }else{
               
            }
            $("#vencimiento").removeClass('okInput')
        }
    })
    $('#cvv').change((e) =>{
        let cvv = e.target.value
        let cvvFilter = tarjetasArray.filter(elm => elm.cvv === cvv)
        if(cvvFilter.length === 1){
            validacionForm2.unshift("cvv ok")
            $("#cvv").addClass('okInput')
        }else{
            let busqueda = validacionForm2.indexOf("cvv ok")
            if(busqueda != -1){
                validacionForm2.splice(busqueda, 1)
            }else{
               
            }            
            $("#cvv").removeClass('okInput')
        }
    })
    $('#btnTarjetas').click((e) =>{
       let modalTarjeta = document.querySelector('#tarjetasVer')
       const divback = document.createElement('div')
       divback.classList.add('fixed')
       const divbackground = document.createElement('div')
       divbackground.classList.add('divBackgroundTarjeta')
       const texto = document.createElement('p')
       texto.classList.add('textoTarjeta')
       texto.textContent = `las tarjetas son:
       numero: 7563 2315 213 1483
        nombretitular: Admin
        vencimiento: 05/01
        cvv: 666

       `
       modalTarjeta.appendChild(divbackground)
       divbackground.appendChild(texto)
    })

    // ESTIMADOR DE CUOTAS
    $("#btnEstimador").click((e) =>{
        $('#cuotasBackground').removeClass('no-view')
    });
    // CANTIDAD DE CUOTAS
    $('#cantidadCuotas').click((e) =>{
        let cuotas = e.target.value
        if(cuotas != ""){
            let busqueda = validacionForm2.indexOf("cuotas Ok")
            if(busqueda != -1){
                validacionForm2.splice(busqueda, 1)
            }else{
               
            }
            validacionForm2.unshift("cuotas Ok")
            // VARIABLES
            let intereses
            let resultadototal
            let preciototal
            precioTotalArray = []
            // VALIDA SI VIENE DE PRODUCTOS O PC ARMADO
            if(precio > 0){
                let iva = (precio*21)/100;
                switch(cuotas){
                    case "3":
                        intereses = (precio*6)/100;
                        resultadototal = (precio+iva+intereses)/3
                        preciototal = precio+iva+intereses
                        precioTotalArray.push(preciototal)
                        $('#cuotasBackground').html(` <div id="modalCuotas" class="modal__cuotas">
                        <p>Las cuotas quedarian en ${resultadototal} y el precio total en ${preciototal} los intereses serian de ${intereses}</p>
                      <div> <button class="btn__interno" id="btnCerrarcuotas">Salir</button></div>
                      `)
                        $('#btnCerrarcuotas').click((e) =>{
                            $('#cuotasBackground').addClass('no-view')
                        })
                    break;
                    case "6":
                         intereses = (precio*8)/100;
                         resultadototal = (precio+iva+intereses)/6
                         preciototal = precio+iva+intereses
                         precioTotalArray.push(preciototal)
                         $('#cuotasBackground').html(` <div id="modalCuotas" class="modal__cuotas">
                         <p>Las cuotas quedarian en ${resultadototal} y el precio total en ${preciototal} los intereses serian de ${intereses}</p>
                       <div> <button class="btn__interno" id="btnCerrarcuotas">Salir</button></div>
                       `)
                         $('#btnCerrarcuotas').click((e) =>{
                             $('#cuotasBackground').addClass('no-view')
                         })
                        break;
                    
                    case "9":
                         intereses = (precio*11)/100;
                         resultadototal = (precio+iva+intereses)/9
                         preciototal = precio+iva+intereses
                         precioTotalArray.push(preciototal)
                         $('#cuotasBackground').html(` <div id="modalCuotas" class="modal__cuotas">
                         <p>Las cuotas quedarian en ${resultadototal} y el precio total en ${preciototal} los intereses serian de ${intereses}</p>
                       <div> <button class="btn__interno" id="btnCerrarcuotas">Salir</button></div>
                       `)
                         $('#btnCerrarcuotas').click((e) =>{
                             $('#cuotasBackground').addClass('no-view')
                         })
                        break;
            
                    case "12":
                         intereses = (precio*13)/100;
                         resultadototal = (precio+iva+intereses)/12
                         preciototal = precio+iva+intereses
                         precioTotalArray.push(preciototal)
                         $('#cuotasBackground').html(` <div id="modalCuotas" class="modal__cuotas">
                         <p>Las cuotas quedarian en ${resultadototal} y el precio total en ${preciototal} los intereses serian de ${intereses}</p>
                       <div> <button class="btn__interno" id="btnCerrarcuotas">Salir</button></div>
                       `)
                         $('#btnCerrarcuotas').click((e) =>{
                             $('#cuotasBackground').addClass('no-view')
                         })
                        break;
                    }
            }else{
                let iva = (precioPcarmada*21)/100;
                switch(cuotas){
                    case "3":
                        intereses = (precioPcarmada*6)/100;
                        resultadototal = (precioPcarmada+iva+intereses)/3
                        preciototal = precioPcarmada+iva+intereses
                        precioTotalArray.push(preciototal)
                        $('#cuotasBackground').html(` <div id="modalCuotas" class="modal__cuotas">
                        <p>Las cuotas quedarian en ${Math.floor(resultadototal) } y el precio total en ${preciototal} los intereses serian de ${intereses}</p>
                      <div> <button class="btn__interno" id="btnCerrarcuotas">Salir</button></div>
                      `)
                        $('#btnCerrarcuotas').click((e) =>{
                            $('#cuotasBackground').addClass('no-view')
                        })
                    break;
                    case "6":
                         intereses = (precioPcarmada*8)/100;
                         resultadototal = (precioPcarmada+iva+intereses)/6
                         preciototal = precioPcarmada+iva+intereses
                         precioTotalArray.push(preciototal)
                         $('#cuotasBackground').html(` <div id="modalCuotas" class="modal__cuotas">
                         <p>Las cuotas quedarian en ${resultadototal} y el precio total en ${preciototal} los intereses serian de ${intereses}</p>
                       <div> <button class="btn__interno" id="btnCerrarcuotas">Salir</button></div>
                       `)
                         $('#btnCerrarcuotas').click((e) =>{
                             $('#cuotasBackground').addClass('no-view')
                         })
                        break;
                    
                    case "9":
                         intereses = (precioPcarmada*11)/100;
                         resultadototal = (precioPcarmada+iva+intereses)/9
                         preciototal = precioPcarmada+iva+intereses
                         precioTotalArray.push(preciototal)
                         $('#cuotasBackground').html(` <div id="modalCuotas" class="modal__cuotas">
                         <p>Las cuotas quedarian en ${resultadototal} y el precio total en ${preciototal} los intereses serian de ${intereses}</p>
                       <div> <button class="btn__interno" id="btnCerrarcuotas">Salir</button></div>
                       `)
                         $('#btnCerrarcuotas').click((e) =>{
                             $('#cuotasBackground').addClass('no-view')
                         })
                        break;
            
                    case "12":
                         intereses = (precioPcarmada*13)/100;
                         resultadototal = (precioPcarmada+iva+intereses)/12
                         preciototal = precioPcarmada+iva+intereses
                         precioTotalArray.push(preciototal)
                         $('#cuotasBackground').html(` <div id="modalCuotas" class="modal__cuotas">
                         <p>Las cuotas quedarian en ${resultadototal} y el precio total en ${preciototal} los intereses serian de ${intereses}</p>
                       <div> <button class="btn__interno" id="btnCerrarcuotas">Salir</button></div>
                       `)
                         $('#btnCerrarcuotas').click((e) =>{
                             $('#cuotasBackground').addClass('no-view')
                         })
                        break;
                    }
            }
           
        }else{
            
        }
    })
// BTN PARA PAGAR EN CUOTAS
    $('#btnPagarcredito').click((e) =>{
        if(validacionForm2.length == 5){
            appendPago.innerHTML = `    
            <div class="form__background sesion__form"></div>
            <p  class="session__pagoConfirmado"><img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" class="img__confirmacion" alt=""> Su pago de ${precioTotalArray} con interes por pagar en cuotas, fue procesado con exito! Sera redireccionado al inicio en 3 segundos.</p>
            
            
            `
            setTimeout( function() { window.location.href = "./index.html"; }, 3000 );
        }
    })  
})





// PROCESO PARA INICIAR SESION

class user {
    constructor({usuario, password}){
        this.usuario = usuario
        this.password = password
    }
}
const requestURL= "js/users.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const usersDB = request.response;
    usersDB.map(elm =>{
        users.push(new user(elm))
        
    })
}

usersDisponibles.addEventListener('click', (e) =>{
    e.preventDefault()
    modalUsuarios.innerHTML =""
    users.forEach(element => {
        modalUsuarios.innerHTML += `<p style=" font-size: 1.3rem;"> ${element.usuario} ${element.password} </p>`
    });
})


inputUser.addEventListener('change', (e)=>{
    let user = e.target.value
    let es = users.filter(s => s.usuario === user)
    if(es.length === 1){
        userArray = []
        userArray.push(es[0].usuario, 2)
        errorUser.innerHTML = ""
    }
    if(es.length == 0){
        userArray = []
        errorUser.innerHTML = `
            <div class="sesion__error"><p> Error en nombre de usuario! </p></div>
        `   
        userArray.push([])
    }

    // pasa.push(es[0].password)
    inicioSesion(user)
})
inputpassword.addEventListener('change', (e)=>{
    let contraseña = e.target.value
    let filtradoPass = users.filter(s => s.password === contraseña)
    if(filtradoPass.length === 1){
        passArray = []
        passArray.push(filtradoPass[0].usuario, 2)
        errorPass.innerHTML = ""
    }
    if(filtradoPass.length == 0){
        passArray = []
        errorPass.innerHTML = `
        <div class="sesion__error"><p> Error en la contraseña del usuario! </p></div>
    `   
        passArray.push([])
    }

    // pasa.push(es[0].password)
    inicioSesion(user)
})

function inicioSesion(){
    $('#btnIniciosesion').click((e) =>{
        e.preventDefault()
        if((userArray.length === 2) && (passArray.length === 2)){
            backgroundSesion.classList.add('no-view')
            
            nameUsuario.innerHTML = `<p class="sesion__user">${userArray[0]}</p>`
        }else {
            backgroundSesion.classList.remove('no-view')
        }
        
    })
}
inicioSesion()



