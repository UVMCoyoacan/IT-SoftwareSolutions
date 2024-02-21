function enviar()
{
    var nombre=getUrlVars()["nombre"];
    var correo=getUrlVars()["email"];
    var mensaje=getUrlVars()["mensaje"];
    alert(nombre+", "+correo+", "+mensaje);
    var conte=document.getElementById("datos");
    conte.innerHTML="Nombre: "+nombre+", Correo: "+correo+", Mensaje: "+mensaje;
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }