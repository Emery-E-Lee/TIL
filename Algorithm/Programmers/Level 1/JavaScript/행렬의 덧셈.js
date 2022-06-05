/* 행렬의 덧셈

문제 설명

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건

행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

입출력 예
arr1	        arr2	         return
[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
[[1],[2]]	    [[3],[4]]	    [[4],[6]] */

function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }

  return answer;
}

/*
배열 안의 배열 정리

arr1 = [[1, 2],[2, 3]];
arr2 = [[3, 4],[5, 6]];

일 때,

여기서부터 '='는 일반적인 의미로 쓰임

arr1 = [[1,2],[2,3]]
arr1[0] = [1,2], arr[1] = [2,3] // cf. arr1[i].length = 2
arr1[0][0] = 1, arr1[0][1] = 2 // 값만 나옴
arr1[0][0] + arr2[0][0] = 1 + 3 = 4

for문 다 돌고 나온 temp
temp  = [4,6], [7,9]

answer.push(temp) = [[4,6], [7,9]]

*/
