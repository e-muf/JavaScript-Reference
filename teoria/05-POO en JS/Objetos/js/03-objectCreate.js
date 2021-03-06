// Object Create
// Se agregan las funciones al prototype y los atributos por afuera

const Cliente = {
    imprimirSaldo: function() {
        return `Hola ${this.nombre} tu saldo es ${this.saldo}`;
    },
    retirarSaldo: function(retiro) {
        this.saldo -= retiro;
    }
}

// Crear el objeto
const mary = Object.create(Cliente);
mary.nombre = 'Mary';
mary.saldo = 1000;

mary.retirarSaldo(300);
console.log(mary.imprimirSaldo());