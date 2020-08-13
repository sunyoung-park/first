$(document).ready(function(){
	/*GNB*/
	$(".gnb_main>li").mouseover(function(){
		$(this).children('.gnb_sub').stop().fadeIn(200);
	});
	$(".gnb_main>li").mouseleave(function(){
		$(this).children('.gnb_sub').stop().fadeOut(200);
	});
	
	/*비주얼 배너*/
	$(function(){
		$("#slide").bxSlider({
			auto : true,
			stopAutoOnClick: true
		});
	});

	/*포커스 나우 배경 변경*/
	
	$(function(){
		$("#focus_now01").mouseover(function(){
			$(".bglink").css({
				"background":"url('./images/bg/focus_now01.jpg') no-repeat","background-size":"cover"
			});
		});
		$("#focus_now02").mouseover(function(){
			$(".bglink").css({
				"background":"url('./images/bg/focus_now02.jpg') no-repeat","background-size":"cover"
			});
		});
		$("#focus_now03").mouseover(function(){
			$(".bglink").css({
				"background":"url('./images/bg/focus_now03.jpg') no-repeat","background-size":"cover"
			});
		});
		$("#focus_now04").mouseover(function(){
			$(".bglink").css({
				"background":"url('./images/bg/focus_now04.jpg') no-repeat","background-size":"cover"
			});
		});
		$("#focus_now05").mouseover(function(){
			$(".bglink").css({
				"background":"url('./images/bg/focus_now05.jpg') no-repeat","background-size":"cover"
			});
		});
		$("#focus_now06").mouseover(function(){
			$(".bglink").css({
				"background":"url('./images/bg/focus_now06.jpg') no-repeat","background-size":"cover"
			});
		});		
		$("#focus_now01,#focus_now02,#focus_now03,#focus_now04, #focus_now05,#focus_now06").mouseleave(function(){
			$(".bglink").css({
				"background":"url('./images/bg/cheers.jpg') no-repeat","background-size":"cheers.jpg"				
			});
		});
	});
});
