$(function () {

    var swiper = new Swiper(".musicSwiper", {
        slidesPerView: 5,
        width: 1720,
        spaceBetween: -300,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
    
        },
        speed: 1000,
        Infinity: true,
    
        direction: 'horizontal'
    });
    
    var swiper = new Swiper(".music-Swiper", {
        slidesPerView: 5,
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
/* .tablet */
const menuClick = document.querySelector('.tablet > .menu');
const gnbBlind = document.querySelector('.gnb_blind')
menuClick.addEventListener('click', function(e) {
    e.preventDefault();
    gnbBlind.classList.toggle('on');
});
const closeBtn = document.querySelector('.closeBtn');
const optionBtn = document.querySelector('.option');

closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    gnbBlind.classList.remove('on')
});


