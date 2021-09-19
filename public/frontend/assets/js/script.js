$(document).scroll(function () {
    //Show element after user scrolls 800px
    var y = $(this).scrollTop();
    if (y > 50) {
         $("header").css("color","black");
         $("header").css("background-color","white");
         $("header").css("border-bottom","1px solid ");
    } else {
        $("header").css("color","white");
        $("header").css("background-color","transparent");
        $("header").css("border-bottom","none ");
    }

    // Show element after user scrolls past
    // the top edge of its parent

});
