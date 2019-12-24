$(document).ready(function(){
 
    
    $('.toggle_btn').click(function(){
        var tbtn= $('.toggle_btn span');
         $('.gnb').slideDown();
        
        if($(tbtn).hasClass('on')){
            $(tbtn).removeClass('on');
            $('.gnb li').find('.sub').removeClass('on');
            
         $('.gnb').slideUp();
            $('.gnb li').removeClass('on');
            

            
            
        }else{ $(tbtn).addClass('on');}
      
       
    });
    
    $('.gnb li').click(function(){
        $('.gnb li').find('.sub').removeClass('on');
        $('.gnb li').removeClass('on');
        $(this).find('.sub').addClass('on');
        $(this).addClass('on');
        
    });
    
    $('.side_menu h3').click(function(){
        if($('.side_menu').hasClass('on')){
            $('.side_menu').removeClass('on')
            
        }else{$('.side_menu').addClass('on')
              
             }
        
        
    });


    
    
});



