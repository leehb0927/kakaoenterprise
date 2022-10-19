$(function(){
    //header
    $(window).scroll(function(){
        if($(window).scrollTop()){
            $('.header-wrap').addClass('scroll')
        }else{
            $('.header-wrap').removeClass('scroll')
        }
    });
    //스크롤 내면 header모양 변함
    $('.header .gnb-item').hover(function(){
        $('.header-wrap').addClass('scroll')
    },function(){
        $('.header-wrap').removeClass('scroll')
    })
    //마우스 hover header 모양 변함

    //mobile / tablet gnb
    $('.header-wrap .gnb-btn').click(function(){
        if($('.header .mobile-gnb').css('display') == 'block'){
            $('.header .mobile-gnb').css('display','none')
            $('.header-wrap').removeClass('scroll')
            $('body').removeClass('overflow-y')
            $(this).removeClass('click')
        }else{
            $('.header .mobile-gnb').css('display','block')
            $('.header-wrap').addClass('scroll')
            $('body').addClass('overflow-y')
            $(this).addClass('click')
        }
    })
    //dropDown 누르면 서브메뉴 나타남
    $('.mobile-gnb .dropDown').click(function(e){
        e.preventDefault();

        if($(this).siblings('.mobile-gnb .mobile-sub').css('display') == 'block'){
            $(this).siblings('.mobile-gnb .mobile-sub').slideUp();
            $(this).removeClass('active');
        }else {
            $('.mobile-gnb .mobile-sub').slideUp();
            $('.mobile-gnb .dropDown').removeClass('active');
            $(this).siblings('.mobile-gnb .mobile-sub').slideDown();
            $(this).addClass('active');
        }
    });





    var swiper = new Swiper(".visual .swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".fraction",
            type: "fraction",
        },
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
        });
    //메인비주얼 슬라이드

    $('.visual .more-btn').hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    })







    
    //service-item hover
    $('.service .service-item').hover(
        function(){
            $(this).addClass('active');
        },
        function(){
            $(this).removeClass('active')
        }
    )




    $('.banner .view-btn').hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    })








    //footer
    $('.footer .info-item').hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    })
    //마우스 올리면 리스트 색상이 변경
    $('.footer .dropDown').click(function(e){
        e.preventDefault();
        if($(this).siblings('.sub-list').css('display') == 'block'){
            $(this).siblings().slideUp()
            $(this).removeClass('show')
        }else{
            $(this).siblings().slideDown()
            $(this).addClass('show')
        }
    })



    $('.footer .relate-btn').hover(function(){
        $(this).addClass('btn-hover')
    },function(){
        $(this).removeClass('btn-hover')
    })

    //footer .related-btn을 누르면 열려있던 .sub-list들이 닫히게 된다.
    $('.footer .relate-btn').click(function(){
        $('.footer .relate-site').toggleClass('active');

        if($('.footer .sub-list').css('display') == 'block'){
            $('.footer .sub-list').slideUp()
            $('.footer .dropDown').removeClass('show')
        }
    })
    //토글클래스



    $('.footer .sns-item').hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    })
})

    //service 왼쪽으로 흐르기
    let roller = document.querySelector('.service .list-inner');
    roller.id = 'roller1';
    let clone = roller.cloneNode(true);
    clone.id = 'roller2';
    roller.classList.add('original');
    clone.classList.add('clone');
    document.querySelector('.service .service-list').appendChild(clone);
    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.service .list-inner .service-item').offsetWidth+'px';




    //두번째 줄
    let roller2 = document.querySelector('.service .list-inner2');
    roller2.id = 'roller1-2'
    let clone2 = roller2.cloneNode(true);
    clone2.id = 'roller2-2';
    roller2.classList.add('original2');
    clone2.classList.add('clone2');
    document.querySelector('.service .service-list2').appendChild(clone2);
    document.querySelector('#roller1-2').style.left = '0px';
    document.querySelector('#roller2-2').style.left = document.querySelector('.service .list-inner2 .service-item')


