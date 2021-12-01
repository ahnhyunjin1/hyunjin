function scrollHandler() {
    console.log($(window).scrollTop());
    console.log($('.about').position().top);

    if ($(window).scrollTop() >= $('.about').position().top) {
        $('.menu-right button').css('color', '#4a4a4a');
    } else {
        $('.menu-right button').css('color', 'white');
    }

    //세션당 애니메이션 적용
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).position().top) {
            $(this).find('.vertical-center').animate({ top: '0', opacity: '1' }, 800);
        }
    });
}

$(window).on('scroll', scrollHandler);

//처음 페이지가 로딩됐을때
scrollHandler();

//섹션 스크롤
$('.menu-right button').on('click', function () {
    var id = $(this).attr('id');
    if (id == "about-btn") {
        $('html, body').animate({ scrollTop: $('.about').position().top }, 1000);
    } else if (id == "contact-btn") {
        $('html, body').animate({ scrollTop: $('.contact').position().top }, 1000);
    }
});

$('.vertical-center').animate({ top: '0', opacity: '1' }, 1000);