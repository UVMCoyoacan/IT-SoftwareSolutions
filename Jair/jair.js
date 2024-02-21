function mostrarFormulario()
{
    //console.log("Hola mundo");
    
    var contenedor=document.getElementById("formulario");
    var form = document.createElement('form');
    form.id = 'formulario-datos';
    form.name='contacto';
    form.method='get';
    form.action=''     
    var nombreDiv = document.createElement('div');
    nombreDiv.innerHTML = '<label for="nombre">Nombre: </label><input type="text" id="nombre" name="nombre" required>';
    var emailDiv = document.createElement('div');
    emailDiv.innerHTML = '<label for="email">Email: </label><input type="email" id="email" name="email" required>';

    var mensajeDiv = document.createElement('div');
    mensajeDiv.innerHTML = '<label for="mensaje">Mensaje: </label><textarea id="mensaje" name="mensaje" rows="4" required></textarea>';

    var btn_enviar = document.createElement('button');
    btn_enviar.id='btn_enviar';
    btn_enviar.onclick='enviar()';


    form.appendChild(nombreDiv);
    form.appendChild(emailDiv);
    form.appendChild(mensajeDiv);
    form.appendChild(btn_enviar);

    contenedor.appendChild(form);

}
function enviar()
{
    var nombre=getUrlVars()["nombre"];
    var email=getUrlVars()["email"];
    var mensaje=getUrlVars()["mensaje"];
    alert(nombre+", "+correo+", "+mensaje);
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }