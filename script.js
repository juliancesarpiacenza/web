// Formulario por WhatsApp
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  let nombre = document.getElementById("nombreApellido").value;
  let telefono = document.getElementById("telefono").value;
  let edad = document.getElementById("edad").value;
  let mensaje = document.getElementById("mensaje").value;
  let patologia = document.querySelector('input[name="patologia"]:checked').value;

  let url = `https://wa.me/3417467042?text=Hola, soy ${nombre}, tengo ${edad} años. 
  Teléfono: ${telefono}. 
  ¿Patología?: ${patologia}. 
  ${mensaje}`;
  
  window.open(url, "_blank");
});

// Mostrar/ocultar aclaración de patología
const radios = document.querySelectorAll('input[name="patologia"]');
const patologiaContainer = document.getElementById("patologia-container");

radios.forEach(radio => {
  radio.addEventListener("change", function() {
    if (this.value === "si") {
      patologiaContainer.classList.add("show");
    } else {
      patologiaContainer.classList.remove("show");
    }
  });
});

