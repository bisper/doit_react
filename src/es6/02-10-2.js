// reduce() 사용하기

// reduce() 함수는 배열을 객체로 생성 시 사용
// reduce() 함수는 2개의 매개변수가 존재
// 첫번째 매개변수 : 콜백 함수 내용
// 두번째 매개변수 : 초기값, 미사용 시 배열의 0번째 index 가 초기값이 됨
// reduce()의 callback 함수에는 4개의 매개변수가 존재함
// 첫번째 매개변수 : callback 함수를 통해서 반환되는 데이터
// 두번째 매개변수 : 배열의 현재 요소값
// 세번째 매개변수 : 배열의 현재 index
// 네번째 매개변수 : 원본 배열
function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

var query = 'banana=10&apple=20&orange=30';

function parse(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split('&');

  // map() 함수를 사용하여 배열을 새로운 배열로 가공하여 반환
  return chunks.map(chunk => {
    const [key, value] = chunk.split('='); // 배열 전개 방식을 통해서 변수 key와 value에 값이 들어감
    return {key, value}; // 객체 전개 방식을 통해서 변수명이 키명이 되고, 변수값이 value 값이 됨, 그리고 생성된 객체를 배열에 담아서 반환
  })
  .reduce((result, item) => {
    // 첫번째 매개변수인 result는 초기값이 {} 로 설정되여 객체 타입의 변수임
    // 두번째 매개변수인 item은 위에 있는 map() 함수를 통해서 받아온 배열에서 요소값 하나를 가져온 것
    // item은 배열의 요소이지만 객체 타입이었기 때문에 객체 타입으로 사용
    result[item.key] = item.value;
    return result; // 이렇게 만들어진 데이터를 객체 타입의 데이터를 반환
  }, {}); // 초기값을 객체 타입으로 설정
}

console.log(parse(query));

