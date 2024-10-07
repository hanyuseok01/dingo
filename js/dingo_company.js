$(function () {
    /* language */
    $('.language_world').on('click', function () {
        $('.language_world').toggleClass('on')
        $('.language_list').slideToggle();
        $('.language_world').find('img').toggleClass('on');
    })


/* .sub_gnb */
/* 전체 슬라이드 메뉴바 */

const header = $('.header')
/* console.log(gnb) */
const sub_gnb = $('.all_sub_gnb')
/* console.log(sub_gnb) */

header.on('mouseover focusin', function() {
        sub_gnb.slideDown(500).animate({
            opacity:1,
        },1000)
    })
    sub_gnb.on('mouseleave focusout', function() {
        sub_gnb.animate({
            opacity: 0.5,
            height: '100px'
        },500).slideUp(1000);
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

/* follow_side */

// 클릭시 화면 나오고 들어가게

let arrow = document.querySelector(".arrow")
let followSide = document.querySelector(".follow_side")

 arrow.addEventListener('click', function(e) {
    e.preventDefault(); 
    followSide.classList.toggle('on'); // f
    
    if (followSide.classList.contains('on')) {
        grayBox.style.display = 'block';
    } else {
        grayBox.style.display = 'none';
    }
});


/* follow_side scroll 높이 고정 */

    // .dingo_collaboration 위치 window height가면 position fixed가 되어 따라다닌다.
    
    let contentsAll = document.querySelector(".contents_all");

     window.addEventListener('scroll', function(){
        let dingoScroll = contentsAll.offsetTop
        if(this.scrollY > dingoScroll) {
            followSide.classList.add('sr')
        } else {
            followSide.classList.remove('sr')
        }
    })

 /* who is right */
    
    const micClick = document.querySelector('.mic_click > a'); 
    const clickArea = document.querySelector('.clickArea'); 
    const clickInner = document.querySelector('.clickInner');
    const btnClose = document.querySelector('.btnClose');
    const grayBox = document.querySelector('.grayBox');

    micClick.addEventListener('click', function(e) {
        e.preventDefault();
        clickArea.style.top = `35%`;
        grayBox.style.display = "block"; 

    })
    btnClose.addEventListener('click', function(e){
        e.preventDefault();
        clickArea.style.top = '-100%';
        grayBox.style.display = 'none';
    })


/* .inner .inventory */

const invenTabs = document.querySelectorAll('.inventory > p');
const viewAlls = document.querySelectorAll('.smallGnb > div');


function viewTab(index) {
    for (let i = 0; i < invenTabs.length; i++) {
        invenTabs[i].classList.remove('red');
        viewAlls[i].classList.remove('red');
    }
    invenTabs[index].classList.add('red');
    viewAlls[index].classList.add('red');
}

invenTabs.forEach((invenTab, index) => {
    invenTab.addEventListener('click', (e) => {
        e.preventDefault();
        viewTab(index);
    });
});
  




    /* media_graph view_graph */
    
    /* const tabs = document.querySelectorAll('.three_text > li')
    const view_graph01 = document.querySelector('.view_graph01')
    const view_graph02 = document.querySelector('.view_graph02')
    const view_graph03 = document.querySelector('.view_graph03')

    tabs.forEach(function(tab, index) {
        console.log(tab, index)
        tab.addEventListener('click', function() {
            if(index==0) {
                view_graph01.classList.add('.tab')
                view_graph02.classList.remove('.tab')
                view_graph03.classList.remove('.tab')
            } else if(index==1) {
                view_graph01.classList.remove('.tab')
                view_graph02.classList.add('.tab')
                view_graph03.classList.remove('.tab')
            }else if(index==2) {
                view_graph01.classList.remove('.tab')
                view_graph02.classList.remove('.tab')
                view_graph03.classList.add('.tab')
            }
        })
    }) */

       
            const tabs = document.querySelectorAll('.three_text > li');
            const viewGraphs = document.querySelectorAll('.view_graph > div');
        
            function imgTextView(index) {
                for (let i = 0; i < tabs.length; i++) {
                    tabs[i].classList.remove('on');
                    viewGraphs[i].classList.remove('on');
                }
                tabs[index].classList.add('on');
                viewGraphs[index].classList.add('on');
            }
        
            tabs.forEach((tab, index) => {
                tab.addEventListener('click', (event) => {
                    event.preventDefault(); // 링크 클릭 시 페이지 이동 방지
                    imgTextView(index);
                });
            });

        /* icon_arrow01 */
        const arrowMove = document.querySelector('.arrow01');

        arrowMove.animate([
            { opacity: 1, transform: 'rotate(30deg) translateX(0) translateY(0) translateZ(0)' }, // 시작
            { opacity: 1, transform: 'rotate(30deg) translateX(30px) translateY(-60px)translateZ(800px) ' } // 끝
], {
    duration:700,
    iterations: Infinity,
    direction: 'alternate'
})
/* his_years */
// .left_years > li에서 li.on 클래스가 붙은 녀석을 클릭하면 years > li 에 li.on클래스 붙은 요소 나타난다.

    const leftYears = document.querySelectorAll('.left_years > li')
    const years = document.querySelectorAll('.years > li')
    //console.log(years)
    leftYears.forEach((leftYear, index) => {
        //console.log(leftYear, index)
        leftYear.addEventListener('click', (e) => {
            e.preventDefault();

            // 모든 leftYears와 years의 on 클래스 제거
            leftYears.forEach(year => year.classList.remove('on'));
            years.forEach(year => year.classList.remove('on'));

            // 클릭한 leftYear와 해당 index의 years에 on 클래스 추가
            leftYear.classList.add('on');
            years[index].classList.add('on');
             
        })
    });


  /* .view_news .crew_aside */

  const dingoNews = document.querySelector(".dingo_news");
  const crewAside = document.querySelector(".crew_aside");

   window.addEventListener('scroll', function() {
       const scrollY = window.scrollY;
       //console.log(scrollY)

      if(scrollY >= 651 && scrollY <= 2200) {
       crewAside.classList.add("move")
      } else {
       /* crewAside.classList.remove("move") */
      } 
   })

/* .view_news .news_all */

const allComes = document.querySelectorAll(".news_all > ul > li");
const NNCs = document.querySelectorAll(".NNC > div");
//console.log(allComes);
//console.log(NNCs);

function viewCome(index) {
    for (let i = 0; i < allComes.length; i++) {
        allComes[i].classList.remove('come');
        NNCs[i].classList.remove('come');
    }
    allComes[index].classList.add('come');
    NNCs[index].classList.add('come');
}

allComes.forEach((allCome, index) => {
    allCome.addEventListener('click', (event) => {
        event.preventDefault(); // 링크 클릭 시 페이지 이동 방지
        viewCome(index);
    });
});
/* meeting_left */
   // 썸네일 이미지를 클릭하면 큰 이미지가 변함
const bigImg = document.querySelector('.makeus_view');
const smallImgs = document.querySelectorAll('.click_makeus');

for (const smallImg of smallImgs) {
    smallImg.addEventListener('click', changePic);
}

function changePic() {
    let newImg = this.src; // newImg 변수에 이미지 경로를 담아줌
    bigImg.setAttribute('src', newImg); // 메인 이미지에 이미지 경로를 담음
}
/*.addres Copy */
const copy = document.querySelector('.copy');
/* const copyText = document.getElementById('copy'); */
      
copy.addEventListener('click', (e) => {
    e.preventDefault();
    
    alert("복사완료");

});