$(document).ready(function(){
    
    //gnb 메뉴 설정
    $(".dp2,.menu_bg") .hide();
    
    $(".gnb>li").mouseenter(function(){
       $(".dp2,.menu_bg").stop().slideDown();
    });
    
    $(".gnb>li").mouseleave(function(){
       $(".dp2,.menu_bg").stop().slideUp();
    });
    
    
    
     //메인 비쥬얼 슬라이더 설정
    var slider = $(".mv").bxSlider({
        auto: true
    });
    
}); //문서준비이벤트 종료