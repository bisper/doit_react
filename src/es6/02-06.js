// 화살표 함수 사용하기

// 기존 자바스크립트 함수를 화살표 함수 방식으로 변경
var add1 = (first, second) => {
  return first + second;
};

// 다른 내용없이 바로 데이터를 리턴할 경우 return 및 {} 삭제 가능
var add2 = (first, second) => first + second;

  // 리턴할 값이 객체일 경우 ()로 감싸고 반환
  // 객체를 ()로 감싸지 않으면 코드블럭으로 인식하여 오류 발생
var addAndMultiple = (first, second) => ({add: first + second, multiply: first * second});

// 배열을 바로 리턴할 경우는 ()를 사용하지 않아도 상관없음
var add3 = (first, second) => [first, second];

console.log(add1(10, 20));
console.log(add2(100, 200));
console.log(addAndMultiple(1000, 2000));
console.log(add3(10000, 20000));


function addNumber(num) {
  return function(value) {
    return num + value;
  };
}

console.log(addNumber(10));

var addNumber2 = num => value => num + value;
console.log(addNumber2());

