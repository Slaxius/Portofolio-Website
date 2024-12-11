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
