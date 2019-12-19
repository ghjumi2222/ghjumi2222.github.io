$(document).ready(function(){
    
    $('.fix span').addClass('on');

    $('.gnb li').click(function(){
         $('.wrap').css('overflow-y','scroll');
        
    });
    
    
    $('#mixItUp div').click(function(){
            $('#modal_pop').show(0)
        
            var this_num=$(this).attr('data-myorder');
            
            $('#modal_pop .image_box .img_box').show(0).html("<img src='img/mx_img"+this_num+".png'>");
            $('#modal_pop .image_box .txt_img').show(0).html("<img src='img/mx_txt_img"+this_num+".png'>");
            
            var this_src=$(this).attr('src');
            var this_on=$(this).attr('onClick');
            $('#modal_pop .image_box .img_btn').show(0).html(
            "<a href='"+this_src+"' onClick'"+this_on+"' target='_blank'>바로가기</a>");
           
            
        return false;
            

         
        
    });
              
    $('.close_btn').click(function(){
        $('#modal_pop').hide(100)
    })
    
    
    $("#mixItUp").mixItUp({
            selector:{filter:".filter"}
         });
    
    
    $('.ci5').click(function(){
        $('.contain').animate({marginLeft:'-1920px'},800);
        $('.wrap').css('overflow-y','scroll');

        $('.tit li').addClass('t3');
         $('.bg_left img').addClass('t3');
        $('.intro').addClass('t3');
        $('.profile').addClass('t3');
        $('.personality p').addClass('t3');
        $('.personality h4').addClass('t3');
        var btn_ani=setTimeout(function(){
            $('.logo_Y').addClass('on')
            
            
        },1000);
         var t1500=setTimeout(function(){
            
            $('.bg_left img').addClass('op');
            $('.bg_left img').removeClass('t3');
            
            
        },1500);
        
        var t2000=setTimeout(function(){
            
            $('.intro').addClass('op');
            $('.intro').removeClass('t3');
            $('.profile').addClass('op');
            $('.profile').removeClass('t3');
            
        },2000);
        
        
        var t2500=setTimeout(function(){
              $('.personality h4').addClass('op');
            $('.personality h4').removeClass('t3');
            $('.personality p').addClass('op');
            $('.personality p').removeClass('t3');
             
            
            
        },2500);
        
        var t3000=setTimeout(function(){
         $('.tit li').addClass('op');
        $('.tit li').removeClass('t3');
            
        
       $('.gr_ps').delay(1000).animate({width: '95%'},2000);
       $('.gr_html').delay(1000).animate({width: '90%'},2000);
       $('.gr_jq').delay(1000).animate({width: '80%'},2000);
            
       
          
            
            
        },3000);
        
       

        
        
        
        
        var t4000=setTimeout(function(){
            
           
            
            
        },4000);
        
      
         
 
                
            
              
              

        
        
        
    });
    
     var nt1=setTimeout(function(){

        $('.line_box .line1 img').eq(1).addClass('on');
        
    },1500)
    
    var nt1=setTimeout(function(){

       $('.line_box .line1 img').eq(0).addClass('on')
  
    },2000)
    
    var nt1=setTimeout(function(){
        $('.circle_box li').eq(0).animate({opacity:1},1000,)
        $('.logo_w').addClass('on')
            
    },2500)
        var nt1=setTimeout(function(){
        $('.circle_box li').eq(1).animate({opacity:1},1000,)
            
            
    },3000)

    var nt1=setTimeout(function(){
        $('.circle_box li').eq(2).animate({opacity:1},1000,)
            $('.circle_box li').eq(4).animate({scale:0.8,opacity:1},1000,function(){
     $('.circle_box li').eq(4).animate({opacity:1,scale:1},1000,)
            
        });
    $('.pr_txt_box div').eq(0).addClass('wmax')
     $('.pr_txt_box div').eq(0).css('opacity',1)     
        
            
    },3500)

        var nt1=setTimeout(function(){
        $('.circle_box li').eq(3).animate({opacity:1},1000,)
            
            
    },4000)
        
    var nt1=setTimeout(function(){
            $('.pr_txt_box div').eq(1).addClass('wmax1')
     $('.pr_txt_box div').eq(1).css('opacity',1)     
        
         
 
            
    },4500)

    
          $('.wrap').scroll(function(){
            var sct=$('.wrap').scrollTop();  
              
              
            if(sct<=100){//100px미만스크롤시
            
                $('.gnb').css('position','absolute');
               $('#page2 .controls').addClass('t3'); 
             $('#page2 .container').addClass('t3'); 
                $('#page2 .bg_left .pagetit').addClass('t3'); 
                $('#page3 .left .pagetit').addClass('t3');
            }
            if(sct>=500){//500px이상 스크롤 실행시
               $('#page3 .left_box').addClass('t3'); 
             
            }  
            if(sct>=800){//500px이상 스크롤 실행시
           
                $('#page2 .controls').addClass('op'); 
                $('#page2 .controls').removeClass('t3'); 
                $('#page2 .container').addClass('op'); 
                $('#page2 .container').removeClass('t3'); 
             
            }    
            if(sct>=1000){//500px이상 스크롤 실행시
                $('.gnb').css('position','fixed');
                $('#page2 .controls').addClass('op'); 
                $('#page2 .controls').removeClass('t3'); 
                $('#page2 .container').addClass('op'); 
                $('#page2 .container').removeClass('t3'); 
                $('#page2 .bg_left .pagetit').addClass('op');
                $('#page2 .bg_left .pagetit').removeClass('t3');
                
            }    
            

            if(sct>=2100){//500px이상 스크롤 실행시
               $('.gnb').css({position:'fixed'});
               $('.gnb li a').css({color:'#ff6969'});
                 $('#page3 .left_box').addClass('op'); 
               $('#page3 .left_box').removeClass('t3');  $('#page3 .left .pagetit').addClass('op');
                $('#page3 .left .pagetit').removeClass('t3');
                
            }  
            
            if(sct<2100){//500px이상 스크롤 실행시
              
               $('.gnb li a').css({color:'#ffdb00'});
                $('.gnb').css('position','absolute'); 
            }  
              
            if(sct<1500){//500px이상 스크롤 실행시
               $('.gnb').css('position','fixed');
             
            }     
            if(sct<900){//500px이상 스크롤 실행시
                $('.gnb').css('position','absolute');
             
            }  
              
        });
    
    
    
    
    
});
