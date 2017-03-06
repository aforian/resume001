$(document).ready(function(){
    //導覽列離開頂端
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $("#navbar,.nav_icon,.nav_item,.nav_link,.next-page").addClass("leavetop");
        }else{
            $("#navbar,.nav_icon,.nav_item,.nav_link,.next-page").removeClass("leavetop");
        }
        navchange();
    })
    
    function navchange(){
        if($(window).width()<=768){
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
    
    // 導覽列點選滑動
    var nav_item = $(".nav_item a");
    $(".brand a").click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500, 'easeInOutCubic');
    });
    nav_item.each(function(){
        $(this).click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500, 'easeInOutCubic');
        })
    })
    $(".next-page").click(function(){
        $('html, body').animate({
            scrollTop: $("#section_intro").offset().top
        }, 500, 'easeInOutCubic');
    })
    
    //手機選單
        $(".nav_icon").click(function(){
            $(".nav_top").fadeToggle(300);
            $(this).toggleClass('active');
        })
    
    //首頁動態
    $("#home-frame").mousemove(function(e){
        var pagex = e.pageX, pagey = e.pageY;
        var frame_width = $("#home-frame").width();
        var frame_offset = $("#home-frame").offset();
        var relX = pagex-frame_offset.left;
        var radio = relX/frame_width-1;
        console.log(radio);
        if($(window).width()>768){
            $("#home_img1").css("transform","rotateY("+(radio*65-10)+"deg) translateY(-50%)");
            $("#home_img2").css("transform","rotateY("+(radio*65-15)+"deg) translateY(-50%)");
            $("#home_img3").css("transform","rotateY("+(radio*65-20)+"deg) translateY(-50%)");
        }
        
    })

    $(".home_img").children('img').each(function(){
        $(this).mouseover(function(){
            $(".home_img img").not(this).stop().fadeTo(100,0.4);
        })
        $(this).mouseout(function(){
            $(".home_img img").stop().fadeTo(100,1);
        })
    })
    
    $(".backtop").click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 600, 'easeInOutCubic');
    })
})

var profoliodata = [
    {title:"童理心－畢業製作網站",
     sub:"淡江大學資傳系104畢製小組網站",
     url:"url('images/ian_pro_img1.png')"},
    {title:"仿Hahow網站練習",
     sub:"使用ajax與vue.js呈現資訊",
     url:"url('images/ian_pro_img2.png')"},
    {title:"印刷術主題網站",
     sub:"使用bootstrap快速製作",
     url:"url('images/ian_pro_img3.png')"},
    {title:"自我介紹動畫網站",
     sub:"滾軸製作動畫",
     url:"url('images/ian_pro_img4.png')"},
    {title:"動態天氣報告",
     sub:"使用SVG製作動畫",
     url:"url('images/ian_pro_img5.png')"},
    {title:"模擬購物清單",
     sub:"利用ajax進行非同步載入",
     url:"url('images/ian_pro_img6.png')"},
];

var vm1 = new Vue({
    el: "#section_profolio",
    data:{
        profolio_data: profoliodata
    }
});