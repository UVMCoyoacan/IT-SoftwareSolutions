function mostrarFormulario()
{
    console.log("Hola mundo");
    
    var contenedor=document.getElementById("formulario");
    var form = document.createElement('form');
    form.id = 'formulario-datos';
    var nombreDiv = document.createElement('div');
    nombreDiv.innerHTML = '<label for="nombre">Nombre:</label><input type="text" id="nombre" name="nombre" required>';
    var emailDiv = document.createElement('div');
    emailDiv.innerHTML = '<label for="email">Email:</label><input type="email" id="email" name="email" required>';

    var mensajeDiv = document.createElement('div');
    mensajeDiv.innerHTML = '<label for="mensaje">Mensaje:</label><textarea id="mensaje" name="mensaje" rows="4" required></textarea>';

    var btn_enviar = document.createElement('button');
    btn_enviar.type = 'submit';
    btn_enviar.textContent = 'Enviar';

    form.appendChild(nombreDiv);
    form.appendChild(emailDiv);
    form.appendChild(mensajeDiv);
    form.appendChild(btn_enviar);

    formularioContainer.appendChild(form);

}