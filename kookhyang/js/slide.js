var n = 0; // 버튼 이미지 관련된 변수.

$("#con1 #thumbs a"). eq(n).children("img").attr({"src":"./images/btn_banner_ov.png"});

/*버튼 이미지와 관련된 함수*/
function view(n){
	$("#con1 #thumbs a").children("img").attr({"src":"./images/btn_banner.png"});
	/*
		모든 버튼을 선만 있는 동그라미로 변경
	*/
	$("#con1 #thumbs a"). eq(n).children("img").attr({"src":"./images/btn_banner_ov.png"});
	/*
		n값에 따라서 해당 버튼이 까만색 동그라미로 변경되게 함.
	*/
}

function count(){
	n++; // n값(버튼이미지의 인덱스) : 1씩 증가
	if(n<4){//전체 보여줄 사진 개수가 6 n<6
		view(n);
	}else{
		n=0;
		view(n); //무조건 n에 0을 달고 호출됨.
		// 네번째 버튼이 까만색으로 바뀐 후 다시 첫번째 버튼이 까만색으로 변경도리 수 있게 n값을 0 으로 돌린 후에 함수를 다시 호출
	}
}

var c = 0; //큰 이미지와 관련된 변수 c

$("#con1 #thumbs a").click(function(){
	n = $(this).attr("data-index");
	view(n); 
	c = $(this).attr("data-index");
	viewL(c);
	
	return false;
});

/*큰 이미지 롤링 함수*/
function viewL(c){
	$("#con1 #large_img img").animate({"opacity":"0"},500);
	//모든이미지 opacity : 0으로 안보이게 설정.
	
	$("#con1 #large_img img").eq(c).stop().addClass("topImg").show().css({"opacity":0}).animate({"opacity":1},500)
}

function countL(){
	c++;
	if(c<4){
		viewL(c);
	}else{
		c=0;
		viewL(c);
	}
}

var timer = setInterval("count()",1000);
//1초 마다 count() 함수 실행
//버튼 이미지
var timerL = setInterval("countL()",1000);
//배너 이미지

// setInterval : 반복되는 함수

/*
마우스를 이미지 배너 영역에 올리면
 자동으로 돌아가는 이미지를 멈춰주기 위한 기능
 */

$("div#con1").hover(
	function(){ //마우스를 올렸을 때 실행될 함수
		clearInterval(timer);
		clearInterval(timerL);
		
	},function(){//마우스가 영역을 벗어났을 때 다시 실행될 기능
		timer = setInterval("count()",1000);
		timerL = setInterval("countL()",1000);
	}

);

// clearInterval : 멈추는 함수





















