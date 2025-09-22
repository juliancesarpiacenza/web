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

// Pop-up al intentar salir
let popup = document.getElementById("exitPopup");
let closePopup = document.getElementById("closePopup");

window.onbeforeunload = function() {
  popup.style.display = "flex";
  return "¿Seguro que quieres salir?";
};

closePopup.onclick = function() {
  popup.style.display = "none";
};
