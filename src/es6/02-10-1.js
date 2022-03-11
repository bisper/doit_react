// map 사용하기

var query = 'banana=10&apple=20&orange=30';

// map()은 기존 배열을 활용하여 새로운 배열을 생성하는 함수
function parse1(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split('&');
  const result = chunks.map(chunk => {
    const [key, value] = chunk.split('=');
    return {key: key, value: value};
  });

  return result;
}

console.log(parse1(query));

// map의 매개변수를 총 3개로 첫번째 매개변수는 원본 배열에서 꺼낸 데이터(루프마다 변경됨)
// 두번째 매개변수를 원본 배열의 현재 index 번호
// 세번째 매개변수를 원본 배열 자체
const oriArr = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10];
const targetArr = oriArr.map((item, index, oriArr) => {
  console.log(item);
  console.log(index);
  console.log(oriArr);
  return item;
});

console.log(targetArr);
