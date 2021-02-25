var Libro = Backbone.Model.extend({
    urlRoot: '/libros', // url sobre la que se hacen las peticiones

    initialize: function(params) {
        // Función que se ejecuta al inicializar una nueva instancia del modelo
        console.log('Inicialize');
        this.on('change', function(){
            console.log('El modelo ha cambiado');
        })
    },
    defaults: {
        autor: 'Desconocido'
    },
    validate: function (params) {
        // Función que se ejecuta al crear la instancia, verifica los datos según criterio
        if (!params.titulo) {
            return 'Debe tener un titulo.';
        }
    }
});