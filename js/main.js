//Obtener los datos del objeto JSON

function getPosts(){
    $.ajax({ //se llama a Jquery y se usa el método ajax
        method:"GET", // el método para jalar los objetos es get
        url: "", //hay que poner la url, que puede ser  "https://blog-5g.firebaseio.com/blogGeneral/posts/.json" 
        success: //se tiene que poner una función, cuando no hay errores. Esto debe de ser la plantilla para meter la colección de objetos
    });
};