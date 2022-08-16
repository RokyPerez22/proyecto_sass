$(function() {
    $(".navegar__btn").on("click", function() {
        if ($(".navegar__item").hasClass("active")) {
            $(".navegar__item").removeClass("active");
            $(this).find("a").html("<i class='bi bi-list'></i>");
        } else {
            $(".navegar__item").addClass("active");
            $(this).find("a").html("<i class='bi bi-x-lg'></i>");
        }
    });
});

