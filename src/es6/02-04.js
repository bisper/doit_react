var array1 = ["one", "two", '3','4'];
var array2 = ["three", "four"];

// 전개 연산자를 이용하여 배열의 내용을 출력함
const combined = [...array1, ...array2];
// 전개 연산자를 이용하여 배열이 가지고 있는 데이터를 차례대로 변수에 입력함
// 변수 three의 경우 array1에 데이터가 없을 경우에 디폴트 값을 사용하도록 설정
// others 에는 앞에 선언된 변수에서 사용되고 남은 데이터를 저장함 (남은 모든 데이터를 대입하기 때문에 배열로 저장됨)
const [ first, second, three = 'empty', ...others] = array1;

console.log(first);
console.log(second);
console.log(three);
console.log(others);
// func(...args) {
//   var [first, ...others] = args;
// }

console.log(array1);
console.log(array2);

console.log(combined);
console.log(array1);

