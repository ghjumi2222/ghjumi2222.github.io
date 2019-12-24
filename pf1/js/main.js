$(document).ready(function(){

     
    

    var intv=setInterval(function(){
        nextAni();
    },7000);
    
    function nextAni(){
        $('.slide_box').stop(":animated").animate({marginLeft:'-='+700+'px'},1000,function(){
            $('.slide_box li').eq(0).appendTo($('.slide_box'))
            $('.slide_box').css('margin','0px')
        });
        
    };
    function priAni(){
       
      $('.slide_box li').eq(4).prependTo($('.slide_box')); 
        $('.slide_box').css('margin-left','-700px');
     $('.slide_box').not(':animated').animate({marginLeft:'0px'},1000)     

    };
    
    
    $('.btn_box .right i').click(function(){
        clearInterval(intv);
        nextAni();
        intv=setInterval(function(){
        nextAni();
    },7000);
           
        });
   

    $('.btn_box .left i').click(function(){
        clearInterval(intv);
        priAni();
        intv=setInterval(function(){
        nextAni();
    },7000);
           
        });
    
    
    var intv2 =setInterval(function(){
        rightAni()
    },2800);
    
    $('.event_box a').eq(0).addClass('on'); 
    function rightAni(){
       
       $('.event_box').stop(':animated').animate({marginLeft:'-='+350+'px'},500,function(){
            $('.event_box a').eq(0).appendTo($('.event_box'));
            $('.event_box').css('margin-left','0px');
            $('.event_box a').addClass('on');
           
             
        });
        
        $('.event_box a').removeClass('on')
       
    };
    
    function leftAni(){
         $('.event_box a').eq(2).prependTo($('.event_box'));
        $('.event_box').css('margin-left','-350px');
        $('.event_box').not(':animated').animate({
            marginLeft:'0px'
        },500)
    };
    
    $('.btn_box2 div.left').click(function(){
        clearInterval(intv2);
        leftAni();
        intv2=setInterval(function(){
        rightAni()
    },2800);
    });
    $('.btn_box2 div.right').click(function(){
                clearInterval(intv2);
        rightAni();
        intv2=setInterval(function(){
        rightAni()
    },2800);
        
    });
       
    
    $('.wrap').hide()
    $('.pop_click').click(function(){
        setTimeout($('#pop').slideUp(600));
        $('.wrap').show(100)
        $('.logo').delay(1000).addClass('on');
        
    });
    
        $(function(){
        $('.wrap').niceScroll({
        cursorcolor: "orange",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });
        
    });
   

    
    
});




