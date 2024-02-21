function enviar()
{
    var nombre=getUrlVars()["nombre"];
    var correo=getUrlVars()["email"];
    var mensaje=getUrlVars()["mensaje"];
    alert(nombre+", "+correo+", "+mensaje);
    var conte=document.getElementById("contenedor");
    var hnombre=document.createElement("h1");
    var pcorreo=document.createElement("p");
    var pmensaje=document.createAttribute("p");
    hnombre.innerHTML=nombre;
    pcorreo.innerHTML=correo;
    pmensaje.innerHTML=mensaje;

    conte.appendChild(hnombre);
    conte.appendChild(pcorreo);
    conte.appendChild(pmensaje);
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }