$(function () {
    /* language */
    $('.language_world').on('click', function () {
        $('.language_world').toggleClass('on')
        $('.language_list').slideToggle();
        $('.language_world').find('img').toggleClass('on');
    })
/* .sub_gnb */

/* 전체 슬라이드 메뉴바 */
const gnb = $('.gnb')
/* console.log(gnb) */
const sub_gnb = $('.all_sub_gnb')
/* console.log(sub_gnb) */

gnb.on('mouseover focusin', function() {
        sub_gnb.slideDown(500)
    })
    sub_gnb.on('mouseleave focusout', function() {
        sub_gnb.slideUp(1000)
    })


    /* .sub_gnb .language */
    $('.language_world01').on('click', function () {
        $('.language_world01').toggleClass('on')
        $('.language_list01').slideToggle();
        $('.language_world01').find('img').toggleClass('on');
    })
});

 /* search */
 $('.gnb_right > a').on('click', function(event) {
    event.preventDefault();
    alert('검색 아이콘 클릭됨!');
});


/* more_view */
const iconScroll = document.querySelector('.icon_scroll');

iconScroll.animate([
    { opacity:1, transform: 'translateY(0)'}, //시작
    { opacity:1, transform: 'translateY(10px)'} //끝,
], {
    duration:500,
    iterations: Infinity,
    direction: 'alternate'
})

/* follow_side */

// 클릭시 화면 나오고 들어가게

let arrow = document.querySelector(".arrow")
let followSide = document.querySelector(".follow_side")
let grayBox = document.querySelector('.grayBox');
 arrow.addEventListener('click', function(e) {
    e.preventDefault(); 
    followSide.classList.toggle('on'); 
    
    if (followSide.classList.contains('on')) {
        grayBox.style.display = 'block';
    } else {
        grayBox.style.display = 'none';
    }
});

    /* follow_side scroll 높이 고정 */

    // .dingo_collaboration 위치 window height가면 position fixed가 되어 따라다닌다.
    
    let dingoCollaboration = document.querySelector(".dingo_collaboration");

    window.addEventListener('scroll', function(){
        let dingoScroll = dingoCollaboration.offsetTop
        //console.log('dingoScroll:', dingoScroll, 'offsetTop:', dingoCollaboration.offsetTop); 
        if(scrollY > dingoScroll) {
            followSide.classList.add('sr')
        } else {
            followSide.classList.remove('sr')
        }
    })

   /* crew_aside */

   const dingoNews = document.querySelector(".dingo_news");
   const crewAside = document.querySelector(".crew_aside");

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        //console.log(scrollY)

       if(scrollY >= 4450 && scrollY <= 6300) {
        crewAside.classList.add("move")
       } else {
        /* crewAside.classList.remove("move") */
       } 
    })


    
















    /*  $('.sub_gnb').hover(
        function() {       
            $('.language_list').stop().slideDown();
            $
        },
        function() {      
            $('.language_list').stop().slideUp();
        }
    );  */


  

  


