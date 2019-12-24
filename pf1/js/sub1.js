$(document).ready(function(){

     
    $('.logo').addClass('on');
        $('.menu_box1').addClass('on')
    $('#menu1').click(function(){
        $('.menu_con ul').removeClass('on')
        $('.menu_box1').addClass('on')
    });
    
        $('#menu2').click(function(){
        $('.menu_con ul').removeClass('on')
        $('.menu_box2').addClass('on')
    });
    
        $('#menu3').click(function(){
        $('.menu_con ul').removeClass('on')
        $('.menu_box3').addClass('on')
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


