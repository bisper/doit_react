// 자바스크립트의 구조 분해

// 기존의 구조 분해방식
var list = [0, 1];
console.log(list);
var item1 = list[0];
var item2 = list[1];
// item3에 배열 list의 index 번호 2의 데이터를 대입, 데이터가 없을 경우 -1을 대입, 기본값을 넣는 형태로 사용
var item3 = list[2] || -1;

// 일반적인 스와핑 기법
var temp = item2;
item2 = item1;
item1 = temp;

var obj = { key1: 'one', key2: 'two' };

var key1 = obj.key1;
var key2 = obj.key2;
// 변수 key3에 객체 타입 변수 obj.key3의 데이터를 대입, 데이터가 없을 경우 기본값을 사용
var key3 = obj.key3 || 'default key3 value';
var newKey1 = obj.key1;

console.log('--------------------------------------------------------')
// es6의 구조 분해방식
var list = [0, 1];
// 배열 전개 방식을 사용하여 각각의 변수에 배열 list의 데이터를 대입, 값이 없을 경우 기본값을 사용
var [item1, item2, item3 = -1] = list;
console.log(item1);
console.log(item2);
console.log(item3);

// 배열 전개 방식을 사용한 스와핑 방식
[item2, item1] = [item1, item2];
console.log(item1);
console.log(item2);

console.log('\n----------------------------------------');
var obj = {
  key1: 'one', key2: 'two'
};
console.log(obj);

console.log('\n----------------------------------------');
// es6에서 객체 타입의 키명이 없을 때 값을 키명으로 사용하는 것을 사용하여 객체 타입의 변수 obj의 데이터를 각각의 변수에 대입
// 키명을 : 와 함께 사용하여 새로운 변수명으로 변수를 생성하고 데이터를 대입
var {
  key1: newKey1,
  key2,
  key3 = 'default key3 value'
} = obj;
console.log(key1);
console.log(key2);
console.log(key3);

console.log('\n----------------------------------------');
var [item1, ...otherItems] = [0, 1, 2];
var {key1, ...otherObj} = {key1:'one', key2:'two'};

console.log(item1);
console.log(otherItems);
console.log(key1);
console.log(otherObj);

