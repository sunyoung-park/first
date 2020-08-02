$(document).ready(function(){
	$("#join").submit(function(){
		var u_id = $("input[name='u_id']").val();
	// .val() : 자바스크립트의 .value와 같은 기능을 함.	
		if(!u_id){
			/*
			아이디 필드값에 아무것도 입력되어 있지 않으면.
			== value 값이 존재하지 않으면.
			*/
			alert("아이디를 입력하세요.");
			$("input[name='u_id']").focus();
			return false;
		}
		var u_pw = $("input[name='u_pw']").val();
		if(!u_pw){
			alert("비밀번호를 입력하세요.");
			$("input[name='u_pw']").focus();
		return false;	
		}
		/*비밀번호와 비밀번호확인 같이 같은지 검사*/
		var u_pw2 = $("input[name='u_pw2']").val();
		
		// u_pw2 == 비밀번호 확인 필드값에 입력된 value 
		if(u_pw != u_pw2){
			alert("비밀번호가 일치하지 않습니다..");
			$("input[name='u_pw2']").focus();

		return false;
			
		}

		/*주소 필드 검사*/		
		var addr = $("input[name='addr']").val();
		if(!addr){
			alert("주소를 입력하세요.");
			$("input[name='addr']").focus();
		
		return false;
		}
		
		/*성별 체크 검사*/
		var gender= $("input[name='gender']");
		if(!gender.is(":checked")){
			alert("성별을 체크 해주세요");
			$("input[name='gender']");
			$("input[name='gender']:eq(0)").focus();
		return false;
		}
		
		/*이메일 검사*/		
		var email = $("input[name='email']").val();
		if(!email){
			alert("이메일을 입력하세요.");
			$("input[name='email']").focus();
		
		return false;
		}
		
		/*취미 체크여부 검사*/
		var hobby= $("input[name='hobby']");
		if(!hobby.is(":checked")){
			alert("취미를 체크 해주세요..");
			$("input[name='hobby']:eq(0)").focus();
		return false;
		}
		
		/*직업(셀렉트박스) 선택 여부 검사*/
		if($("select[name='job']>option:selected").index()<1){
			alert("직업을 선택해주세요.");
			$("select[name='job']").focus();
		return false;
			
			
		}
	
		gender = gender.val();
		var res_hobby = $("input[name='hobby']:checked");
		var hobby_select = ""; //화면에서 체크한 체크박스의 value값을 모두 넣어줄 변수
		
		res_hobby.each(function(){
			
			hobby_select += $(this).val() + ",";
			//each() : 반복문을 돌리는 메소드
		});
		
		var job_select = $("select[name='job']>option:selected").val();
		
		var result = "<h1>회원가입 완료</h1><ul>";
			result +="<li> 아이디 : " + u_id + "</li>";
			result +="<li> 비밀번호 : " + u_pw + "</li>";
			result +="<li> 주소 : " + addr + "</li>";
			result +="<li> 성별 : " + gender + "</li>";
			result +="<li> 이메일 : " + email + "</li>";
			result +="<li> 취미 : " + hobby_select + "</li>";
			result +="<li> 직업 : " + job_select + "</li>";
			result +="</ul>";
			
			$("body").html(result);		
		
		
		return false;
	});
});


















