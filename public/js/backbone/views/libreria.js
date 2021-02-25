// metodo para crear un elemento
/*var Libreria = Backbone.View.extend({
    tagName: 'span',
    className: 'class',
    id: 'id'
});*/

// Metodo para reemplazar un elemento
var Libreria= Backbone.View.extend({
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
});

// Para usarlo se puede usar jquery:
// var vista = new Libreria();
// vista.$el.(metodos de jquery) ej:
// vista.$el.text('Hola mundo');
