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

window.addEventListener('scroll', function(e) {
    vm2.leave_top = (document.body.scrollTop>0)?1:0;
    if(document.body.clientWidth>=768){
        vm2.mobile_leave_top = (document.body.scrollTop>0)?1:0;
    }else{
        vm2.mobile_leave_top = 0;
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
        ],
        leave_top: 0,
        mobile_leave_top: 0,
    }
})

$(document).ready(function(){
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
