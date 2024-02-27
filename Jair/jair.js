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
    var nombreDiv = document.createElement('div');
    nombreDiv.innerHTML = '<label class="lb_form" for="nombre">Nombre: </label><input type="text" class="Formulario" id="nombre" name="nombre" required>';
    var emailDiv = document.createElement('div');
    emailDiv.innerHTML = '<label class="lb_form" for="email">Email: </label><input type="email" class="Formulario" id="email" name="email" required>';

    var mensajeDiv = document.createElement('div');
    mensajeDiv.innerHTML = '<label class="lb_form" for="mensaje">Mensaje: </label><textarea  class="Formulario" id="mensaje" name="mensaje" rows="4" required ></textarea>';

    var btn_enviar = document.createElement('button');
    btn_enviar.type='submit';
    btn_enviar.textContent='Enviar';
    btn_enviar.className="Boton";

    form.appendChild(nombreDiv);
    form.appendChild(emailDiv);
    form.appendChild(mensajeDiv);
    form.appendChild(btn_enviar);

    contenedor.appendChild(form);
    

}
