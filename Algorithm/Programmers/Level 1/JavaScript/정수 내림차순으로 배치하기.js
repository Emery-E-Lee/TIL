/* 
정수 내림차순으로 배치하기

문제 설명

함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.


제한 조건

n은 1이상 8000000000 이하인 자연수입니다.


입출력 예

n	return
118372	873211 */

function solution(n) {
  // n.toString().split('').sort((a,b)=> b-a).join('')
  return parseInt(
    //parseInt()는 string을 정수로 변환한 값을 리턴한다.
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

/* 

n.toString().split('').sort((a,b)=> b-a).join('') 
처음에는 parseInt를 안 하고, 이렇게만 제출했는데 결과가 계속 118372, 즉 내림차순이 아닌 상태로 출력되었다.
그런데 한 단계씩 변수에 저장해가면서 출력해보니 join까지만 해도 답이 나왔다.

이유가 무엇일까..? 찾아봐야겠다.


*/
