




  
    var swiper = new Swiper(".slide-swp", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
      autoplay:{

        delay: 2500,
      },
      slidesPerView: 1,
      loop:true,
    });



    var swiper = new Swiper(".sale-sec", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        slidesPerView: 5,
        spaceBetween:30,
        autoplay:{
  
          delay: 2500,
        },
        navigation:{

            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        loop:true,
        breakpoints:{

          1600:{

            slidesPerView: 5,
          },

          1200:{

            slidesPerView: 4,
            spaceBetween: 30,
          },

          700:{

            slidesPerView: 3,
            spaceBetween: 15,
          },

          0:{

            slidesPerView: 2,
            spaceBetween: 10,
          }
        }
      });




      var swiper = new Swiper(".product-swip", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        autoplay:{
  
          delay: 2500,
        },

        navigation:{

          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
      },
        slidesPerView: 4,
        spaceBetween:30,
        loop:true,
        breakpoints:{

          1500:{

            slidesPerView: 4,
          },

          1200:{

            slidesPerView: 3,
            spaceBetween: 30,
          },

          900:{

            slidesPerView: 2,
            
          },

          700:{

            slidesPerView: 3,
            spaceBetween: 15,
          },

          0:{

            slidesPerView: 2,
            spaceBetween: 10,
          }
        }
      });






  