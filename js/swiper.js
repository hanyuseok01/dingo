$(function() {

/* <!-- most_view --> */

    var swiper = new Swiper(".most_view_swiper", {
        slidesPerView: 4,
        spaceBetween: 0,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1440: {
                slidesPerView: 4, // 태블릿
            },
            768: {
                slidesPerView: 2, // 태블릿
            },
            430: {
                slidesPerView: 1, // 모바일
            },
        }

    });

    /*<!-- collabo_swiper --> */
   
        var swiper = new Swiper(".collabo_swiper", {
            slidesPerView: 1,
            spaceBetween: 1,
            freeMode: true,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        });
    


       /*  <!-- music_contents --> */
        
            var swiper = new Swiper(".musicSwiper", {
                /*  slidesPerView: 4, */
                slidesPerView: 'auto',
                spaceBetween: -300,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
    
                },
                speed: 1000,
                Infinity: true,
                direction: 'horizontal',
                
            });
    
            var swiper = new Swiper(".music-Swiper", {
                slidesPerView: 4,
                width: 1720,
                spaceBetween: -300,
                autoplay: {
                    delay: 2200,
                    disableOnInteraction: false,
    
                },
                speed: 1200,
                Infinity: true,
                direction: 'horizontal'
            });
    
       
});