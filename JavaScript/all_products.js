
// open and close filter


let filter = document.querySelector(".filter");


function open_close_filter(){

    filter.classList.toggle("active");

}
















fetch ("JavaScript/items.json")
    
    . then (response => response.json())
    . then (data => {

        

        let productDiv = document.getElementById("products_div");


        all_product_json = data;

        data.forEach(product => {
            
           
                let old_price_pargraph = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
                

                let percent_discount_div = product.old_price ? `
                        <span class="percent">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "" ;

                productDiv.innerHTML += `
                
                <div class="product swiper-slide">

                        ${percent_discount_div}
                        <div class="icons">
                            <i onclick = "addToCart(${product.id} , this)" class="fa-solid fa-cart-plus"></i>
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-share"></i>
                        </div>
                        <div class="img-product">

                            <img src="${product.img}" alt="">
                            <img class="img-hover" src="${product.img_hover}" alt="">
                        </div>

                        <h3 class="product-name"><a href="#">Lorem ipsum dolor sit amet consec.</a></h3>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <div class="price">

                            <p><span>$${product.price}</span></p>
                            ${old_price_pargraph}
                        </div>
                    </div>
                
                
                
                
                
                `
            
                

            
        });
 })    