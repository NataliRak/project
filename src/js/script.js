$(document).ready(function(){
    $('.carousell__slide').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow-right.png"></button>'
    });

    $('ul.tab__group').on('click', 'li:not(.tab__name_active)', function() {
        $(this)
          .addClass('tab__name_active').siblings().removeClass('tab__name_active')
          .closest('div.container').find('div.tab__cards').removeClass('tab__cards_active').eq($(this).index()).addClass('tab__cards_active');
      });
      
    
  });