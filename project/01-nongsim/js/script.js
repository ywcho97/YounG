$(function(){
    $('nav>ul>li').mouseenter(function(){
        $('.nav>ul>li>ul').stop().slideDown(250);
    });
    $('nav>ul>li').mouseleave(function(){
        $('.nav>ul>li>ul').stop().slideUp(500);
    });
});


$(function() {
	
	/* 슬라이드 - 호버로 변경 */
	$(function() {

	  $('#slider>div>ul>li').mouseenter(function() {
		$('#slider').addClass('on');
		$('#slider>div>ul>li').removeClass('on');
		$(this).addClass('on');
	  });

	  $('#slider>div>ul>li').mouseleave(function() {
		$('#slider').removeClass('on');
		$('#slider>div>ul>li').removeClass('on');
	  });

	});		
	
});
$(function(){

    //슬라이드 이미지
    var visual = $('.pc_main>ul>li'); //슬라이드 이미지
    var button = $('.slide_num>ul>li'); //슬라이드 버튼
    var current= 0 ; //현재상태 초기화
    var setIntervalId; //변수선언
    
    function move(tg, start, end){ //move함수를 이용해 해당객체를 시작과 끝지점으로 이동
        tg.css('left',start).stop().animate({left:end},500);
    }
    
    function timer(){ //일정시간 호출하기위해 타이머를 만듬.
    
        setIntervalId = setInterval(function(){ //반복실행 지정
    
            var prev = visual.eq(current);//현재 자신의 위치를 prev에 담고
            var pn = button.eq(current);//현재 순번 버튼을 pn으로 담고
            move(prev, 0, '-100%'); //오른쪽에서 왼쪽으로 이동
    
            pn.removeClass('on'); //순번 버튼 on해제
            current++; //현재 상태에서 하나씩 추가
    
            if(current==visual.size()){current=0;}
            //비주얼 이미지의 사이즈가 끝까지 갔다면 current에 담아서 초기화 
    
            var next = visual.eq(current);
            var pnn = button.eq(current);
            move(next,'100%',0); 
            pnn.addClass('on')
        },3000);
    
    }
    
        timer();
    
        $('.sd_stop').click(function(){ //stop버튼을 클릭하면
            clearInterval(setIntervalId); //반복취소
            $('.sd_stop').hide();
            $('.sd_start').show();
        });
    
        $('.sd_start').click(function(){ //stop버튼을 클릭하면
            timer(); //반복실행
            $('.sd_stop').show();
            $('.sd_start').hide();
        });
    
        button.click(function(){
    
            var tg = $(this); //클릭한 버튼을 tg라 하고
            var i = tg.index(); //클릭되어진 요소(인덱스0~2)를 i라하고
            button.removeClass('on');
            tg.addClass('on');
            movel(i); //버튼을 누르면 현재 화면에서 해당요소의 이미지가 보여지도록
    
        });
    
        function movel(i){
            if(current==i){return} //i가 현재화면과 같다면 되돌아가~~
            var currentEl=visual.eq(current);
            var nextEl=visual.eq(i);
    
            currentEl.css({left:0}).stop().animate({left:'-100%'},500);
            nextEl.css({left:'100%'}).stop().animate({left:0},500);
    
            current=i;
        }

    $('#quick a').hide();
    $(window).scroll(function(){ //브라우저에 스크롤 변화가 발생하면 호출

        if($(this).scrollTop()>500){ //스크롤의 위치가 500보다 크다면
            $('#quick>a').fadeIn(); //버튼이 서서히 나타나도록
        } else{
            $('#quick>a').fadeOut();//그렇지않으면 서서히 사라지도록
        }
    });

    $('#quick>a').click(function(){ //탑버튼을 클릭했을때 (click이벤트)
        $('html,body').animate({scrollTop:0},400);//스크롤의 위치를 탑0으로 이동
        return false;//원래 가지고 있는 링크속성 무시
    });



    $('#quick .quick_menu').hide();
    $(window).scroll(function(){ //브라우저에 스크롤 변화가 발생하면 호출

        if($(this).scrollTop()>0){ //스크롤의 위치가 500보다 크다면
            $('#quick .quick_menu').fadeIn(); //버튼이 서서히 나타나도록
        } else{
            $('#quick .quick_menu').fadeOut();//그렇지않으면 서서히 사라지도록
        }
    });
    $('#quick .quick_product').click(function(){ //탑버튼을 클릭했을때 (click이벤트)
        $('html,body').animate({scrollTop:1080},400);//스크롤의 위치를 탑0으로 이동
        return false;//원래 가지고 있는 링크속성 무시
    });
    $('#quick .quick_event').click(function(){ //탑버튼을 클릭했을때 (click이벤트)
        $('html,body').animate({scrollTop:1920},400);//스크롤의 위치를 탑0으로 이동
        return false;//원래 가지고 있는 링크속성 무시
    });
    $('#quick .quick_news').click(function(){ //탑버튼을 클릭했을때 (click이벤트)
        $('html,body').animate({scrollTop:2550},400);//스크롤의 위치를 탑0으로 이동
        return false;//원래 가지고 있는 링크속성 무시
    });
    $('#quick .quick_story').click(function(){ //탑버튼을 클릭했을때 (click이벤트)
        $('html,body').animate({scrollTop:3250},400);//스크롤의 위치를 탑0으로 이동
        return false;//원래 가지고 있는 링크속성 무시
    });
    $('#quick .quick_newproduct').click(function(){ //탑버튼을 클릭했을때 (click이벤트)
        $('html,body').animate({scrollTop:3700},400);//스크롤의 위치를 탑0으로 이동
        return false;//원래 가지고 있는 링크속성 무시
    });
    


    $('#quick>.quick_menu>a').hide();
    $(window).scroll(function(){ //브라우저에 스크롤 변화가 발생하면 호출

        if($(this).scrollTop()>500){ //스크롤의 위치가 500보다 크다면
            $('#quick>.quick_menu>a').fadeIn(); //버튼이 서서히 나타나도록
        } else{
            $('#quick>.quick_menu>a').fadeOut();//그렇지않으면 서서히 사라지도록
        }
    });

});
$(function(){

	
	$('.loadmore').on('click',function(){
	$('.hide').slideDown(600);
	$(".loadmore").css({"display":"none",});
	$(".close").css({"display":"block",});
	});

	$('.close').on('click',function(){
	$('.hide').slideUp(600);
	$(".loadmore").css({"display":"block",});
	$(".close").css({"display":"none",});
	});
	
});