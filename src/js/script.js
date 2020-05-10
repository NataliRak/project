$(document).ready(function(){
    $('.carousell__slide').slick({
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow-right.png"></button>'
    });

    $('ul.tab__group').on('click', 'li:not(.tab__name_active)', function() {
        $(this)
          .addClass('tab__name_active').siblings().removeClass('tab__name_active')
          .closest('div.container').find('div.tab__cards').removeClass('tab__cards_active').eq($(this).index()).addClass('tab__cards_active');
    });


    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.tab__card_content').eq(i).toggleClass('tab__card_content_active');
                $('.tab__card_list').eq(i).toggleClass('tab__card_list_active');
            })
        });
    };

    toggleSlide('.tab__card_link');
    toggleSlide('.tab__card_back');

     // Modal

     $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_bye').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.tab__card_title').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    //validation form

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: 
                    "Пожалуйста,  введите  свое   имя",
                    minlength: jQuery.validator.format("Введите {2} символа!")
                  },
                phone: 
                "Пожалуйста, введите свой номер телефона",
                email: {
                  required: 
                  "Пожалуйста, введите свою почту",
                  email: 
                  "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#run-form');
    validateForms('#consultation form');
    validateForms('#order form');
  
    
    // mask phone
    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

     // Smooth scroll and pageup

     $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();

});

