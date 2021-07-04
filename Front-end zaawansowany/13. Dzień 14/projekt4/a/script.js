function changeText() {
    const wielkoscSkrola = $(document).scrollTop();

    const wysokoscSekcji1 = $('.sekcja1').height();
    const wysokoscSekcji2 = $('.sekcja2').height();
    const wysokoscSekcji3 = $('.sekcja3').height();
    const wysokoscSekcji4 = $('.sekcja4').height();

    const odlegloscOdPoczatkuSekcji1 = $('.sekcja1').offset().top;
    const odlegloscOdPoczatkuSekcji2 = $('.sekcja2').offset().top;
    const odlegloscOdPoczatkuSekcji3 = $('.sekcja3').offset().top;
    const odlegloscOdPoczatkuSekcji4 = $('.sekcja4').offset().top;

    if (wielkoscSkrola < wysokoscSekcji1) {
        $('div.info').text('sekcja 1')
    } else if (wielkoscSkrola < wysokoscSekcji2 + odlegloscOdPoczatkuSekcji2) {
        $('div.info').text('sekcja 2')
    } else if (wielkoscSkrola < wysokoscSekcji3 + odlegloscOdPoczatkuSekcji3) {
        $('div.info').text('sekcja 3')
    } else {
        $('div.info').text('sekcja 4')
    }
}
$(document).on('scroll', changeText)