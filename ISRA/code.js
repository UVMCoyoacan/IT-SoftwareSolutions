function generarForm(){
    var formulario=document.getElementById("form");

    //Generar ingreso de label e input//
    const labelNom=document.createElement("label");
    labelNom.setAttribute("for","Nombre");
    txt = document.createTextNode("Nombre:");
    labelNom.appendChild(txt);
    formulario.appendChild(labelNom);

    formulario.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

    const cajaNombre=document.createElement("input");
    cajaNombre.type="text";
    cajaNombre.id="Nombre";
    cajaNombre.name="Nombre";
    cajaNombre.required="true";
    formulario.appendChild(cajaNombre);

    formulario.innerHTML+="<br><br>";

    const labelCorreo=document.createElement("label");
    labelCorreo.setAttribute("for","Correo");
    txt2 = document.createTextNode("Correo electrónico:");
    labelCorreo.appendChild(txt2);
    formulario.appendChild(labelCorreo);

    const cajaCorreo=document.createElement("input");
    cajaCorreo.type="email";
    cajaCorreo.id="Correo";
    cajaCorreo.name="Correo";
    cajaCorreo.required="true";
    formulario.appendChild(cajaCorreo);

    formulario.innerHTML+="<br><br>";

    const labelTelefono=document.createElement("label");
    labelTelefono.setAttribute("for","Telefono");
    txt3 = document.createTextNode("Teléfono Celular:");
    labelTelefono.appendChild(txt3);
    formulario.appendChild(labelTelefono);

    formulario.innerHTML+="&nbsp;&nbsp;&nbsp;";

    const cajaTelefono=document.createElement("input");
    cajaTelefono.type="tel";
    cajaTelefono.id="Telefono";
    cajaTelefono.name="Telefono";
    cajaTelefono.required="true";
    formulario.appendChild(cajaTelefono);

    formulario.innerHTML+="<br><br><br><br>";
    formulario.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;";
    
    const labelMensaje=document.createElement("label");
    labelMensaje.setAttribute("for","Mensaje");
    txt4 = document.createTextNode("Escriba el mensaje que desea enviar:");
    labelMensaje.appendChild(txt4);
    formulario.appendChild(labelMensaje);

    formulario.innerHTML+="<br><br>";
    formulario.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

    const cajaMensaje=document.createElement("textarea");
    cajaMensaje.id="Mensaje";
    cajaMensaje.name="Mensaje";
    cajaMensaje.rows=10;
    cajaMensaje.cols=46;
    cajaMensaje.required="true";
    formulario.appendChild(cajaMensaje);

    formulario.innerHTML+="<br><br>";
    formulario.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

    const botonEnviar=document.createElement("input");
    botonEnviar.type="button";
    botonEnviar.id="btnEnviar";
    botonEnviar.name="btnEnviar";
    botonEnviar.value="Enviar información";
    botonEnviar.onclick = enviarDatos;
    formulario.appendChild(botonEnviar);
}

function enviarDatos(){
    var nombre=document.getElementById("Nombre").value;
    var correo=document.getElementById("Correo").value;
    var telefono=document.getElementById("Telefono").value;
    var Message=document.getElementById("Mensaje").value;

    window.location.href = "datos.html" +
        "?nombre=" + encodeURIComponent(nombre) +
         "&correo=" + encodeURIComponent(correo) +
         "&telefono=" + encodeURIComponent(telefono) +
         "&Mensaje=" + encodeURIComponent(Message);
}

function getUrlVars() { //SOLO CON GET//
    var vars = {};
    //AGARRA LA URL//
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            if (vars[key]) {
                vars[key].push(value);
            } else {
                vars[key] = [value];
            }
        });
    console.log(vars);
    return vars;
}

function recibirDatos(){
    var params = getUrlVars();
    var n = decodeURIComponent(params["nombre"]);
    var c= decodeURIComponent(params["correo"]);
    var t = decodeURIComponent(params["telefono"]);
    var m = decodeURIComponent(params["Mensaje"]);

    var datos=document.getElementById("data");
    const parrafo=document.createElement("p");
    parrafo.className="datos";
    var contenido="<b>Nombre: </b>"+n+"<br><br><b>Correo electrónico: </b>"+c+
    "<br><br><b>Teléfono: </b>"+t+"<br><br><b>Mensaje: </b>"+m;
    parrafo.innerHTML=contenido;
    datos.appendChild(parrafo);

    datos.innerHTML+="<br><br>";

    const botonEnviar=document.createElement("input");
    botonEnviar.type="button";
    botonEnviar.id="btnInicio";
    botonEnviar.name="btnInicio";
    botonEnviar.value="Volver al inicio";
    botonEnviar.onclick = irInicio;
    datos.appendChild(botonEnviar);
    

}

function irInicio(){
    window.location.href = "./../index.html";
}