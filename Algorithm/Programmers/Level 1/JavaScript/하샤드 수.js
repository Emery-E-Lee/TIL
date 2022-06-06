/* 
문제 설명

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.


제한 조건

x는 1 이상, 10000 이하인 정수입니다.


입출력 예
arr	return
10	true
12	true
11	false
13	false


입출력 예 설명

입출력 예 #1
10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

입출력 예 #2
12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

입출력 예 #3
11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

입출력 예 #4
13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다. */

function solution(x) {
  var answer = true;
  const arr_str = (x + '').split(''); //입력받은 x를 한 자릿수씩 나누어 배열에 저장한다. ex) 10인 경우, ['1','0']
  const arr_num = arr_str.map((i) => Number(i)); //arr_str을 숫자로 변환한다

  var add_all = 0; //add_all을 0으로 초기화

  for (let i = 0; i < arr_num.length; i++) {
    add_all += arr_num[i]; //for문을 돌면서 각 자릿수를 더해 add_all에 저장한다
  }

  if (x % add_all === 0) {
    //x를 add_all로 나눴을 때, 0으로 떨어진다면
    answer = true; //answer를 true로 하고,
  } else {
    answer = false; //아니라면 answer에 false를 대입한다
  }

  return answer;
}

/* 내 풀이와 비슷하지만, 좀 더 정리된 버전

function Harshad(n){
    var result ;
    var sum = 0;
    var arr = String(n).split('');
    for(var i=0; i<arr.length; i++) {
      sum += Number(arr[i]); //여기서 바로 Number를 쓸 수 있다는 걸 알았다
    }
    return n % sum == 0 ? true : false; 
    //결과가 true와 false로 단순하니, if-else문보다 3항 연산자를 사용하는 게 낫겠다
}

*/
