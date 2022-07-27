/* Window Load functions */
function imgbox_height(){
    var img_height = $('.teammember-detail .detailbox .img-box').outerWidth();
    $('.teammember-detail .detailbox .img-box').css('height', img_height);
}
function main_top(){
    var heading_height = $('header').outerHeight();
    $('.main').css('padding-top',heading_height);
}
function mobile_menu(){
    var mob_menu = $('header .header-bottom .menu-area').html();
    $('#mobile-menu .menu-area').append(mob_menu);
}

$(window).on('load',function(){
    main_top();
    imgbox_height();
    
});


$(document).ready(function(){
    imgbox_height();
    main_top();
    mobile_menu();
    if($(window).width() < 768){
        $(".banner-area .btn").text("Visit our Shop");
    }
    $('.menu-area nav ul  li').on('click', function(){
        $('.menu-area nav ul  li').removeClass('active');
        $(this).toggleClass('active');
    });
    $( '.page-menu ul a').on( 'click', function(e){
        var href = $(this).attr( 'href' );
        $( 'html, body' ).animate({
              scrollTop: $( href ).offset().top
        }, '1000' );
        e.preventDefault();
        $('#mobile-menu').removeClass('open');
      });
      $('header .hamburger').on('click', function(e){
        e.stopPropagation();
        $('#mobile-menu').addClass('open');
    });
    $('#mobile-menu .close-menu').on('click', function(){
        $('#mobile-menu').removeClass('open');
    });
    setTimeout(function() {
        $('#preloader').removeClass('show');
    }, 1000);
});

$(window).on('resize',function(){
    main_top();
    imgbox_height();
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 210) {
       $('header').addClass('fixed');
    } else {
       $('header').removeClass('fixed');
    }
    if($(window).width() < 1661){
        if ($(this).scrollTop() > 80) {
            $('header').addClass('fixed');
         } else {
            $('header').removeClass('fixed');
         }
    }
});
$(document).click(function (e) {
    if(!$(e.target).closest('#mobile-menu').length){
      $("#mobile-menu").removeClass('open');
    }});
