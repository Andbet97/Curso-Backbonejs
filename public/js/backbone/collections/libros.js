var LibrosCollection = Backbone.Collection.extend({
    model: Libro,
    // Agregar y eliminar modelos (add() y remove())
    // Para obtener un elemento de la colección se utiliza el método get()
    // este método recibe como parámetro el 'id' del modelo, 'id atibute' o 'cid':
    // id: el de la base de datos
    // idAtribute: el campo que identifica mi row en la bd
    // cid: id generado por backbone en la colección 
    // Para modificar un elemeno del modelo se utiloza el método set()
    // Para reiniciar la colección se utiliza el método reset(), que recibe como parámetro
    // una lista de modelos o nada si queremos vaciarla.
    
    url: '/libros',
    // La url es usada por fetch() al momento de actualizar los datos
    // con fetch leemos todos los elementos de la bd por medio de la url y
    // generamos y guardamos cada row como un modelo en la colección
});

var libros = new LibrosCollection();
