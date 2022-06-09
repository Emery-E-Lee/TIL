/* 
짝수와 홀수

문제 설명

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.


제한 조건

num은 int 범위의 정수입니다.
0은 짝수입니다.


입출력 예

num	return
3	"Odd"
4	"Even" */

function solution(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}

/* 

쉬운 문제지만, 오늘은 시간이 없기도 하고,
다른 사람들 코드가 궁금해서 풀었다.

function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}

0은 false라는 걸 이용한 코드이다.
나중에 한 번 써먹어봐야겠다.

*/
