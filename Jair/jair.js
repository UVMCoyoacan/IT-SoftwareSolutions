function mostrarFormulario()
{
    //console.log("Hola mundo");
    document.getElementById("btn_mostrarFormulario").disabled=true;
    var contenedor=document.getElementById("formulario");
    var form = document.createElement('form');
    form.id = 'formulario-datos';
    form.name='contacto';
    form.method='get'; 
    form.action='recibirDatos.html';

    var titulo= document.createElement('h1');
    titulo.innerHTML="¡Déjanos tus datos!";

    var nombre = document.createElement('div');
    nombre.className=("div-form");
    nombre.innerHTML = '<label class="lb_form" for="nombre">Nombre: </label><input type="text" class="Formulario" id="nombre" name="nombre" required>';

    var email = document.createElement('div');
    email.className=("div-form");
    email.innerHTML = '<label class="lb_form" for="email">Email: </label><input type="email" class="Formulario" id="email" name="email" required>';

    var telefono =document.createElement("div");
    telefono.innerHTML = '<label class="lb_form" for="telefono">Teléfono: </label><input type="tel" class="Formulario" id="telefono" name="telefono" required>';

    telefono.className=("div-form");
    var mensaje = document.createElement('div');
    mensaje.className=("div-form");
    mensaje.innerHTML = '<label class="lb_form" for="mensaje">Mensaje: </label><textarea  class="Formulario" id="mensaje" name="mensaje" rows="4" required ></textarea>';

    var btn_enviar = document.createElement('button');
    btn_enviar.type='submit';
    btn_enviar.textContent='Enviar';
    btn_enviar.className="Boton";

    form.appendChild(titulo);
    form.appendChild(nombre);
    form.appendChild(email);
    form.appendChild(telefono);
    form.appendChild(mensaje);
    form.appendChild(btn_enviar);

    contenedor.appendChild(form);  
}

function enviar()
{
  
    const parametros = new URLSearchParams(window.location.search);
    var nombre=decodeURIComponent(parametros.get('nombre'));
    var correo=decodeURIComponent(parametros.get('email'));
    var mensaje=decodeURIComponent(parametros.get('mensaje'));
    var telefono=decodeURIComponent(parametros.get('telefono'));
    
    //alert(nombre+", "+correo+", "+mensaje);
    var conte=document.getElementById("contenedor");
    conte.className="seccion";
    var parrafo=document.createElement("p");
    var contenido="Nombre: "+nombre+"<br>"+"Correo: "+correo+"<br>"+"Teléfono: "+telefono+"<br>"+"Mensaje: "+mensaje+"<br>";
    parrafo.innerHTML=contenido;

    conte.appendChild(parrafo);
}
