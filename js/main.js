//Obtener los datos del objeto JSON

function getPosts(){
    $.ajax({ //se llama a Jquery y se usa el método ajax
        method:"GET", // el método para jalar los objetos es get
        url: "https://blog-5g.firebaseio.com/blog/posts/.json", //hay que poner la url, que puede ser  "https://blog-5g.firebaseio.com/blogGeneral/posts/.json" 
        success: ((response) => {
            putsData(response);//success: //se tiene que poner una función, cuando no hay errores. Esto debe de ser la plantilla para meter la colección de objetos
    })
});
}


function loadingView(viewUrl, funcionALlamar){
    $(".container").load(viewUrl,funcionALlamar); // se llama a la parte del wrapper o contenedor que va a estar cambiando, se llama a la función para obtener los posts o publicarlos, o eliminarlos, yo qé sé
}




function getDataFromModal(){
    //en el index.html estan estas entradas.
    let title = $("#title").val();
    let preview = $("#preview").val();
    let content = $("#content").val();
    let imgUrl = $("#imgUrl").val();
    let createDate = new Date();

    let postObject = {title, preview, content, imgUrl, createDate}
    console.log(postObject);
    putsData(postObject);
};

function putsData(postObject){
    $.ajax({
        method:"POST",
        url: 'https://blog-5g.firebaseio.com/blog/posts/.json',
        data: JSON.stringify(postObject),
        success: (response) => {
            console.log(response)
        }
    });
}




function getDataFromButton(){
    $("#submit-entry").on("click",getDataFromModal());
}
 
