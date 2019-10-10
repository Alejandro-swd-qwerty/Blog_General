//Obtener los datos del objeto JSON

function getPosts(){
    $.ajax({ //se llama a Jquery y se usa el método ajax
        method:"GET", // el método para jalar los objetos es get
        url: "https://blog-5g.firebaseio.com/blog/posts/.json", //hay que poner la url, que puede ser  "https://blog-5g.firebaseio.com/blogGeneral/posts/.json" 
        success: (response) => {
            putsData(response);//success: //se tiene que poner una función, cuando no hay errores. Esto debe de ser la plantilla para meter la colección de objetos
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




function getDataFromModal(){
    //en el index.html estan estas entradas.
    let title = $("#title").val();
    let preview = $("#preview").val();
    let content = $("#content").val();
    let imgUrl = $("#imgUrl").val();
    let createDate = new Date();

    let postObject = {title, preview, content, imgUrl, createDate}
    console.log(postObject);
    
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


function fillWithPosts(postsData){
    $(".container").empty(); //creo que es este el div que sì va a cambiar
    console.log(postsData);
    $.each(postsData, (index,value) => {
        $(".entries-wrapper").append(`
            <div class="col-12 col-lg-6 m-1">
                <div id="entry-${index} class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                        <img src="${value.imgUrl}" class="card-img" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 id="card-sample-title" class="card-title">${value.title}</h5>
                            <p class="card-text card-content">${value.preview}</p>
                            <p class="card-text card-content">${value.content}</p>
                            <p class="card-text"><small class="text-muted card-date">${value.createDate}</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        `)
    })  
}

