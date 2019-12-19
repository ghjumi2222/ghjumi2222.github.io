//조작은 중간과정이 안보입니다.
//동작은 중간과정이 보입니다.

setInterval("auto_gellery()",8000);
function auto_gellery(){
   $(".vs_box").stop().animate({marginLeft: "-100%"},500,function(){ //동작
      $(".vs_box li:first").appendTo(".vs_box");//조작
      $(".vs_box").css({marginLeft:0});//조작
   });
};


$(document).ready(function(){
        var wd = parseInt($(window).width());
        var aniWid = wd*-1;
        var cnt = parseInt($(".level_img li").length);
        $("#vdo1").width($(window).width());
        $("#vdo1").height($(window).width()/4*3);
        var intv = setInterval(function(){ leftAni(); },2000);
        $(".btn_box .nex").click(function () {
            clearInterval(intv);
            leftAni();
            intv = setInterval(function(){ leftAni(); }, 2000);
        });
        $(".btn_box .pre").click(function () {
            clearInterval(intv);
            rightAni();
            intv = setInterval(function(){ leftAni(); }, 2000);
        });
        function rightAni() {
            $(".level_img li").eq(2).prependTo(".level_img");
            $(".level_img").css("margin-left", aniWid);
            $(".level_img").animate({"margin-left": "0px"}, 800);                
        };
        function leftAni() {
            $(".level_img").animate({"margin-left" : aniWid}, 800, function(){
                $(".level_img li").eq(0).appendTo(".level_img");
                $(".level_img").css("margin-left", "0px");
            });
        };
    })

jQuery(function($){
	$(".nav2 li.item2").click(function(){
		$('.nav').stop().slideToggle('fast');
	});
});



