// open and close cart

var cart = document.querySelector(".cart");


 


function open_cart(){

    cart.classList.add("active");
}


function close_cart(){

    cart.classList.remove("active");
}



// open and close menu

let menu = document.querySelector("#menu");

function open_menu(){

    menu.classList.add("active");
}


function close_menu(){

    menu.classList.remove("active");
}





// add items to the cart 

let all_product_json;

let items_in_cart = document.querySelector(".items-in-cart");


let product_cart = [];

function addToCart(id , btn){

    product_cart.push(all_product_json[id]);

    btn.classList.add("active")

    console.log(product_cart);
    getCartItems();

}

let count_item = document.querySelector(".count-item");
let price_cart_head = document.querySelector(".price-cart-head");
let count_item_cart = document.querySelector(".count-item-cart");
let price_cart_total = document.querySelector(".price-cart-total");

function getCartItems(){

    let total_price = 0;
    let items_c = "";

    for(let i = 0 ; i< product_cart.length ; i++){

        items_c += `
        
        
        <div class="item-cart">

                <img src="${product_cart[i].img}" alt="">

                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price-cart">${product_cart[i].price}</p>
                </div>
                <button onclick = "remove_from_cart(${i})" class="delete-item"><i class="fa-solid fa-trash-can"></i></button>
            </div>

        
        
        
        
        `
        total_price += product_cart[i].price;

        

        
        
    }

    items_in_cart.innerHTML = items_c;

    count_item.innerHTML = product_cart.length;
    price_cart_head.innerHTML =  "$" + total_price ;

        
    count_item_cart.innerHTML = `(${product_cart.length} items in cart)`;
    price_cart_total.innerHTML = "$" + total_price
}




// remove from cart


function remove_from_cart(index){

product_cart.splice(index,1);

getCartItems();

let addToCartButton = document.querySelectorAll(".fa-cart-plus");

for (let i = 0; i < addToCartButton.length; i++) {
    
    addToCartButton[i].classList.remove("active");

    product_cart.forEach(product =>{


        if(product.id == i){

            addToCartButton[i].classList.add("active")

        }
    })
}

}



// back to top

let back_to_top = document.querySelector(".back-to-top");



    back_to_top.addEventListener("click" , function(){


        window.scrollTo({


            top: 0,
            behavior: "smooth",

        });


        
        


    } );




