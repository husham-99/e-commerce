

fetch ("JavaScript/items.json")
    
    . then (response => response.json())
    . then (data => {

        let swiper_item = document.getElementById("swiper-item");

        let other_product_swiper = document.getElementById("other-product-swiper");

        let other_product_swiper2 = document.getElementById("other-product-swiper2");


        all_product_json = data;

        data.forEach(product => {
            
            
            if(product.old_price){


                let percent_discount = Math.floor((product.old_price - product.price) / product.old_price * 100);

                swiper_item.innerHTML += `
                
                <div class="product swiper-slide">

                        <span class="percent">%${percent_discount}</span>
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
                            <p class="old-price">$${product.old_price}</p>
                        </div>
                    </div>
                
                
                
                
                
                `
            }
                

            
        });


        data.forEach(product => {
            
            
            


                

                other_product_swiper.innerHTML += `
                
                <div class="product swiper-slide">

                        
                        <div class="icons">
                            <i onclick = "addToCart(${product.id} , this)" class="fa-solid fa-cart-plus"></i>
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-solid fa-share"></i>
                        </div>
                        <div class="img-product">

                            <img src="${product.img}" alt="">
                            <img class="img-hover" src="${product.img_hover}" alt="">
                        </div>

                        <h3 class="product-name"><a href="#">Lorem ipsum dolor sit amet consc.</a></h3>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <div class="price">

                            <p><span>$${product.price}</span></p>
                            
                        </div>
                    </div>
                
                
                
                
                
                `
            
                

            
        });


        data.forEach(product => {
            
            
            


                

            other_product_swiper2.innerHTML += `
            
            <div class="product swiper-slide">

                    
                    <div class="icons">
                        <i onclick = "addToCart(${product.id} , this)" class="fa-solid fa-cart-plus"></i>
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-solid fa-share"></i>
                    </div>
                    <div class="img-product">

                        <img src="${product.img}" alt="">
                        <img class="img-hover" src="${product.img_hover}" alt="">
                    </div>

                    <h3 class="product-name"><a href="#">Lorem ipsum dolor sit amet consec</a></h3>

                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>

                    <div class="price">

                        <p><span>$${product.price}</span></p>
                        
                    </div>
                </div>
            
            
            
            
            
            `
        
            

        
    });
    })