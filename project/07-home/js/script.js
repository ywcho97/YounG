$(document).ready(function(){

	//배너존
	var slider2 = $(".slider2").bxSlider({
		auto:true,
		autoControls:true,
		stopAutoOnClick:true,
		pager:true,
		pagerType: "short",

		onSliderLoad:function(){
			$('.bx-clone').find('a').prop('tabindex','-1');
		},
		onSlideAfter:function(){
			$('.slider2 > div').each(function(){
				if( $(this).attr('aria-hidden') == 'false'){
					$(this).find('a').attr('tabindex','0');
				}
			});
		}
	});
	$('.slider2').keyup(function(){
		$(".slider2").css('transform','translate3d(-383px,0,0)');
		slider2.stopAuto();
	});

	//카드뉴스
	var slider3 = $(".slider3").bxSlider({
		auto:true,
		autoControls:true,
		stopAutoOnClick:true,
		pager:true,
		pagerType: "short",
		onSliderLoad:function(){
			$('.bx-clone').find('a').prop('tabindex','-1');
		},
		onSlideAfter:function(){
			$('.slider3 > div').each(function(){
				if( $(this).attr('aria-hidden') == 'false'){
					$(this).find('a').attr('tabindex','0');
				}
			});
		}
	});
	$('.slider3').keyup(function(){
		$(".slider3").css('transform','translate3d(-383px,0,0)');
		slider3.stopAuto();
	});

	//알림존
	var slider4 = $(".slider4").bxSlider({
		auto:true,
		autoControls:true,
		stopAutoOnClick:true,
		pager:true,
		pagerType: "short",
		onSliderLoad:function(){
			$('.bx-clone').find('a').prop('tabindex','-1');
		},
		onSlideAfter:function(){
			$('.slider4 > div').each(function(){
				if( $(this).attr('aria-hidden') == 'false'){
					$(this).find('a').attr('tabindex','0');
				}
			});
		}
	});
	$('.slider4').keyup(function(){
		$(".slider4").css('transform','translate3d(-383px,0,0)');
		slider4.stopAuto();
	});





	// 시작,정지 아이콘 변환
	$(".bx-controls-auto a").on("click", function(){
			if( $(this).hasClass('bx-stop') ){
				$(this).css('display','none');
				$(this).prev().css('display','inline-block');
			}else {
				$(this).css('display','none');
				$(this).next().css('display','inline-block');
			}
	});


});
