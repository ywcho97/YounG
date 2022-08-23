jQuery(document).ready(function(){

	$('.tabSet').each(function(){

		var topDiv = $(this);
		var anchors = topDiv.find('ul.tabs>li>a'); /* 타이틀 */
		var panelDivs = topDiv.find('div.panel'); /* 설명 */
		var lastAnchor;
		var lastPanel;

		anchors.show(); /* 타이틀 보이게 */
		lastAnchor=anchors.filter('.on'); /* on되어 있는 lastAnchor가 됨. */
		lastPanel = $(lastAnchor.attr('href')); /* 타이틀 링크 속성으로 연결된 설명부분을 lastPanel이라고 함  */

		panelDivs.hide(); /* 처음에는 열려있는 요소들이 닫혀지도록 숨겨놓음 */
		lastPanel.show(); /* on이 설정되어 있는 요소들은 열려 지도록 보이게 해줌 */

		anchors.click(function(event){ /* 타이틀을 클릭하면 .function(event)는 click이벤트 핸들러를 연결해주는 방법 */
			
			event.preventDefault(); /* a링크가 가지고 있는 원래의 하이퍼링크 속성을 못하도록 막아주는 것 */
			
			var currentAnchor = $(this); /* 현재 활성화된 자신을 선택하여 currentAnchor라 함 */
			var currentPanel = $(currentAnchor.attr('href')); /* currentAnchor에 연결된 설명부분을 currentPanel이라 함 */

			if(currentAnchor.get(0)===lastAnchor.get(0)){
				/* 활성화 된 타이틀과 설명이 모두 첫번째 항목이라면? */
				/* get(0) : 배열의 첫번째 항목을 dom요소로 가져오려는 경우에 사용됨. */
				
				return; /* 같은 값이면 열려있도록 함 */
			}

			/* 슬라이드. 다른 요소를 선택하면 설명 부분이 슬라이드 되도록 함 */

			$(function(){ /* slideUp은 0.2초 동안 사라지게 함 접히는거 */
				lastAnchor.removeClass('on'); /* on 해제 */
				currentAnchor.addClass('on'); /* 활성화된 타아틀 on활성화 */
				lastPanel.hide(); /* 마지막 활성화된 요소 감춤 */
				currentPanel.show(); /* 현재 활성화될 요소 보여주기 */
				lastAnchor = currentAnchor;
				lastPanel = currentPanel;
			});

		});
	});
	

			

	});































































































































