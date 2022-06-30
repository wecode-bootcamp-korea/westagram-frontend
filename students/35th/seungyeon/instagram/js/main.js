//댓글 input 창에 엔터치거나 "게시" 누르면 댓글 추가되도록 createElement로 요소 생성해서, input에 입력한 값이 추가 되어야합니다.
const swiper = new Swiper('.swiper', {
   // Default parameters
   slidesPerView: 6,
   spaceBetween: 10,
   slidesPerGroup: 3,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

const swiper2 = new Swiper('.feed-img', {
   // Default parameters
   slidesPerView: 1,
   navigation: {
      nextEl: '.feed-img .swiper-button-next',
      prevEl: '.feed-img .swiper-button-prev',
    },
})

const changeLang = document.getElementById('change-lang');
const lang = document.getElementById('lang');

changeLang.addEventListener('click', function() {
   lang.classList.toggle('none');
})

const subTxt = document.getElementsByClassName('sub-txt')[0];
subTxt.addEventListener('click', function() {
   alert('모든 추천 회원입니다!');
})


const follow = document.querySelectorAll('.follow');
   for (let i = 0; i<follow.length; i++) {
      follow[i].addEventListener('click', function() {      
      confirm('팔로우 하시겠습니까?');
      })
   }  