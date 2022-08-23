jQuery(document).ready(function(){

//메인 슬라이드
var visual=$('#slide_wrap ul li');
var button=$('.slide_num>ul>li');
var leftBtn=$('#btnImg .prev');
var rightBtn=$('#btnImg .next');
var current=0;
var setIntervalId;

function move(tg, start, end){  //매개 변수 tg, start, end를 만든다.
    tg.css('left',start).stop().animate({left: end},500);
}
function timer(){ //사용자 정의함수
    setIntervalId=setInterval(function(){
        var prev=visual.eq(current);
        var pn=button.eq(current);
        move(prev, 0, '-100%'); //target은 prev
        pn.removeClass('on');
        current++; //1씩 증가
        if(current==visual.size()){current=0;}
        var next=visual.eq(current);
        var pnn=button.eq(current);
        move(next, '100%', 0)
        pnn.addClass('on');
    },3000);
}

timer();

$('#slide_wrap').on({mouseover:function(){
    clearInterval(setIntervalId);
},mouseout:function(){
    timer();
}
});


button.click(function(){
    var tg=$(this);
    var i=tg.index();

    button.removeClass('on');
    tg.addClass('on');
    move1(i);

});

function move1(i){
    if(current==i){return}
    var currentEl=visual.eq(current);
    var nextEl=visual.eq(i);
    currentEl.css({left:0}).stop().animate({left:'-100%'},500);
    nextEl.css({left:'100%'}).stop().animate({left:0},500);

    current=i;
}

rightBtn.click(function(){
    var prev=visual.eq(current);
        var pn=button.eq(current);
        move(prev, 0, '-100%');
        pn.removeClass('on');
        current++; 
        if(current==visual.size()){current=0;}
        var next=visual.eq(current); 
        var pnn=button.eq(current);
        move(next, '100%', 0)
        pnn.addClass('on');

});

leftBtn.click(function(){
    var prev=visual.eq(current)
        var pn=button.eq(current);
        move(prev, 0, '100%');
        pn.removeClass('on');
        current--; //1씩 감소
        if(current==-visual.size()){current=0;}
        var next=visual.eq(current);
        var pnn=button.eq(current);
        move(next, '-100%', 0)
        pnn.addClass('on');
});


/* 
    //탭메뉴1 이전 다음 버튼
    var visual1=$('#one .cont li');
    var leftBtn1=$('.btn .prev');
    var rightBtn1=$('.btn .next');
    var current1=0;

    function move2(tg, start, end) {
        tg.css('left',start).stop().animate({left:end},500);  
    }

    rightBtn1.click(function() {
        var prev=visual1.eq(current1);
            move2(prev, 0, '-100%');
            current1++;
            if(current1==visual1.size()){current1=0;}
        var next=visual1.eq(current1);
            move2(next, '100%', 0)
    });

    leftBtn1.click(function() {
        var prev=visual1.eq(current1);
            move2(prev, 0, '100%');
            current1--;
            if(current1==visual1.size()){current1=0;}
        var next=visual1.eq(current1);
            move2(next, '-100%', 0)
    });

 */


    //스와이퍼
    var swiper=0;
    $(window).on("load",function () {
        swiper = new Swiper('.swiper-container2',{
            slidesPerView:2.5,
            spaceBetween:20,
            freeMode:false,
        });
    });
    $(window).on("load",function () {
        swiper = new Swiper('.swiper-container',{
            slidesPerView:4.5,
            spaceBetween:0,
            freeMode:false,
        });
    });

    $(window).on("load",function () {
        swiper = new Swiper('.swiper-container3',{
            slidesPerView:1.1,
            spaceBetween:10,
            freeMode:false,
        });
    });





    
    //급상승
    var current1=0;
    var subtext=$('.sub_text>li');
    var tim;

    function set(){ //set객체를 만듬. 
        tim = setInterval( function(){ //반복실행되는 서브텍스트들을 tim으로 지정
            var prev1=subtext.eq(current1); //현재 초기화된 상태에서 서브텍스트를 prev1에 할당
            move1(prev1, 0, '-100%'); //위로 이동
            current1++; //하나씩 추가되어 보여지도록
            if(current1==subtext.size()){ //만약 서브텍스트가 현 상태와 동일하다면
                current1=0; //초기화
            }
            var next=subtext.eq(current1);
            move1(next,'100%',0);
        },2000);
    }

    set();
    $('.sub_text').hover( function(){ //서브텍스트에 마우스 올리면
        clearInterval(tim); //반복실행 해제
    }, function(){      //마우스를 떼면
        set();         //set함수를 다시 불러와 실행
    });
    function move1(tgg,start,end){
        tgg.css('top',start).stop().animate({top:end},800); //위쪽으로
    }





    //loadmore
    	
	$('.loadmore').on('click',function(){
        $('.hide').show();
        $(".loadmore").css({"display":"none",});
        $(".close").css({"display":"block",});
        });
    
        $('.close').on('click',function(){
        $('.hide').hide();
        $(".loadmore").css({"display":"block",});
        $(".close").css({"display":"none",});
        });

});