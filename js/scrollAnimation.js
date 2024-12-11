$(document).ready(function () {
    function checkVisibility() {
        $(".page").each(function () {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom >= viewportTop && elementTop < viewportBottom) {
                $(this).addClass("is-visible");
            } else {
                $(this).removeClass("is-visible");
            }
        });
    }

    setTimeout(function () {
        checkVisibility();
    }, 500);

    $(window).on("scroll resize", checkVisibility);

    function adjustScroll() {
        const hash = window.location.hash;
        if (hash && $(hash).length) {
            const targetOffset = $(hash).offset().top - 100;
            $('html, body').animate({
                scrollTop: targetOffset
            }, 500);
        }
    }

    setTimeout(adjustScroll, 500); 

    $(window).on("load", function () {
        setTimeout(adjustScroll, 500);
    });
});
