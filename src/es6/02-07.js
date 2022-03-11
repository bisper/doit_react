// 객체 확장 표현식

// 기존의 객체 사용 방식
var x = 0;
var y = 0;
var obj = {x : x, y : y};
var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value';
// 객체 타입에 메서드를 추가하여 사용
var obj2 = {
  x : x,
  methodA: function() { console.log('method A'); },
  methodB: function() { return 0; }
};

console.log(obj);
console.log(combined);
console.log(obj2);
console.log(obj2.methodA());
console.log(obj2.methodB());


// es6에서 객체 사용
var x = 0;
var y = 0;
// 키명을 입력하지 않으면 자동으로 값을 키명으로 사용
var obj = { x, y }; 
var randomKeyString = 'other';
// 객체 생성 시 키명에 [] 를 사용하여 내부에서 연산하여 이름 설정
var combined = { ['one' + randomKeyString]: 'some value'};
// 객체 타입에 메서드를 설정 시 키명을 빼고 바로 메서드 설정 가능
var obj2 = {
  x,
  methodA() { console.log('method A'); },
  methodB() { return 0; }
};

console.log(obj);
console.log(combined);
console.log(obj2);
console.log(obj2.methodA());
console.log(obj2.methodB());

