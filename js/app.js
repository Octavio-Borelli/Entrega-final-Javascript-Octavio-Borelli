// $(document).ready(function(){ 
//     $(window).keydown(function(event){
//     if(event.keyCode == 13) {
//       event.preventDefault();
//       return false;
//     }
//   });
// });


// $(function() {
//     $(".inputsFormulario >input").on('keyup', function(e) {
//       if (e.which === 13) {
//         $(this).next('input').focus();
//       }
//     });
//   });
  


const nombreEl = document.querySelector("#inputNombre");
const apellidoEl = document.querySelector("#inputApellido");
const emailEl = document.querySelector("#inputEmail");
const dniEl = document.querySelector("#inputDni");
const direcciónEl = document.querySelector("#inputDirección");
const edadEl = document.querySelector("#inputEdad");
const teléfonoEl = document.querySelector("#inputTeléfono");
const númeroTarjetaEl= document.querySelector("#tarjeta");
const titularEl= document.querySelector("#nombreTitular");
const vencimientoEl= document.querySelector("#vencimiento");
const códigoEl= document.querySelector("#código");
const parentForm = document.querySelector("#datosFormularioCliente");


const verificarNombre =() => {

    let valid = false;

    const min = 3, max = 25;

    const nombre = nombreEl.value.trim();

    if (!isRequired(nombre)) {
        showError(nombreEl, 'Ingresar nombre');
    } else if (!isBetween(nombre.length, min, max)) {
        showError(nombreEl, `Nombre debe tener entre ${min} y ${max} caracteres.`);
    } else {
        showSuccess(nombreEl);
        valid = true;
    }
    return valid;
}

const verificarApellido = () => {

  let valid = false;

  const min = 3,
      max = 25;

  const apellido = apellidoEl.value.trim();

  if (!isRequired(apellido)) {
      showError(apellidoEl, 'Ingresar apellido');
  } else if (!isBetween(apellido.length, min, max)) {
      showError(apellidoEl, `Apellido debe tener entre ${min} y ${max} caracteres.`)
  } else {
      showSuccess(apellidoEl);
      valid = true;
  }
  return valid;
};

const verificarEmail = () => {

  let valid = false;
    
  const email = emailEl.value.trim();
    
  if (!isRequired(email)) {
        showError(emailEl, 'Ingresar email.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email inválido.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const verificarDni = () => {

  let valid = false;

  const min = 7,
      max = 10;

  const dni = dniEl.value.trim();

  if (!isRequired(dni)) {
      showError(dniEl, 'Ingresar dni');
  } else if (!isBetween(dni.length, min, max)) {
      showError(dniEl, `dni debe tener entre ${min} y ${max} caracteres.`)
  } else {
      showSuccess(dniEl);
      valid = true;
  }
  return valid;
};

const verificarDirección = () => {

  let valid = false;

  const min = 3,
      max = 25;

  const dirección = direcciónEl.value.trim();

  if (!isRequired(dirección)) {
      showError(direcciónEl, 'Ingresar dirección');
  } else if (!isBetween(dirección.length, min, max)) {
      showError(direcciónEl, `Dirección debe tener entre ${min} y ${max} caracteres.`)
  } else {
      showSuccess(direcciónEl);
      valid = true;
  }
  return valid;
};

const verificarEdad = () => {

  let valid = false;

  const min = 2,
      max = 2;

  const edad = edadEl.value.trim();

  if (!isRequired(edad)) {
      showError(edadEl, 'Ingresar edad');
  } else if (!isBetween(edad.length, min, max)) {
      showError(edadEl, `Edad debe tener entre ${min} y ${max} caracteres.`)
  } else {
      showSuccess(edadEl);
      valid = true;
  }
  return valid;
};

const verificarTeléfono = () => {

  let valid = false;

  const min = 3,
      max = 10;

  const teléfono = teléfonoEl.value.trim();

  if (!isRequired(teléfono)) {
      showError(teléfonoEl, 'Ingresar teléfono');
  } else if (!isBetween(teléfono.length, min, max)) {
      showError(teléfonoEl, `Teléfono debe tener entre ${min} y ${max} caracteres.`)
  } else {
      showSuccess(teléfonoEl);
      valid = true;
  }
  return valid;
};


const verificarNúmeroTarjeta = () => {

    let valid = false;
  
    const min = 16,
        max = 16;
  
    const númeroTarjeta = númeroTarjetaEl.value.trim();
  
    if (!isRequired(númeroTarjeta)) {
        showError(númeroTarjetaEl, 'Ingresar número válido');
    } else if (!isBetween(númeroTarjeta.length, min, max)) {
        showError(númeroTarjetaEl, `El número de la tarjeta debe contener 16 caracteres.`)
    } else {
        showSuccess(númeroTarjetaEl);
        valid = true;
    }
    return valid;
  };

  const verificarTitular = () => {

    let valid = false;
  
    const min = 3,
        max = 25;
  
    const titularTarjeta = titularEl.value.trim();
  
    if (!isRequired(titularTarjeta)) {
        showError(titularEl, 'Ingresar nombre');
    } else if (!isBetween(titularTarjeta.length, min, max)) {
        showError(titularEl, `Nombre debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(titularEl);
        valid = true;
    }
    return valid;
  };

  const verificarVencimiento = () => {

    let valid = false;
  
    const min = 5,
        max = 5;
  
    const vencimiento = vencimientoEl.value.trim();
  
    if (!isRequired(vencimiento)) {
        showError(vencimientoEl, 'Ingresar vencimiento');
    } else if (!isBetween(vencimiento.length, min, max)) {
        showError(vencimientoEl, `El vencimiento se ingresa mm/aa`)
    } else {
        showSuccess(vencimientoEl);
        valid = true;
    }
    return valid;
  };


  const verificarCódigo = () => {

    let valid = false;
  
    const min = 3,
        max = 3;
  
    const código = códigoEl.value.trim();
  
    if (!isRequired(código)) {
        showError(códigoEl, 'Ingresar código');
    } else if (!isBetween(código.length, min, max)) {
        showError(códigoEl, `El código tiene 3 caracteres.`)
    } else {
        showSuccess(códigoEl);
        valid = true;
    }
    return valid;
  };


let pases;

const btnPases = document.querySelector("#btnRegistrar");
const mensajePases = document.querySelector("#mensaje");

function verificarPases () { pases = document.querySelector('[name="inputPase"]:checked');

if (pases != null) {mensajePases.innerHTML="Opcion seleccionada. Puede continuar";}

   else{}
}

btnPases.addEventListener("click", verificarPases) 


let clases;

const btnClases = document.querySelector("#btnRegistrar");
const mensajeClases = document.querySelector("#mensaje2");

function verificarClases () { clases = document.querySelector('[name="inputClase"]:checked');

if (clases != null) {mensajeClases.innerHTML="Opcion seleccionada. Puede continuar";}

   else{}
}

btnClases.addEventListener("click", verificarClases) 


let métodos;

const btnMétodos = document.querySelector("#btnRegistrar");
const mensajeMétodos = document.querySelector("#mensaje3");

function verificarMétodos () { métodos = document.querySelector('[name="inputMétodo"]:checked');

if (métodos != null) {mensajeMétodos.innerHTML="Opcion seleccionada. Puede continuar";}

   else{}
}

btnMétodos.addEventListener("click", verificarMétodos) 


$(document).ready(function() {
    form = $('#datosFormularioCliente'); 
    form.find(':input[type="submit"]').prop('disabled', true); 
    form.find(':input').change(function() { 
       let disable = false;
       form.find(':input').not('[type="submit"]').each(function(i, el) { 
          if ($.trim(el.value) === '') {
             disable = true; 
          }
       });
       form.find(':input[type="submit"]').prop('disabled', disable);
    });
 });
 


const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isEmailValid = (email) => {
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const showError = (input, message) => {
  
  const textBox = input.parentElement;
  textBox.classList.remove('success');
  textBox.classList.add('error');
  const error = textBox.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  
  const textBox = input.parentElement;
  textBox.classList.remove('error');
  textBox.classList.add('success');
  const error = textBox.querySelector('small');
  error.textContent = '';
};


    
//---------------------------localStorage-----------------------------------

const baseClientes =[];

function guardarInputs(){

    if (
        apellidoEl.value != ""  && apellidoEl.value != null || 
        nombreEl.value != ""  &&  nombreEl.value != null ||
        emailEl.value != ""  &&  emailEl.value != null ||
        dniEl.value != ""  &&  dniEl.value != null ||
        direcciónEl.value != ""  && direcciónEl.value != null ||
        edadEl.value != ""  && edadEl.value != null ||
        teléfonoEl.value != "" &&  teléfonoEl.value != null || 
        pases.value != "" && pases.value != null ||  
        clases.value != "" && clases.value != null ||
        métodos.value != "" && métodos.value != null
          
    )
    
    {  
         const cliente = {

        apellido: apellidoEl.value,
        nombre: nombreEl.value, 
        email: emailEl.value, 
        dni: dniEl.value,
        direccion: direcciónEl.value, 
        edad: edadEl.value, 
        telefono: teléfonoEl.value,
        pases: pases.value, 
        clases: clases.value,
        métodos: métodos.value
       
        };

        baseClientes.push(cliente);
        localStorage.setItem("cliente", JSON.stringify(baseClientes));
        
        } 
        else {}};


        //---------------------------localStorage-----------------------------------


        $("#datosFormularioCliente").submit(function(evt){
        evt.preventDefault();guardarInputs()

      let guardarDni = document.querySelector("#inputDni").value;
      $("#contenidoModal").empty().append(
          `<div id="cerrar" class="btnCierreModal" onClick="refreshPage()">x</div>
           <img src="estilos/css/img/ronnie.jpg" alt="" class="responsive">
           <p><h5>Número de socio: ${guardarDni}</h5></p>`);

           $("#btnRegistrar").click(()=>{
           $("#modal").show();})
            
           $("#cerrar").click(()=>{
           $("#modal").hide();})
            

          
           });

           
           function refreshPage(){
            window.location.reload();
        }; 
        
          
    
               
//cierre del evento submit


$("#btnBuscar").click(()=>{
                

               $("#btnBuscar").click(() => { 
               $("#modalBusqueda").show();})
                
               $("#cerrarModalBusqueda").click(()=>{
               $("#modalBusqueda").hide();})


               const buscar = document.querySelector("#buscarCliente");
               const mostrarClientes = document.querySelector("#mostrar");

               const buscarClientes = async buscarJson => {
               const resultado = await fetch('js/clientes.json');
               const clientes = await resultado.json();


let clientesEncontrados = clientes.filter(dato => {
    const regex = new RegExp(`^${buscarJson}`, "gi");
    return dato.nombre.match(regex) || dato.apellido.match(regex) || 
    dato.email.match(regex) || dato.dni.match(regex) || dato.dirección.match(regex) 
    || dato.teléfono.match(regex);
});

if(buscarJson.length === 0){
    clientesEncontrados = [];
    mostrarClientes.innerHTML= '';

}
        outputHtml(clientesEncontrados);
               };

               const outputHtml = clientesEncontrados => {
                   if(clientesEncontrados.length > 0) {
                       const html = clientesEncontrados.map(
                           coincidencia => `<div class="clientes">
                                     <p>Nombre: ${coincidencia.nombre}</p>
                                     <p>Apellido: ${coincidencia.apellido}</p>
                                     <p>Email: ${coincidencia.email}</p>
                                     <p>Dni:${coincidencia.dni}</p>
                                     <p>Dirección: ${coincidencia.dirección}</p>
                                     <p>Edad: ${coincidencia.edad}</p>
                                     <p>Teléfono: ${coincidencia.teléfono}</p>
                                     <p>Clase: ${coincidencia.clase}</p>
                                     <p>Abono: ${coincidencia.abono}</p>
                                     </div>`
                       ).join('');

                       mostrarClientes.innerHTML = html;
                   }
               }

               buscar.addEventListener("input", ()=> buscarClientes(buscar.value));
                            
                 });


                 $("#pagoDebito").click(function(){
                            $("#seccionIzquierda").empty().append(
                                `<div class="seccionIzquierdaImg">
                                <p>Pago débito</p>
                                <img src="estilos/css/img/visa-debito.jpg" class="debito">
                                </div>`);
                        
                            $("#pagoDebito").click(()=>{
                            $("#modalPago").show();})
                             
                            $("#cerrarModalPago").click(()=>{
                            $("#modalPago").hide();})
                 
                            });


                $("#pagoCredito").click(function(){
                            $("#seccionIzquierda").empty().append(
                                `<div class="seccionIzquierdaImg">
                                <p>Pago crédito</p>
                                <img src="estilos/css/img/visa-credito.jpg" class="credito">
                                </div>`);
                                    
                            $("#pagoCredito").click(()=>{
                            $("#modalPago").show();})
                                         
                            $("#cerrarModalPago").click(()=>{
                            $("#modalPago").hide();})
                             
                            });
//------------------------------------------------------------------------------------
  
$(document).ready(function () {
    $("a.btnModalConfirmacionPago").click(function () {
        verificarPago()
        $(this).modal({
            fadeDuration: 200,
                    })
        return false;
      
})                                                


function verificarPago() {

        


       if (
       númeroTarjetaEl.value != ""  && númeroTarjetaEl.value != null || 
       titularEl.value != ""  &&  titularEl.value != null ||
       vencimientoEl.value != ""  &&  vencimientoEl.value != null ||
       códigoEl.value != ""  &&  códigoEl.value != null 
       )
   
           {  
            $("#contenidoModalConfirmacion").empty().append(
            `<div class="contenedorPago">
            <a href="#" rel="modal:close" class="close_modal">x</a>
            <img src="estilos/css/img/correcto.png">
            <p>Pago aceptado</p></div>`);
           
       }

        else{ 
            $("#contenidoModalConfirmacion").empty().append(
            `<div class="contenedorPago" >
            <a href="#" rel="modal:close" class="close_modal">x</a>
            <img src="estilos/css/img/error.png">
            <p>Pago rechazado</p></div>`);}
       };

       let btnBorrarModal = document.querySelector("#borrarCampos");
       let campos = document.querySelectorAll("#tarjeta,#nombreTitular,#vencimiento,#código");

           btnBorrarModal.addEventListener("click", ()=>
           {
               campos.forEach(campos => campos.value = "");
           });

        });  

    
    
    $('input').on('input', function (e){ switch (e.target.id) {
                case 'inputNombre':
                    verificarNombre();
                    break;
                case 'inputApellido':
                    verificarApellido();
                    break;
                case 'inputEmail':
                    verificarEmail();
                    break;
                case 'inputDni':
                    verificarDni();
                    break;
                case 'inputDirección':
                    verificarDirección();
                    break;
                case 'inputEdad':
                    verificarEdad();
                    break;
                case 'inputTeléfono':
                    verificarTeléfono();
                    break;
                case 'opcionDiario':
                    verificarPases();
                    break;
                case 'opcionMensual':
                    verificarPases();
                    break;
                case 'opcionAnual':
                    verificarPases();
                    break;
                case 'opcionMusculacion':
                    verificarClases();
                    break;
                case 'opcionSpinning':
                    verificarClases();
                    break;
                case 'opcionCrossfit':
                    verificarClases();
                    break;
                case 'opcionEfectivo':
                    verificarMétodos();
                    break;
                case 'opcionDebito':
                    verificarMétodos();
                    break;
                case 'opcionCredito':
                    verificarMétodos();
                    break;
                case 'tarjeta':
                    verificarNúmeroTarjeta();
                        break;
                case 'nombreTitular':
                    verificarTitular();
                        break;
                case 'vencimiento':
                    verificarVencimiento();
                        break;
                case 'código':
                    verificarCódigo();
                        break;    
        
        
                    }});
                                    