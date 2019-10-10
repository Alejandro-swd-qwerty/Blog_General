//Obtener los datos del objeto JSON

function getPosts(){
    $.ajax({ //se llama a Jquery y se usa el método ajax
        method:"GET", // el método para jalar los objetos es get
        url: "", //hay que poner la url, que puede ser  "https://blog-5g.firebaseio.com/blogGeneral/posts/.json" 
        success: //se tiene que poner una función, cuando no hay errores. Esto debe de ser la plantilla para meter la colección de objetos
    });
};

/**
 * function formatearEntradas(losPosts){
 *      vaciar el contenedor para no appendear doble;
 *      usar el metodo de JQuery $.each(losPosts, (index, valores) => {appendear el div o lo que sea, con el orden "index" y con los valores "valores"})
 *          };
 * 
 * 
 * 
 * 
 */

function loadingView(viewUrl, funcionALlamar){
    $(" la clase del contenedor").load(viewUrl,funcionALlamar); // se llama a la parte del wrapper o contenedor que va a estar cambiando, se llama a la función para obtener los posts o publicarlos, o eliminarlos, yo qé sé
}
