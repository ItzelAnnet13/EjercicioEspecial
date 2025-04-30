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
            // console.log(res.length); //20
            // console.log(res[0].title);
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

function createCards(prods){
    mainProds.innerHTML = "";
    prods.slice(0,9).forEach((prod) => {
        mainProds.insertAdjacentHTML("beforeend",
            `<div class="card" style="width: 18rem;">
            <img src="${prod.images[1]}" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">${prod.title}</h5>
             <p class="card-text">${prod.description}</p>
             <p class="card-text">${prod.price}</p>
            </div>
            </div>`);
    });
    
}