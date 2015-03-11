$(window).scroll(function() {
    if ($(".nav").offset().top > 50) {
        $(".nav").addClass("nav-edit");
    } else {
        $(".nav").removeClass("nav-edit");
    }
});