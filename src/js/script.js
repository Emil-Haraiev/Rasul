import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 0,
    freeMode: true,
    verticalSwiping: true
    
  });


  const title = document.querySelectorAll('.title');

  title.forEach(item => {
      let dots = '';
      if(item.textContent.length > 18){
          dots = '...';
      }
      let name = item.textContent.substring(0, 19) + dots;
  
      item.textContent = name;
  });
  $(document).ready(function(){
    $('.season__tabs').on('click', 'li:not(.season__tab_active)', function() {
        $(this)
          .addClass('season__tab_active').siblings().removeClass('season__tab_active')
          .closest('div.container').find('div.swiper-slide').removeClass('season__tab_active').eq($(this).index()).addClass('swiper-slide_active');
      });
    
  });
  