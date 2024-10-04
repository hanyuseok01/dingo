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

/* let smallGnb = document.querySelector(".smallGnb");
let followSide = document.querySelector(".follow_side");

    window.addEventListener('scroll', function(){
        let gnbScroll = smallGnb.offsetTop
        //console.log('dingoScroll:', dingoScroll, 'offsetTop:', dingoCollaboration.offsetTop); 
        if(scrollY > gnbScroll) {
            followSide.classList.add('sr')
        } else {
            followSide.classList.remove('sr')
        }
    }) */