$(function(){
	$('.appBarBtn').on({  // 햄버거버튼을 클릭했을 때 ... click 이벤트 실행해~
		click:	function(){ 
			$('.bar').toggleClass('addAppbar');  //style.css에 있는거 연결 닫혀있으면 열리도록... 열려있다면 닫히도록 하는 toggle 실행...
		}
	})
});