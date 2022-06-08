/* 
콜라츠 추측

문제 설명
1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

1-1. 입력된 수가 짝수라면 2로 나눕니다. 
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.


제한 사항

입력된 수, num은 1 이상 8000000 미만인 정수입니다.

입출력 예
n	result
6	8
16	4
626331	-1


입출력 예 설명

입출력 예 #1
문제의 설명과 같습니다.

입출력 예 #2
16 -> 8 -> 4 -> 2 -> 1 이되어 총 4번만에 1이 됩니다.

입출력 예 #3
626331은 500번을 시도해도 1이 되지 못하므로 -1을 리턴해야합니다. */

function solution(num) {
  var answer = 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
      answer += 1;
    } else {
      num = num * 3 + 1;
      answer += 1;
    }
  }

  if (answer >= 500) {
    return -1;
  } else {
    return answer;
  }
}

/* 
500번 이상 시도했을 때를 어떻게 처리할까 고민하다
for문으로 리밋을 걸어서 처리하려고 했었다.
그런데 생각대로 안 나와서 결국 if문을 썼다.


for문으로 처리했을 때는 다음과 같다.

function collatz(num) {

  for(var answer = 0;answer<500;answer++){
    if(num%2==0){
      num = num/2;
    }
    else if(num==1){
        return answer;
    }
    else if(num%2==1){
      num = (num*3)+1;
    }
  }
  //if(answer == 500){return -1;}
    return -1;
}


↓ while문을 잘 사용했다고 생각되는 예시이다.

num이 1이 아니고, answer가 500이 아닐 경우,
while문 속의 문장이 계속 실행된다.

num = 1이거나 answer = 500이 되는 경우, 
(하나라도 거짓이 되는 경우)
while문을 탈출한다.

3항 연산자로 return문을 어떻게 쓰는지도 궁금했는데,
그냥 return 뒤에 3항 연산자를 사용하면 되는 거였다..

function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}

*/
