$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $("#navbar,.nav_icon,.nav_item,.nav_link,.next-page").addClass("leavetop");
        }else{
            $("#navbar,.nav_icon,.nav_item,.nav_link,.next-page").removeClass("leavetop");
        }
        navchange();
    })
    function navchange(){
        if($(window).width()<=700){
           if($(window).scrollTop()>0){
            $(".nav_top").addClass("leavetop");
            }else{
                $(".nav_top").removeClass("leavetop");
            } 
        }else{
            $(".nav_top").show();
            $(".nav_top").removeClass("leavetop");
        }
    }
    $(".nav_icon").click(function(){
            $(".nav_top").fadeToggle(300);
            $(this).toggleClass('active');
        })
    $(".backtop").click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 600, 'easeInOutCubic');
    })
})