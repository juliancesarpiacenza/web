// Formulario de abajo de todo: "No soy afiliado, me quiero asesorar"
const formAbajo = document.getElementById("contactForm");
const patologiaContainerAbajo = document.getElementById("patologia-container"); // contenedor del textarea
let origenFormAbajo = "NO SOY AFILIADO, ME QUIERO ASESORAR";

// Ocultar el recuadro de patología al inicio
patologiaContainerAbajo.classList.remove("show");

// Mostrar/ocultar aclaración de patología según opción
const radiosAbajo = document.querySelectorAll('input[name="patologia"]');
radiosAbajo.forEach(radio => {
  radio.addEventListener("change", function() {
    if (this.value === "si") {
      patologiaContainerAbajo.classList.add("show"); // muestra textarea solo si SI
    } else {
      patologiaContainerAbajo.classList.remove("show"); // oculta si NO
    }
  });
});

// Enviar formulario por WhatsApp
formAbajo.addEventListener("submit", function(e){
  e.preventDefault();
  let nombre = document.getElementById("nombreApellido").value;
  let telefono = document.getElementById("telefono").value;
  let edad = document.getElementById("edad").value;
  let mensaje = document.getElementById("mensaje").value;
  let patologia = document.querySelector('input[name="patologia"]:checked').value;

  let url = `https://wa.me/3417467042?text=Origen: ${origenFormAbajo}. Hola, soy ${nombre}, tengo ${edad} años. 
Teléfono: ${telefono}. 
¿Patología?: ${patologia}. 
${mensaje}`;
  
  window.open(url, "_blank");
});

// Mostrar/ocultar aclaración de patología
const patologiaContainer = document.getElementById("patologia-container");

// Oculto al inicio
patologiaContainer.style.display = "none";

// Radios
const radios = document.querySelectorAll('input[name="patologia"]');

radios.forEach(radio => {
  radio.addEventListener("change", function() {
    if (this.value === "si") {
      patologiaContainer.style.display = "block"; // aparece solo si SI
    } else {
      patologiaContainer.style.display = "none";  // desaparece si NO
    }
  });
});

radios.forEach(radio => {
  radio.addEventListener("change", function() {
    if (this.value === "si") {
      patologiaContainer.classList.add("show");
    } else {
      patologiaContainer.classList.remove("show");
    }
  });
});

// Abrir modal al click
const asesorBtn = document.querySelector(".btn-asesor");
const asesorModal = document.getElementById("asesorModal");
const closeAsesor = document.getElementById("closeAsesorModal");

asesorBtn.addEventListener("click", function(e) {
  e.preventDefault();
  asesorModal.style.display = "flex";
});

// Cerrar modal
closeAsesor.addEventListener("click", () => {
  asesorModal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target == asesorModal) {
    asesorModal.style.display = "none";
  }
});

// Formulario dentro del modal
let origenFormulario = "";

// Abrir modal "Me quiero asesorar"
asesorBtn.addEventListener("click", function(e) {
  e.preventDefault();
  origenFormulario = "NO SOY AFILIADO, ME QUIERO ASESORAR";
  asesorModal.style.display = "flex";
});

// Botón "Busco un descuento" del modal afiliados
document.getElementById('descuentoWhatsapp').addEventListener('click', function(){
  document.getElementById('afiliadoModal').style.display = 'none';
  origenFormulario = "BUSCO UN DESCUENTO";
  asesorModal.style.display = 'flex';
});

// Enviar formulario dentro del modal
document.getElementById("asesorForm").addEventListener("submit", function(e){
  e.preventDefault();
  let nombre = document.getElementById("modalNombreApellido").value;
  let telefono = document.getElementById("modalTelefono").value;
  let edad = document.getElementById("modalEdad").value;
  let mensaje = document.getElementById("modalMensaje").value;
  let patologia = document.querySelector('input[name="modalPatologia"]:checked').value;

  // Armar mensaje incluyendo el origen
  let url = `https://wa.me/3417467042?text=Origen: ${origenFormulario}. Hola, soy ${nombre}, tengo ${edad} años. 
Teléfono: ${telefono}. 
¿Patología?: ${patologia}. 
${mensaje}`;
  
  window.open(url, "_blank");
});

// Mostrar/ocultar aclaración de patología en modal
const modalRadios = document.querySelectorAll('input[name="modalPatologia"]');
const modalPatologiaContainer = document.getElementById("modalPatologiaContainer");

modalRadios.forEach(radio => {
  radio.addEventListener("change", function() {
    if (this.value === "si") {
      modalPatologiaContainer.classList.add("show");
    } else {
      modalPatologiaContainer.classList.remove("show");
    }
  });
});

// Mostrar pop-up antes de cerrar pestaña
let exitPopupShown = false;

window.addEventListener("beforeunload", function(e) {
  if (!exitPopupShown) {
    e.preventDefault();
    e.returnValue = "";
    showExitPopup();
    return "";
  }
});

function showExitPopup() {
  exitPopupShown = true;
  document.getElementById("exitPopup").style.display = "flex";
}

// Cerrar pop-up
document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("exitPopup").style.display = "none";
});

// Mostrar/ocultar aclaración de patología en pop-up
const exitRadios = document.querySelectorAll('input[name="exitPatologia"]');
const exitPatologiaContainer = document.getElementById("exitPatologiaContainer");
exitRadios.forEach(radio => {
  radio.addEventListener("change", function() {
    if (this.value === "si") {
      exitPatologiaContainer.classList.add("show");
    } else {
      exitPatologiaContainer.classList.remove("show");
    }
  });
});

// Enviar formulario pop-up por WhatsApp
document.getElementById("exitForm").addEventListener("submit", function(e){
  e.preventDefault();
  let nombre = document.getElementById("exitNombre").value;
  let telefono = document.getElementById("exitTelefono").value;
  let edad = document.getElementById("exitEdad").value;
  let mensaje = document.getElementById("exitMensaje").value;
  let patologia = document.querySelector('input[name="exitPatologia"]:checked').value;
  let url = `https://wa.me/3417467042?text=Hola, soy ${nombre}, tengo ${edad} años. Teléfono: ${telefono}. ¿Patología?: ${patologia}. ${mensaje}`;
  window.open(url, "_blank");
});

// Abrir modal al hacer clic en "YA SOY AFILIADO"
document.querySelector('.btn-secundario').addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('afiliadoModal').style.display = 'flex';
});

// Cerrar modal con la X
document.getElementById('closeAfiliadoModal').addEventListener('click', function(){
  document.getElementById('afiliadoModal').style.display = 'none';
});

// Cerrar modal haciendo clic fuera del recuadro
window.addEventListener('click', function(e){
  const modal = document.getElementById('afiliadoModal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Redirecciones de botones dentro del modal
document.getElementById('otraGestion').addEventListener('click', function(){
  window.location.href = 'https://www.prevencionsalud.com.ar/app-autogestion';
});


// Botón "Busco un descuento" del modal afiliados
document.getElementById('descuentoWhatsapp').addEventListener('click', function(){
  // Cerrar modal de afiliados
  document.getElementById('afiliadoModal').style.display = 'none';
  // Abrir modal de asesor (el mismo que se usa en "Me quiero asesorar")
  document.getElementById('asesorModal').style.display = 'flex';
});


