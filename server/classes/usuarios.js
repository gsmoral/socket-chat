class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) {

        // Filter devuelve un nuevo arreglo, al poner [0] nos aseguramos que nos devuelva solo un registro
        let persona = this.personas.filter(persona => {
            return persona.id === id;
        })[0];

        // Si no lo encuentra será undefined o null
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => {
            return persona.sala === sala
        });
        //console.log(sala);
        //console.log(personasEnSala);
        return personasEnSala;
    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        //console.log(personaBorrada);

        this.personas = this.personas.filter(persona => persona.id != id);

        return personaBorrada;
    }

}

module.exports = {
    Usuarios
}