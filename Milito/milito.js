function generarform(){
    var ingresar=document.getElementById("formu");
    ingresar.style.backgroundColor="rgb(47, 79, 79)";
    ingresar.style.margin="155px";
    ingresar.style.marginTop="10px";


    const Nom=document.createElement("label");
    Nom.setAttribute("for","Nombre");
    txt = document.createTextNode("Nombre");
    Nom.appendChild(txt);
    ingresar.appendChild(Nom);

    const ingNombre=document.createElement("input");
    ingNombre.type="text";
    ingNombre.id="Nombre";
    ingNombre.name="Nombre";
    ingNombre.required="True";
    ingresar.appendChild(ingNombre);

    ingresar.innerHtml+="<br><br>";

    const correo=document.createElement("label");
    correo.setAttribute("for","correo");
    txt2 = document.createTextNode("Ingresar su Correo Electronico");
    correo.appendChild(txt2);
    ingresar.appendChild(correo);

    const ingcorreo= document.createElement("input");
    ingcorreo.type="email";
    ingcorreo.id="Correo";
    ingcorreo.name="Correo";
    ingcorreo.required="True";
    ingresar.appendChild(ingcorreo);

    ingresar.innerHtml+="<br><br>";

    const mensaje=document.createElement("label");
    mensaje.setAttribute("for","mensaje");
    txt3 = document.createTextNode("Enviame un mensaje de saludo");
    mensaje.appendChild(txt3);
    ingresar.appendChild(mensaje);

    ingresar.innerHtml+="<br><br><br>";

    const envMensaje=document.createElement("textarea");
    envMensaje.id="Mensaje";
    envMensaje.name="Mensaje";
    envMensaje.required="True";
    ingresar.appendChild(envMensaje);

    ingresar.innerHtml+="<br><br><br>";

    const bEnvio=document.createElement("input");
    bEnvio.type="button";
    bEnvio.id="enviobt";
    bEnvio.name="enviobt";
    bEnvio.value="Envio de informacion";
    bEnvio.onclick = Dtosenviados;
    ingresar.appendChild(bEnvio);

}

function Dtosenviados(){
    var nombre=document.getElementById("Nombre").value;
    var correo=document.getElementById("Correo").value;
    var mensaje=document.getElementById("Mensaje").value;

    window.location.href="DatosMilo.html" +
    "?nombre= " + encodeURIComponent(nombre) +
    "&correo= " + encodeURIComponent (correo) + 
    "&mensaje= " + encodeURIComponent(mensaje);
}


function getUrlVars(){
    var vars= {};
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

function rDatos(){
    var params = getUrlVars();
    var nom = decodeURIComponent(params["nombre"]);
    var cor = decodeURIComponent(params["correo"]);
    var men = decodeURIComponent(params["mensaje"]);

    var dats = document.getElementById("data");
    const texto = document.createElement("p");
    texto.className="dats";
    var contenid = "<b> Nombre: </b>" +nom+ "<br><br><b> Correo electronico: </br>" +cor+
    "<br><br><b> Mensaje: </b>" +men;
    texto.innerHTML=contenid;
    dats.appendChild(texto);
    
}

function irInicio(){
    window.location.href = "./../index.html";
}