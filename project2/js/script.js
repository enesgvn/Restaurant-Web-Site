const newLocal = document.querySelector(".search-form");
const searchForm = newLocal;


//! buttons


const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click" , function(){


    searchForm.classList.toggle("active");

    document.addEventListener("click" , function(e){

        if(!e.composedPath().includes(searchBtn)){

            searchForm.classList.remove("active");
        }
        
    });
});

const cartForm = document.querySelector(".cart-items-container");

const cartBtn = document.querySelector("#cart-btn");


cartBtn.addEventListener("click" , function(){


    cartForm.classList.toggle("active");

    document.addEventListener("click" , function(a){
        
        if(!a.composedPath().includes(cartBtn)){

            cartForm.classList.remove("active");
        }
        
        
    });
});