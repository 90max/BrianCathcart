$(".items").on("click", "li", function() {
    $("#box").html($(this).html());
});