    $(document).ready(function(){
        //한페이지씩 스크롤
        
        $('.con_wrap img').addClass('on');
        
        $('html,body').animate({scrollTop:'0'})
//        
//        var sc_pg=parseInt($(window).height());
//        
//        $(window).on('mousewheel',function(e){
//            if(e.originalEvent.wheelDelta < 0){
//                $('html,body').not(':animated').animate({scrollTop:'+='+sc_pg+'px'},800);
//                
//
//            }else{
//              $('html,body').not(':animated').animate({scrollTop:'-='+sc_pg+'px'},800)  
//            }
//            return false;
//            
//            
//            
//            
//        })
        

         var intv2=setInterval(function(){
             autoAni();
         },3500);   
        
     
        
            function autoAni(){
                $('.scroll_con_wrap ul').not(':animated').animate({marginLeft:'-='+400+'px'},1000,function(){
                    
                    $('.scroll_con_wrap ul li').eq(0).appendTo($('.scroll_con_wrap ul'))
                    $('.scroll_con_wrap ul').css('margin-left','0px')
                    
                });
                
            }
        


        $(window).on('mousewheel',function(e){
            var sct=parseInt($(window).height());
           
            var page1T = $('.page1').offset().top;
            var page1H = $('.page1').height()/3;
            var page2T = $('.page2').offset().top;
            var page2H = $('.page2').height()/3;
            var page3T = $('.page3').offset().top;
            var page3H = $('.page3').height()/3;
            var page4T = $('.page4').offset().top;
            var page4H = $('.page4').height()/3;
            var page5T = $('.page5').offset().top;
            var page5H = $('.page5').height()/3;


            
                    
            if(e.originalEvent.wheelDelta >= page1T-page1H ){
                $('.page2').addClass('on');
                $('.top').removeClass('on');
            }
            if(e.originalEvent.wheelDelta >= page2T-page2H ){
                 $('.page3').addClass('on');
                 $('.top').addClass('on');
            }
            
            if(e.originalEvent.wheelDelta >= page3T-page3H ){
                $('.page4').addClass('on');
            }
            if(e.originalEvent.wheelDelta >= page4T-page4H ){
                $('.page5').addClass('on');
            }
            if(e.originalEvent.wheelDelta >= page5T-page5H ){
                $('.page6').addClass('on');
            }
              return false;
        });
     
        
          
           });

