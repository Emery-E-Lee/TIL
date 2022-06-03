process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    let result = ''; // result를 선언만 하면, undefined가 뜨기 때문에, ''를 넣어준다.
    for (let j = 0; j < a; j++) {
      result += '*';
    }
    console.log(result);
  }
});

/* 
다른 사람의 풀이

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }
});


JS로 코딩 테스트를 시도한 건 처음이라 쉬운 문제인데도 좀 헤맸다.

다른 사람의 문제 풀이를 보던 중,
repeat 메소드를 쓰는 것을 보았다.
나중에 비슷한 상황이 있으면 써먹어야겠다.

*/
