$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 3000
      });
    $(".qMenu").click(function(){
        $("#nav1").removeClass("left"),
        $("ul.left").css("display","none"),
        $("#nav1").addClass("right"),
        $("ul.right").css("display","block")
    })
    $(".mainN").click(function(){
        $("#nav1").removeClass("right"),
        $("ul.left").css("display","block"),
        $("#nav1").addClass("left"),
        $("ul.right").css("display","none")
    })
}) 