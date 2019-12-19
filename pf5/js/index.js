$(document).ready(function(){
    
    var intv = setInterval(function(){
        autoAni();
    },2800);
    var vswd=parseInt($('.vs_box li').width());
    function autoAni(){
        $('.vs_box').not(':animated').animate({
            marginLeft:'-'+vswd+'px'
        },1800,function(){
            
            $('.vs_box').css('margin-left','0px');
            $('.vs_box li').eq(0).appendTo($('.vs_box'));
            
            
        });
        
        
        
    };
    
    
    var intv2=setInterval(function(){
        nexAni()
    },2800);
    
    
    var level_wd=parseInt($('.level_img li').width());
    
    function nexAni(){
        $('.level_img').not(':animated').animate({
            marginLeft:'-'+level_wd+'px'
        },800,function(){
            
            $('.level_img').css('margin-left','0px');
            $('.level_img li').eq(0).appendTo($('.level_img'));
            
            
        });
        
    };
    function priAni(){
        $('.level_img li').eq(4).prependTo( $('.level_img'));
        
        $('.level_img').css('margin-left','-'+level_wd+'px');
         $('.level_img').animate({marginLeft:'0px'},800)
        
    };
    
    $('.nex').click(function(){
        clearInterval(intv2)
        nexAni();
        intv2=setInterval(function(){
        nexAni()
    },2800);
        
    });
    
    $('.pre').click(function(){
        clearInterval(intv2)
        priAni();
        intv2=setInterval(function(){
        nexAni()
    },2800);
    });
    
    
    
});