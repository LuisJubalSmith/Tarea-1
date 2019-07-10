class Persona {

    constructor(nombreTxt, apellidoTxt, edadTxt, cedulaTxt, generoTxt) {

        this.nombre = nombreTxt;
        this.apellido = apellidoTxt;
        this.edad = edadTxt;
        this.cedula = cedulaTxt;
        this.genero = generoTxt;
    }

    sayFullName() {

        var fullName = this.nombre + ' ' + this.apellido;

        return fullName;
    }

    sayAge() {

        var age = this.edad;

        return age;
    }

    sayIdentifer() {

        var identinfer = this.cedula;

        return identinfer;
    }

    sayGender() {

        var gender = this.genero;

        return gender;
    }




};

function eliminar() {
    let personaBorrada = document.getElementById("ciudadanoStl");
    personaBorrada.remove(personaBorrada.selectedIndex);
    return personaBorrada;
}