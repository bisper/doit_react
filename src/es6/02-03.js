// const는 불변 변수이므로 데이터를 변경할 수 없음
const num = 1;
// num = 3;
const str = '문자';
// str = '새 문자';
const arr = [];
// arr = [1, 2, 3];
const obj = {};
// obj = {name : '내이름'};



// 이렇게 하면 데이터는 수정되지만 무결성이 깨짐
const arr2 = [];
arr2.push(1);
console.log(arr2);
arr2.splice(0, 0, 0);
console.log(arr2);
arr2.pop();
console.log(arr2);
const obj2 = {};
console.log(obj2);
obj2['name'] = '내이름';
console.log(obj2);
Object.assign(obj2, {name: '새이름'});
console.log(obj2);
delete obj2.name;
console.log(obj2);



const num1 = 1;
console.log(num1);
const num2 = num1 * 3;
console.log(num2);
const str1 = '문자';
console.log(str1);
const str2 = str1 + '추가';
console.log(str2);
const arr3 = [];
console.log(arr3);
const arr4 = arr3.concat(1);
console.log(arr3);
console.log(arr4);
const arr5 = [...arr4, 2, 3];
console.log(arr5);
const arr6 = arr5.slice(0, 1);
console.log(arr6);
const [first, ...arr7] = arr5;
const obj3 = {name:'내이름', age: 20};
const objValue = {name:'새이름', age:obj3.age};
const obj4 = {...obj3, name: '새이름'};
const { name, ...obj5} = obj4;
