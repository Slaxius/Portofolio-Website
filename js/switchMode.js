$(document).ready(function(){
    $('.toggle-mode').on('click', function(){
        $('body').toggleClass('light-mode');

        if ($('body').hasClass('light-mode')){
            $(this).attr('src', '/asset/dark_mode.svg');
            $('.mode').css('background-color', 'var(--richblack)');
        } 
        else{
            $(this).attr('src', '/asset/light_mode.svg');
            $('.mode').css('background-color', 'var(--ghostwhite)');
        }
    });
});