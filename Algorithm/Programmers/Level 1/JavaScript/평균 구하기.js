/* 
평균 구하기

문제 설명

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

제한사항

arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

입출력 예
arr	return
[1,2,3,4]	2.5
[5,5]	5 */

function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

/*
하샤드 수를 풀고 나서 풀었더니 너무 쉬웠다.
이대로 끝내기엔 아쉬워서 남의 코드를 봐봤다.

↓ reduce를 사용해서 한 줄에 끝냈다.

function average(array){
  return array.reduce((a, b) => a + b) / array.length;
}


* reduce 사용 방법

reduce()에는 누산기가 포함되어 있기 때문에, 배열의 각 요소에 대해 함수를 실행하고 누적된 값을 출력할 때 용이하다.

가장 기본적인 예제로는 모든 배열의 합을 구하는 경우가 있다.

const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => { return acc += cur; }, 0);
console.log(result);  // 15

위 예제에서는 initial value 값을 0 으로 두었기 때문에,
acc의 초기값을 0이 되고,
배열의 첫 번째 요소부터 acc에 자신의 값인 cur을 더해간다.
reduce()를 실행하고 난 뒤, 
최종적으로 반환되는 값은 0 + 1 + 2 + 3 + 4 + 5 인 15이다.

const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((acc, cur, idx) => { return acc += cur; }, 10);
console.log(result2);  // 25

만약 initialValue 값을 10으로 둔다면,
acc의 초기값은 10이 되고,
배열의 첫 번째 요소부터 acc에 자신의 값인 cur을 더해가므로
최종적으로 반환되는 값은 10 + 1 + 2 + 3 + 4 + 5 인 25가 된다.


initial value에는 배열이 들어갈 수도 있다.
주어지는 배열에서 음수와 양수의 개수를 카운트해서 출력하는 경우를 생각해보자.

const numbers = [2, -5, -123, 59, -5480, 24, 0, -69, 349, 3];
const result = numbers.reduce((acc, cur, idx) => { 
  if(cur < 0){
    // 처리할 현재 요소가 음수일 경우
    acc[0]++;
  }
  else if(cur > 0){
    // 처리할 현재 요소가 양수일 경우
    acc[1]++;
  }
  return acc;
 }, [0,0]);
console.log(result);  // [4, 5]

음수와 양수의 개수를 각각 카운트하기 위해 initialValue를 [0,0]로 설정했다. initialValue[0]에는 음수의 개수를, 
initialValue[1]에는 양수의 개수를 카운트한다고 하자.
첫 번째 호출 시, acc의 값은 initialValue의 값으로 설정되므로 초기 acc 값은 [0,0]이다.


*/
