$('.interface').on("click", function () {

    if ($(this).hasClass("orange")) {
        console.log("prawda w pomarańczowy");
        $('body').attr("class", "orange")
    }

    if ($(this).hasClass("green")) {
        console.log("prawda w zielony");
        $('body').attr("class", "green");
    }

    if ($(this).hasClass("increase")) {
        console.log("prawda w plus");
        $('.text').animate({
            "font-size": "+=10px"
        }, 500)
    }

    if ($(this).hasClass("move")) {
        console.log("prawda w strzałce");
        $('.text').animate({
            "left": "+=10px",
            "letter-spacing": "+=2px"
        }, 500)
    }
})