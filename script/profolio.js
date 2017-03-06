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
    el: "#main_profolio",
    data:{
        profolio_data: profoliodata
    }
});

var vm2 = new Vue({
    el: "#navbar",
    data: {
        nav_data: [
            {title:"個人簡介", url:"index.html#section_intro"},
            {title:"作品集", url:"index.html#section_profolio"},
            {title:"專業技能", url:"index.html#section_skill"},
            {title:"聯絡資訊", url:"index.html#section_contact"},
        ]
    }
})


$(document).ready(function(){
    //導覽列捲動
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $("#navbar,.nav_icon,.nav_item,.nav_link,.next-page").addClass("leavetop");
        }else{
            $("#navbar,.nav_icon,.nav_item,.nav_link,.next-page").removeClass("leavetop");
        }
        navchange();
    })
    //手機導覽列
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
