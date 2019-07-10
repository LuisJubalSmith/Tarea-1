window.addEventListener('load', init, false);

function init() {


    let nombreTxt = document.getElementById("nombreTxt");
    let apellidoTxt = document.getElementById("apellidoTxt")
    let edadTxt = document.getElementById("edadTxt");
    let cedulaTxt = document.getElementById("cedulaTxt");
    let generoTxt = document.getElementById("generoTxt");
    let agregarBtn = document.getElementById("agregarBtn");
    let ciudadanoStl = document.getElementById("ciudadanoStl");
    let borrarBtn = document.getElementById("borrarBtn");
    let ciudadanos = [];

    let stlpersonas;
    let sltActualizacionPersona;
    let totalPersonasRegistradas = '';

    cargaEstudiante();

    function agregar() {

        let nombre = nombreTxt.value;
        let apellido = apellidoTxt.value;
        let edad = Number(edadTxt.value);
        let cedula = Number(cedulaTxt.value);
        let genero = generoTxt.value;
        let newPersona = new Persona(nombre, apellido, edad, cedula, genero);


        ciudadanos.push(newPersona);
        console.log(ciudadanos);
        cargaEstudiante();



    }

    function identificacionUnica(cedula) {

        let unica = true;
        let totalPersonasRegistradas = ciudadanos;
        for (let j = 0; j < totalPersonasRegistradas.length; j++) {
            if (cedula == totalPersonasRegistradas[j].cedula) {
                unica = false;
                console.log(unica);
                return unica;
            }
        }
    }

    function cargaEstudiante() {

        stlpersonas = ciudadanos;
        stlpersonas.sort();

        selectCiudadanos(ciudadanoStl, stlpersonas);

    }



    function selectCiudadanos() {
        let counter = 0;
        let select = document.getElementById("ciudadanoStl");
        select.innerHTML = "";
        for (let i = counter; i < stlpersonas.length; i++) {

            var option = document.createElement("option");
            option.value = i;
            option.innerHTML = stlpersonas[i].sayFullName();
            select.appendChild(option);
            counter++;
        }

    }

    function eliminarPersonaArray() {

        let index = Number(ciudadanoStl.value);
        for (let x = 0; x < ciudadanos.length; x++) {

            if (ciudadanos[index] === ciudadanos[x]) {

                ciudadanos.splice(index, 1);
            }
        }
        console.log(index);

    }

    function actualizacion() {


        sltActualizacionPersona = ciudadanos;
        sltActualizacionPersona.sort();



    }

    function agregarActualizacion() {

        let counter = 0;
        let select = document.getElementById("ciudadanoStl");
        select.innerHTML = "";
        for (let i = counter; i < stlpersonas.length; i++) {

            var option = document.createElement("option");
            option.value = i;
            option.innerHTML = stlpersonas[i].sayFullName();
            select.appendChild(option);
            counter++;
        }
    }


    agregarBtn.onclick = function agregarBtnOnClick() {

        agregar();
        cargaEstudiante();

        nombreTxt.value = "";
        apellidoTxt.value = "";
        edadTxt.value = "";
        cedulaTxt.value = "";
        generoTxt.value = "";

    }

    borrarBtn.onclick = function borrarBtnOnClick() {


        eliminarPersonaArray();
        actualizacion();
        agregarActualizacion();

        console.log(ciudadanos);
    }


};