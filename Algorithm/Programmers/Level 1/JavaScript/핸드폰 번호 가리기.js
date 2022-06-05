/* 
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.


제한 조건

phone_number는 길이 4 이상, 20이하인 문자열입니다.


입출력          예
phone_number	return
"01033334444"	"*******4444"
"027778888"	    "*****8888" */

function solution(phone_number) {
  var answer = '';
  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += '*';
  }
  const temp = phone_number.slice(phone_number.length - 4);

  answer += temp;

  return answer;
}

/* 

좀.. 생각나는대로 풀었다.

* 다른 풀이

 function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);

  return result;
}


* Note

repeat를 알고는 있었는데, 막상 사용하려니 잊어버렸다.

phone_number.slice(phone_number.length - 4)는
phone_number.slice(-4)로만 작성해도 같은 결과가 나온다.

문자열 자르기

var id = "ctl03_Tabs1";

1. 특정 문자를 기준으로 뒷 문자 자르기 (split와 pop 사용)

var tabId = id.split("_").pop(); // => "Tabs1"

2. 뒷 문자 자르기 (slice 사용)

var slicedId = id.slice(-4); // => abs1

*/
