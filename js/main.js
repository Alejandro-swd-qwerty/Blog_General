//Obtener los datos del objeto JSON

function getPosts(){
    $.ajax({ //se llama a Jquery y se usa el método ajax
        method:"GET", // el método para jalar los objetos es get
        url: "https://blog-5g.firebase  io.com/blog/posts/.json",
        //hay que poner la url, que puede ser  "https://blog-5g.firebaseio.com/blogGeneral/posts/.json" 
        success: (response) => {
            putsData(response)
            console.log(response)
         }
    });
}

function fillWithPosts(postsData){
    $(".container").empty(); //creo que es este el div que sì va a cambiar
    console.log(postsData);
    $.each(postsData, (index,value) => {
        $(".entries-wrapper").append(`
        <!--Tarjeta Incluir el html del modal-->
        <div class="col-12">
            <div id="entry-${index}" class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img id="card-image" src="${value.imsge}" class="card-img row no-gutters" alt="..." data-toggle="modal" data-target="#exampleModalScrollable" >
                    </div>
                    <div class="col-md-8">
                    <div id="card-sample" class="card-body">
                        <h6 id="card-sample-text-btn" class="card-title" data-toggle="modal" data-target="#exampleModalScrollable">RELATIONSHIPS Popular topic</h6>
                        <h5 id="card-sample-title-btn" class="card-title font-weight-bold" data-toggle="modal" data-target="#exampleModalScrollable">${value.title}</h5>
                        <p id="card-sample-content"class="card-text card-content">${value.content}</p>
                        <p id="card-sample-date" class="card-text"><small class="text-muted card-date">${value.createDate}</small></p>
                    </div>
                </div>
            </div>
          </div>
          </div>
        <!--End Tarjeta-->
          <!-- Modal -->
          <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable" role="document">
          <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title font-weight-bold" id="exampleModalScrollableTitle">${value.title}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
                <img src="${value.imsge}" class="card-img" alt="...">
                <p id="card-sample-date" class="card-text"><small class="text-muted card-date">${value.createDate}</small></p>
                <p id="card-sample-content" class="modal-text card-content">${value.content}</p>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
          </div>
          </div>
        <!--Modal END-->
        `)
    })  
}


function loadingView(viewUrl, funcionALlamar){
    $(".container").load(viewUrl,funcionALlamar); // se llama a la parte del wrapper o contenedor que va a estar cambiando, se llama a la función para obtener los posts o publicarlos, o eliminarlos, yo qé sé
}


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




function getDataFromButton(){

    $("#submit-entry").on("click",getDataFromModal())
}


getPosts() //aqui podria esta la funcion de loadingview pero si no hay màs que una pagina, pos mejor solo asì





   