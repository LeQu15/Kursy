$(window).on("scroll", function () {
    if ($(window).scrollTop() > 200) {
        $('div.info').addClass('active');
        $('div.info').text('Obecna pozycja skrola to: ' + $(window).scrollTop().toFixed() + "px")
    } else {
        $('div.info').removeClass('active');
    }
})