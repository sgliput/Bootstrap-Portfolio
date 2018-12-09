$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(".thumbnail").hover(function () {
    $(this).children(".dropdown").show();
    $(this).css("background", "blue");
}, function () {
    if($(this).children(".dropdown").attr('data-clicked') == "false"){
        $(this).children(".dropdown").hide();
        $(this).css("background", "white");
    }
});


$(".thumbnail").on("click", function () {
    if ($(this).children(".dropdown").attr("data-clicked") == "false") {
        $(this).children(".dropdown").show();
        $(this).children(".dropdown").attr("data-clicked", "true");
        $(this).css("background", "blue");
    } else {
        $(this).children(".dropdown").hide();
        $(this).children(".dropdown").attr("data-clicked", "false");
        $(this).css("background", "white");
    };
})

$(".titleBox").on("click", function () {
    console.log("Clicked4: " + clicked);
})


