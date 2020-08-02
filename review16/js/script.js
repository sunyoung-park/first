
/*팝업*/

function Func(){
	$(".popup").show();
	$(".close_btn").click(function(){
		$(".popup").hide();
	});
}


/*탭 메뉴*/

$(function(){
	$(".tab_m01").click(function(){
		$(".con01").show(); //공지사항에 해당하는 div를 보여줌.
		$(".con02").hide(); //갤러리에 해당하는 div를 가려줌.
		$(this).toggleClass("active").next().removeClass("active")
	});
	$(".tab_m02").click(function(){
		$(".con02").show(); //갤러리에 해당하는 div를 보여줌.
		$(".con01").hide(); //공지사항에 해당하는 div를 가려줌.
		$(this).toggleClass("active").prev().removeClass("active")
	});
});





/*GNB 슬라이드 메뉴*/

$(function(){
	$(".menu>li").mouseover(function(){
		$(this).children(".sub_menu").slideDown(300); //마우스 올렸을 때
	});
	$(".menu>li").mouseleave(function(){
		$(this).children(".sub_menu").slideUp(100); //마우스 떠났을 떄
	});
	
});




/*슬라이드 배너*/

setInterval(function(){
	$(".slide_box>div").animate({"marginTop":-300},
	function(){
		$(".slide_box>div>div:first").appendTo(".slide_box>div");
		$(".slide_box>div").css("marginTop",0); //윗 공간을 딱 붙이려고
	});
},3000);






























