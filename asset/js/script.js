$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50){
            $("header").addClass("active");
        }
        else{
            $("header").removeClass("active");
        }
    })
})