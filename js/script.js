$(function(){
    $(".gnb>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $(".gnb>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp();
    });

    $(".toggle").click(function(){
        $(".gnb").slideToggle()
        $(".change").css("display","block");
        $(".one").css("display","none");
    });

    $(".change").click(function(){
        $(".one").css("display","block");
        $(".change").css("display","none");
    });


    $("#bar").draggable({
        axis:"x",
        containment:"parent"
    });

    let min = 0;
    let max = -568;

    $("#bar").on("drag",function(){
        let barLeft = parseFloat($("#bar").css("left"));

        let pos =(barLeft*(max-min))/427+min;
        $(".contentWrap").css("left",pos);
    });


    $(window).resize(function(){
        let winW = window.innerWidth;
        if(winW > 768){
            $(".gnb").css("display","flex");
        }else{
            $(".gnb").css("display","none");
            $(".gnb>.gnb_n>a").click(function(e){
                e.preventDefault();
            });
        }
    });
    $(window).trigger("resize");
});

