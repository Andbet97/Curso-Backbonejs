// metodo para crear un elemento
/*var Libreria = Backbone.View.extend({
    tagName: 'span',
    className: 'class',
    id: 'id'
});*/

// Metodo para reemplazar un elemento
/*var Libreria= Backbone.View.extend({
    el: '.vista',
    render: function(){
        this.$el.html('<p>El metodo rend se ejecuta</p>');
        // el uso de la fucnion es el siguiente: vista.render();
    },
    initialize: function(){
        // Como en los modelos, se ejecuta al crear una instancia de Libreria
        this.render();
    },
    events: {
        'click .cambiarColor': 'cambiarColor'
    },
    cambiarColor: function(){
        this.$el.css('color', 'red');
    }
});*/

// Para usarlo se puede usar jquery:
// var vista = new Libreria();
// vista.$el.(metodos de jquery) ej:
// vista.$el.text('Hola mundo');
var Libreria= Backbone.View.extend({
    el: '#app',
    initialize: function() {
        app.libros.on('add', this.mostrarLibro);
        app.libros.fetch();
    },
    mostrarLibro: function(modelo){
        var vista = new MostrarLibroView({model:modelo});
        $('.libros').append(vista.render());
    }
});

var MostrarLibroView = Backbone.View.extend({
    template: _.template( $('#tplMostrarLibro').html() ),
    render: function(){
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    }
});

var appView = new Libreria();
