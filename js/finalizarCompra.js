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
    totalPrecio.innerHTML = `<p class="p__cards p__preciototal">Precio total: $${precio} </p>`
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
    const errorMsg = document.querySelector('#errorMs')
    const envioDireccion = document.querySelector('#envioDireccion') 
    let provinciaStatus = document.querySelector('#provincia')
    let ciudadStatus = document.querySelector('#ciudad')
    let postalStatus = document.querySelector('#postal')
    let calleNumberStatus = document.querySelector('#calleNumero')
    
    $('#provincia').change((e) =>{
        let provincia = e.target.value
        console.log(provincia)
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
           console.log( validacionArray.splice(2, 1))
          
            
            postalStatus.classList.remove('okInput')
        }
    })
    console.log(validacionArray)
    $('#calleNumero').change((e) =>{
        let calleNumber = e.target.value
        
        if(calleNumber != ""){
            calleNumberStatus.classList.add('okInput')
            validacionArray.push('calleOk')
        }else{
            calleNumberStatus.classList.remove('okInput')

            
        }
    })

    envioDireccion.addEventListener('click', (e) =>{
            e.preventDefault()
            console.log(validacionArray)
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
    const rapipago = document.querySelector('#rapipago')
    rapipago.addEventListener('click', (e) =>{
        appendMetodosefectivo.innerHTML = ` <div  class="btn__card2">
        <a id="btnpago" href="#">Generar boleta de pago</a>
    </div>
        `  
        appendCodigopago.innerHTML = "" 
        const btnpago = document.querySelector('#btnpago')
        btnpago.addEventListener('click', (e) =>{
            e.preventDefault()
            appendCodigopago.innerHTML = `<div class="codigo__card2">
            <p>Su codigo de pago es:</p>
            <p>Por favor conserve el ticket de pago, por su seguridad y la nuestra</p>
        </div>
            `        
        })     
    })
    const pagofacil = document.querySelector('#pagofacil')
    pagofacil.addEventListener('click', (e) =>{
        
        appendMetodosefectivo.innerHTML = ` <div  class="btn__card2">
        <a id="btnpago" href="#">Generar boleta de pago</a>
    </div>
        ` 
        appendCodigopago.innerHTML = ""
        const btnpago = document.querySelector('#btnpago')
        btnpago.addEventListener('click', (e) =>{
            e.preventDefault()
            
            appendCodigopago.innerHTML = `<div class="codigo__card2">
            <p>Su codigo de pago es:</p>
            <p>Por favor conserve el ticket de pago, por su seguridad y la nuestra</p>
        </div>
            `        
        })          
    })
})

class tarjetas {
    constructor({numero, nombretitular, vencimiento, cvv}){
        this.numero = numero
        this.nombretitular = nombretitular
        this.vencimiento = vencimiento
        this.cvv = cvv
    }
}
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
    appendCodigopago.innerHTML = ""
    appendMetodosefectivo.innerHTML = ""
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
</div>
    `
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
            console.log(validacionForm2)
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
            console.log(validacionForm2)
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
            console.log(validacionForm2)
        }else{
            let busqueda = validacionForm2.indexOf("cvv ok")
            if(busqueda != -1){
                validacionForm2.splice(busqueda, 1)
            }else{
               
            }
            
            
            $("#cvv").removeClass('okInput')
        }
    })
    $('#btnPagardebito').click((e) =>{
        console.log(validacionForm2)
        console.log(e)
        if(validacionForm2.length == 4){
            appendPago.innerHTML = `    
            <div class="form__background sesion__form"></div>
            <p  class="session__pagoConfirmado"><img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" class="img__confirmacion" alt=""> Su pago de ${precio} fue procesado con exito! Sera redireccionado al inicio.</p>
            
            `
        }
    })   
})


// PROCESO CREDITO

$("#btnSalircuotas").click((e) =>{
    $('#cuotasBackground').addClass('no-view')
})

tarjetaCredito.addEventListener('click', (e) =>{
    appendCodigopago.innerHTML = ""
    appendMetodosefectivo.innerHTML = ""
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
</div>
    `
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
            console.log(validacionForm2)
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
            console.log(validacionForm2)
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
            console.log(validacionForm2)
        }else{
            let busqueda = validacionForm2.indexOf("cvv ok")
            if(busqueda != -1){
                validacionForm2.splice(busqueda, 1)
            }else{
               
            }            
            $("#cvv").removeClass('okInput')
        }
    })
    $("#btnEstimador").click((e) =>{
        $('#cuotasBackground').removeClass('no-view')
    })
    $('#cantidadCuotas').click((e) =>{
        let cuotas = e.target.value
        if(cuotas != ""){
            let busqueda = validacionForm2.indexOf("cuotas Ok")
            if(busqueda != -1){
                validacionForm2.splice(busqueda, 1)
            }else{
               
            }
            validacionForm2.unshift("cuotas Ok")
            let iva = (precio*21)/100;
            let intereses
            let resultadototal
            let preciototal
            precioTotalArray = []
            switch(cuotas){
                        case "3":
                            console.log("elegio 3")
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
            
        }
    })

    $('#btnPagarcredito').click((e) =>{
        console.log(validacionForm2)
        console.log(e)
        if(validacionForm2.length == 5){
            appendPago.innerHTML = `    
            <div class="form__background sesion__form"></div>
            <p  class="session__pagoConfirmado"><img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" class="img__confirmacion" alt=""> Su pago de ${precioTotalArray} con interes por pagar en cuotas, fue procesado con exito! Sera redireccionado al inicio.</p>
            
            `
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



