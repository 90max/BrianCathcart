$(window).scroll(function() {    



    var scroll = $(window).scrollTop();

    if (scroll >= 85) {
        $(".nav").addClass("nav-edit");
    }else {
        $(".nav").removeClass("nav-edit");
    }
});