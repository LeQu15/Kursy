$('nav a').on('click', function () {

    const clickMenu = "#" + $(this).attr('class');

    $('body, html').animate({
        scrollTop: $(clickMenu).offset().top
    })
})