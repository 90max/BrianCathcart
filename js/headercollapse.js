$(window).scroll(function() {    



    var scroll = $(window).scrollTop();

    if (scroll >= 124) {
        $(".nav").addClass("nav-edit");
    }else {
        $(".nav").removeClass("nav-edit");
    }
});