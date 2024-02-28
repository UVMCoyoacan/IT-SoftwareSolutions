
function enviar()
{
  
    const parametros = new URLSearchParams(window.location.search);
    var nombre=decodeURIComponent(parametros.get('nombre'));
    var mensaje=decodeURIComponent(parametros.get('email'));
    var correo=decodeURIComponent(parametros.get('mensaje'));
    
    //alert(nombre+", "+correo+", "+mensaje);
    var conte=document.getElementById("contenedor");
    var hnombre=document.createElement("p");
    var pcorreo=document.createElement("p");
    var pmensaje=document.createElement("p");
    hnombre.innerHTML="Nombre: "+nombre;
    pcorreo.innerHTML="Correo: "+correo;
    pmensaje.innerHTML="Mensaje: "+mensaje;

    conte.appendChild(hnombre);
    conte.appendChild(pcorreo);
    conte.appendChild(pmensaje);
}
function getUrlVars() {
    var vars = {};
    var url=decodeURI(window.location.href);
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }