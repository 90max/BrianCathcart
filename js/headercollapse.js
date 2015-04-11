$(window).scroll(function() {    



    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $(".nav").addClass("nav-edit");
    }else {
        $(".nav").removeClass("nav-edit");
    }
});