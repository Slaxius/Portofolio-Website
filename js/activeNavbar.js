$(document).ready(function(){
    $('.navbar a').addClass('inactive');

    $('.navbar a').click(function(){
        $('.navbar a').removeClass('active');
        $(this).addClass('active');
    })
});

$(window).scroll(function(){
    let position = $(this).scrollTop();
    
    $('.page').each(function(){
        let targetTop = $(this).offset().top;
        let targetHeight = $(this).outerHeight();
        let id = $(this).attr('id');

        if (position >= targetTop - 100 && position < targetTop + targetHeight - 100) {
            $('.navbar a').removeClass('active');
            $('.navbar a[href="#' + id + '"]').addClass('active');
        }
    });
});

$(document).ready(function(){
    const burger = $('.burger-navbar');
    const navbar = $('.navbar');

    burger.click(function(){
        navbar.toggleClass('active');
        
        const barsIcon = burger.find('.fa-bars');
        const closeIcon = burger.find('.fa-xmark');
        
        if(navbar.hasClass('active')){
            barsIcon.hide();
            closeIcon.show();
        }
        else{
            barsIcon.show();
            closeIcon.hide();
        }
    });

    const navLinks = $('.navbar a');
    navLinks.click(function(){
        if(navbar.hasClass('active')){
            navbar.removeClass('active');
            burger.find('.fa-bars').show();
            burger.find('.fa-xmark').hide();
        }
    });
});