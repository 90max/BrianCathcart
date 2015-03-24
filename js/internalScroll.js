$('.scrollto').click(function() {
    $('#' + $(this).text()).get(0).scrollIntoView();
    // or $('#' + $(this).text())[0].scrollIntoView();
});