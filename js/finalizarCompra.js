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
modalUsuarios
function crearPrecio(){
    totalPrecio.innerHTML = `<p class="p__cards p__preciototal">Precio total: $${precio} </p>`
}
crearPrecio()
console.log(precio)   
retiro.addEventListener('click', (e) =>{
    appendMetodo.innerHTML = `<div class="form__retirar"></div>
    <p class="p__cards p__retirar"> Muy bien! Nuestra direccion es xxxx, numero xxx y estamos de 8AM a 8PM de corrido. Por Favor llevar numero de guia.</p>
    `
})
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
        <input type="text" placeholder="Depto y piso(opcional)">
        <input id="envioDireccion" class="submit__card1" type="submit">
    </form></p>
    `
    const envioDireccion = document.querySelector('#envioDireccion') 
    envioDireccion.addEventListener('click', (e) =>{
            e.preventDefault()
            appendMetodo.innerHTML = `
            <div class="confimacion__background"></div>
            <p class="p__direccionConfirmada"><img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" class="img__confirmacion" alt="">  Su direccion ha sido confirmada con exito! </p>
            `        
        })     
})

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
debito.addEventListener('click', (e) =>{
    appendCodigopago.innerHTML = ""
    appendMetodosefectivo.innerHTML = ""
    appendPago.innerHTML = `    
    <div class="form__background">
                    </div>
    <div class="formulario__card2">
    <label class="label__card1" for="tarjetaNum">Numero de la tarjeta</label>
    <input id="tarjetaNum" placeholder="Numero de la tarjeta" type="text">
    <label class="label__card1"  for="nombreTitular" >Nombre del titular</label>
    <input id="nombreTitular" placeholder="Nombre del titular" type="text">
    <label class="label__card1"  for="vencimiento">Vencimiento</label>
    <input id="vencimiento" placeholder="Vencimiento" type="number">
    <label class="label__card1"  for="cvv">Codigo de seguridad</label>
    <input id="cvv" placeholder="CVV" type="text">
    <button  class="submit__card1" type="submit"> Pagar </button>
</div>
    `
})
tarjetaCredito.addEventListener('click', (e) =>{
    appendCodigopago.innerHTML = ""
    appendMetodosefectivo.innerHTML = ""
    appendPago.innerHTML = `
    <div class="form__background">
                    </div>
     <div class="formulario__card2">
    <label class="label__card1" for="tarjetaNum">Numero de la tarjeta</label>
    <input id="tarjetaNum" placeholder="Numero de la tarjeta" type="text">
    <label class="label__card1"  for="nombreTitular" >Nombre del titular</label>
    <input id="nombreTitular" placeholder="Nombre del titular" type="text">
    <label class="label__card1"  for="vencimiento">Vencimiento</label>
    <input id="vencimiento" placeholder="Vencimiento" type="number">
    <label class="label__card1"  for="cvv">Codigo de seguridad</label>
    <input id="cvv" placeholder="CVV" type="text">
    <label class="label__card1"  for="cvv">Cuotas</label>
    <select class="select__card2" name="cvv" id="cantidadCuotas">
        <option value="">Elija cantidad de cuotas</option>
        <option value="">3</option>
        <option value="">6</option>
        <option value="">9</option>
        <option value="">12</option>
    </select>
    <button  class="submit__card1" type="submit"> Pagar </button>
</div>
    `
})


let users = []
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
    const productosDB = request.response;
    productosDB.map(elm =>{
        users.push(new user(elm))
        
    })
}
console.log(users)

usersDisponibles.addEventListener('click', (e) =>{
    e.preventDefault()
    modalUsuarios.innerHTML =""
    users.forEach(element => {
        modalUsuarios.innerHTML += `<p style=" font-size: 1.3rem;"> ${element.usuario} ${element.password} </p>`
    });
})

let userArray = []
let passArray = []
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
        console.log(userArray)
        console.log(passArray)
        if((userArray.length === 2) && (passArray.length === 2)){
            backgroundSesion.classList.add('no-view')
            
            nameUsuario.innerHTML = `<p class="sesion__user">${userArray[0]}</p>`
        }else {
            backgroundSesion.classList.remove('no-view')
        }
        
    })
}
inicioSesion()

// ----------------------------- CODIGO A UTILIZAR A FUTURO ---------------------------

// function sumadeproductos(){
//     sumapr()
//     cuotasEfectivo()
// }
// function cuotasEfectivo(){
//     trueofalse = true
//     let resultado = (suma*15)/100;
//     alert("Muy buena eleccion! Recuerde que tenemos una oferta de un 15% del valor total de la pc si la compra en efectivo!")
//     while(trueofalse){
//     let cuotasoefectivo = prompt("Ahora que tipo de pago quieres, ¿Cuotas o efectivo?").toUpperCase()
//        switch(cuotasoefectivo){
//             case "EFECTIVO":
//                 entrada = "EFECTIVO"
//                 alert(`Muy bien vamos a efectuar el pago`)
//                 document.getElementById('EFECTIVO').innerHTML = `GeekInformatica.SA <br>CUIT: 4239205884 <br> ING.BR: 1017936-4 <br> Formosa 127 <br> Ticket generado: 2041290 <br> Fecha: 22/03/2021 Hora: 16.40 <br> paga ${suma-resultado}`;
//                 document.getElementById('EFECTIVO2').innerHTML = `Bien su computadora esta compuesta por lo siguientes componentes: <br>
//                 ${pcCaritoNombre.toString()}`;
                
//             break;
//             case "CUOTAS":
//                 entrada = "CUOTAS"
//                 cuotas()
//             break;
//             default: alert("Elegi una opcion valida");
//             break;
//         }
//         if(entrada == cuotasoefectivo){
//             trueofalse = false;
//         }
//     }
// }
// function cuotas(){
//     trueofalse = true
//     iva21 = (suma*21)/100;
//     while(trueofalse){
    
//     let cuotas = prompt("Podemos darle los siguientes planes de cuotas: \n3 cuotas \n6 cuotas \n9 cuotas \n12 cuotas")
//     switch(cuotas){
//         case "3":
//         entrada = "3"
//         intereses = (suma*6)/100;
//         resultadototal = (suma+iva21+intereses)/3
//         preciototal = suma+iva21+intereses
//         alert(`Aca esta su plan de pago. Quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
//         alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
//         aceptaono()
//         break;
        
//         case "6":
//             entrada = "6"
//             intereses = (suma*8)/100;
//             resultadototal = (suma+iva21+intereses)/6
//             preciototal = suma+iva21+intereses
//             alert(`Aca esta su plan de pago. Quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
//             alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
//             aceptaono()
//             break;
        
//         case "9":
//             entrada = "9"
//             intereses = (suma*11)/100;
//             resultadototal = (suma+iva21+intereses)/9
//             preciototal = suma+iva21+intereses
//             alert(`Aca esta su plan de pago. Quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
//             alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
//             aceptaono()
//             break;

//         case "12":
//             entrada = "12"
//             intereses = (suma*13)/100;
//             resultadototal = (suma+iva21+intereses)/12
//             preciototal = suma+iva21+intereses
//             alert(`Aca esta su plan de pago. Quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
//             alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
//             aceptaono()
//             break;
   
//             default: alert("Elegi una opcion valida");
//             break;
//         }
//         if(entrada == cuotas){
//             trueofalse = false;
//         }
//     }
// }
// function aceptaono(){
//     trueofalse = true

//     while (trueofalse){
//     trueofalse = true
//     let propuesta = prompt("¿Quiere usted la computadora armada?").toUpperCase()
//         switch(propuesta){
//             case "SI":
//                 alert(`Bien vamos a hacer todo el pago.`)
//                 entrada = "SI"
//                 contrato()
//                 break;

//             case "NO":
//                 alert(`Bueno no hay problema, esperemos que regrese pronto`)
//                 entrada = "NO"
//             break;
//             default: alert("Elegi una opcion valida");
//             break;
//         }
//         if(entrada == propuesta){
//             trueofalse = false;
//     }
// }}
// function contrato(){
//     document.getElementById('CUOTAS2').innerHTML =  `Aca esta su plan de pago. la pc quedaria en un total de ${preciototal} \nLa cuota quedaria en ${resultadototal} <br> Iva ${iva21} <br> Interes de la cuota ${intereses} <br> El pago se realizara todos los dias 7 de cada mes.`;
//     listaPC()
// }
// function listaPC(){
//     document.getElementById('PCLIST').innerHTML = `Bien su computadora va a estar compuesta por lo siguientes componentes: <br>${pcCaritoNombre.toString()} `;
// }
// function cuotasEfectivonormal(){
//     sumapr()
//     alert("Muy buena eleccion! vamos a proceder al pago")
//     while(trueofalse){
//     let cuotasoefectivo = prompt("Ahora que tipo de pago quieres, ¿Cuotas o efectivo?").toUpperCase()
//        switch(cuotasoefectivo){
//             case "EFECTIVO":
//                 entrada = "EFECTIVO"
//                 alert(`Muy bien vamos a proceder al pago`)
//                 document.getElementById('EFECTIVO').innerHTML = `GeekInformatica.SA <br>CUIT: 4239205884 <br> ING.BR: 1017936-4 <br> Formosa 127 <br> Ticket generado: 2041290 <br> Fecha: 22/03/2021 Hora: 16.40 <br> Lista de productos: <br> ${arrayNombresFinal.toString()}<br> paga ${suma}`;
                
//             break;
//             case "CUOTAS":
//                 entrada = "CUOTAS"
//                 cuotasnormal()
//             break;
//             default: alert("Elegi una opcion valida");
//             break;
//         }
//         if(entrada == cuotasoefectivo){
//             trueofalse = false;
//         }
//     }
       
        
// }
// function cuotasnormal(){
//     iva21 = (suma*21)/100;
//     while(trueofalse){
    
//     let cuotas = prompt("Podemos darle los siguientes planes de cuotas: \n3 cuotas \n6 cuotas \n9 cuotas \n12 cuotas")
//     switch(cuotas){
//         case "3":
//         entrada = "3"
//         intereses = (suma*6)/100;
//         resultadototal = (suma+iva21+intereses)/3
//         preciototal = suma+iva21+intereses
//         alert(`Aca esta su plan de pago. quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
//         alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
//         aceptaononormal()
//         break;
        
//         case "6":
//             entrada = "6"
//             intereses = (suma*8)/100;
//             resultadototal = (suma+iva21+intereses)/6
//             preciototal = suma+iva21+intereses
//             alert(`Aca esta su plan de pago. quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
//             alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
//             aceptaononormal()
//             break;
        
//         case "9":
//             entrada = "9"
//             intereses = (suma*11)/100;
//             resultadototal = (suma+iva21+intereses)/9
//             preciototal = suma+iva21+intereses
//             alert(`Aca esta su plan de pago. quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
//             alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
//             aceptaononormal()
//             break;

//         case "12":
//             entrada = "12"
//             intereses = (suma*13)/100;
//             resultadototal = (suma+iva21+intereses)/12
//             preciototal = suma+iva21+intereses
//             alert(`Aca esta su plan de pago. quedaria en un total de ${preciototal} \nla cuota en ${resultadototal} \nIva ${iva21} \nInteres de la cuota ${intereses} \nEl pago se realizara todos los dias 7 de cada mes.`)
//             alert("De igual manera se lo dejaremos de forma escrita para que se lo pueda llevar")
//             aceptaononormal()
//             break;
//             default: alert("Elegi una opcion valida");
//             break;
//         }
//         if(entrada == cuotas){
//             trueofalse = false;
//         }
//     }
// }

// function aceptaononormal() {
//     while (trueofalse){
//     let propuesta = prompt("¿Acepta el plan?").toUpperCase()
//         switch(propuesta){
//             case "SI":
//                 alert(`Muy bien, que disfrute su compra`)
//                 contratonormal()
//                 entrada = "SI"
//                 break;

//             case "NO":
//                 alert(`Bueno no hay problema, esperemos que regrese pronto`)
//                 entrada = "NO"
//             break;
//             default: alert("Elegi una opcion valida");
//             break;
//         }
//         if(entrada == propuesta){
//             trueofalse = false;
//     }
// }}
// function contratonormal(){
//     document.getElementById('EFECTIVO').innerHTML = `Lista de productos: <br> ${arrayNombresFinal.toString()}<br> valor sin iva ni intereses ${suma}`;
//     document.getElementById('CUOTAS').innerHTML = `El plan de pago quedaria en un total de ${preciototal} \nLa cuota quedaria en ${resultadototal} <br> Iva ${iva21} <br> Interes de la cuota ${intereses} <br> El pago se realizara todos los dias 7 de cada mes.`;
// }
// comercio()





