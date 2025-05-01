const btnLoad = document.getElementById("btnLoad");
const URLMain = "https://api.escuelajs.co/api/v1/products";
const mainProds = document.getElementById("mainProds")

btnLoad.addEventListener("click", function(event){
    event.preventDefault();

    const options = {"method":"GET"};
    fetch(URLMain, options)
    .then((response) => {
        console.log(response);
        response.json().then((res)=>{
            createCards(res);
            
        });
        
    }

    )
    .catch((err) => {
        main.insertAdjacentHTML("beforeend", 
                         `<div class="alert alert-danger" role="alert">
                             ${err.message}
                         </div>`);
    })

});

/** Como sabemos hay elementos en el json que solo tienen una imagen asi que hay que crear una funcion para 
 * que vea y seleccione la imagen
 */
function getImage(images){
    if(images[1])
       return images[1];
    else if(images[0])
        return images[0];

}


function createCards(prods){
    mainProds.innerHTML = "";

    prods.slice(0,9).forEach((prod) => {
        const imgURL = getImage(prod.images);
        mainProds.insertAdjacentHTML("beforeend",
            `<div class="card" style="width: 18rem;">
            <img src="${imgURL}" class="card-img-top" alt="${prod.title}">
            <div class="card-body">
             <h5 class="card-title">${prod.title}</h5>
             <p class="card-text">${prod.description.slice(0, 150)}...</p>
             <p class="card-text">$ ${prod.price}</p>
            </div>
            </div>`);
    });
    
}

