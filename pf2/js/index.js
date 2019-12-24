$(document).ready(function(){

//패럴럭스 스크롤링
var wh = $(window).height();
var wd = $(window).width();
$(".sc_page").each(function (index) { //idx 0-> 0*1920=0
    $(this).attr("data-val", index * wh);
});
$(".sc_page").on("mousewheel DOMMouseScroll", function (e) {
    var secPos = parseInt($(this).attr("data-val")); //on(뭐뭐할때)
    if (e.originalEvent.wheelDelta >= 0) {
        $("html, body").stop().animate({
            scrollTop: secPos - wh
        });
        return false;
    } else if (e.originalEvent.wheelDelta < 0) {
        $("html, body").stop().animate({
            scrollTop: secPos + wh
        });
        return false;
    }
});
/*
mousewheel 익스플로어용 / DOMMouseScroll 사파리,크롬용
e.originalEvent.wheelDelta 마우스를 드래그하는걸 오리지널 이벤트라고함

.stop() 중간이라도 멈추고 싶다하면 멈출수도있다 ㅇㅅㅇ
return false; a태그의 상단으로 이동하는것을 막기 위함.
*/
    
   var vs_boxwd=parseInt($('.vs_box li img').width());
    
   
    var intv=setInterval(function(){
        nexAni();
    },5000); 
    function nexAni(){
        $('.vs_box ul').stop(':animated').animate({marginLeft:'-=' + vs_boxwd + 'px'},500,function(){
            $('.vs_box ul li').eq(0).appendTo( $('.vs_box ul'))
            $('.vs_box ul').css('margin-left','0px');
            
            
        });
                
    };
    
    function priAni(){
        $('.vs_box ul li').eq(4).prependTo($('.vs_box ul'))
        $('.vs_box ul').css('margin-left','-'+vs_boxwd+'px');
        $('.vs_box ul').not(':animated').animate({marginLeft:'0px'},500)
    };
    
    $('.page1b_wrap label:nth-child(2)').click(function(){
        clearInterval(intv);
        nexAni();
intv=setInterval(function(){
        nexAni();
    },5000); 
    });
    
       $('.page1b_wrap label:nth-child(1)').click(function(){
        clearInterval(intv);
        priAni();
intv=setInterval(function(){
        nexAni();
    },5000); 
    });     
    
    var page3li_wd = parseInt($('.page3_img_box li').width());
    
    var intv2=setInterval(function(){
        rightAni();
    },2800); 
  

    function rightAni(){
             $('.page3_img_box').stop(':animated').animate({marginLeft:'-=' + page3li_wd + 'px'},500,function(){
            $('.page3_img_box li').eq(0).appendTo( $('.page3_img_box'))
            $('.page3_img_box').css('margin-left','0px');
            
            
        });
    };
    
        function leftAni(){
        $('.page3_img_box li').eq(3).prependTo($('.page3_img_box'))
        $('.page3_img_box').css('margin-left','-'+page3li_wd+'px');
        $('.page3_img_box').not(':animated').animate({marginLeft:'0px'},500)
    };
    
    $('.page3_box .item8 label:nth-child(1)').click(function(){
        clearInterval(intv2);
        rightAni();
intv2=setInterval(function(){
        rightAni();
    },5000); 
    });
        $('.page3_box .item8 label:nth-child(2)').click(function(){
        clearInterval(intv2);
        leftAni();
intv2=setInterval(function(){
        rightAni();
    },5000); 
    });
    
    
});