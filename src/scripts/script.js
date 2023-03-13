var n=0;
function cambia(){
    var regimen;
    regimen = document.formulario.regimen[document.formulario.regimen.selectedIndex].value;
    if(regimen!=0){
        if(regimen==1){
            if(n==1){
                document.getElementById("eliminar").outerHTML = "";
                document.getElementById("eliminar").outerHTML = "";
                n=n-1;
            }
            var constancia = document.getElementById('constancia');
            constancia.insertAdjacentHTML('afterbegin','<p id="eliminar" class="texto texto--importante"><span class="titulo__span">Importante:</span> Deben registrar tus datos tal y como se presentan en tu constancia de situación fiscal.</p>');
            constancia.insertAdjacentHTML('afterbegin','<img id="eliminar" class="imagen" src="src/img/Fisica.png">');
            localStorage.setItem("regimen",regimen);
            n=n+1;
        }
        else if(regimen==2){
            if(n==1){
                document.getElementById("eliminar").outerHTML = "";
                document.getElementById("eliminar").outerHTML = "";
                n=n-1;
            }
            var constancia = document.getElementById('constancia');
            constancia.insertAdjacentHTML('afterbegin','<p id="eliminar" class="texto texto--importante"><span class="titulo__span">Importante:</span> Deben registrar tus datos tal y como se presentan en tu constancia de situación fiscal.</p>');
            constancia.insertAdjacentHTML('afterbegin','<img id="eliminar" class="imagen" src="src/img/Moral.png">');
            localStorage.setItem("regimen",regimen);
            n=n+1;
        }
    }else{
        document.getElementById("eliminar").outerHTML = "";
    }
}

function manda(){
    var modo;
    modo = document.formularioPago.modo[document.formularioPago.modo.selectedIndex].value;
    if(modo==1){
        window.location.href = "captura_datos_caja.html";
    }
    else if(modo==2){
        window.location.href = "captura_datos_municipio_linea.html";
    }else if(modo==3){
        window.location.href = "captura_datos_oxxo.html";
    }else if(modo==4){
        window.location.href = "captura_datos_banorte.html";
    }else if(modo==5){
        window.location.href = "captura_datos_banregio.html";
    }else if(modo==6){
        window.location.href = "captura_datos_afirme.html";
    }
}

function manda_consulta(){
    var modo_consulta;
    modo_consulta = document.formularioPago.modo[document.formularioPago.modo.selectedIndex].value;
    if(modo_consulta==1){
        window.location.href = "consulta_factura_caja.html";
    }
    else if(modo_consulta==2){
        window.location.href = "consulta_factura_municipio_linea.html";
    }else if(modo_consulta==3){
        window.location.href = "consulta_factura_oxxo.html";
    }else if(modo_consulta==4){
        window.location.href = "consulta_factura_banorte.html";
    }else if(modo_consulta==5){
        window.location.href = "consulta_factura_banregio.html";
    }else if(modo_consulta==6){
        window.location.href = "consulta_factura_afirme.html";
    }
}

function obtener_localstorage(){

    if(localStorage.getItem("regimen")){
        let opcion = localStorage.getItem("regimen");
        if(opcion==1){
            window.location.href = "registro_datos_fisica.html";
        }else if(opcion==2){
            window.location.href = "registro_datos_moral.html";
        }
    }else{
        window.location.href = "index.html";
    }
}

