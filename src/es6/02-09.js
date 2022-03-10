// 라이브러리 사용하기

// export 사용
// 변수, 함수, 클래스 앞에 export를 사용 시 내보내기가 가능
export let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun'];
export const MODULES_BECAME_STANDARD_YEAR = 2022;
export class User {
  constructor(name) {
    this.name = name;
  }
}

function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

function sayBye(user) {
  console.log(`Bye, ${user}!`);
}

// 기존에 선언한 함수를 동시에 내보내기
export {sayHi, sayBye};

// as 를 사용하여 내보낼 함수명을 변경 가능
export {sayHi as hi, sayBye as bye};

// default 키워드를 사용 시 내보내기 기본값을 설정할 수 있음
// import 시 default로 지정된 멤버를 {} 없이 호출 가능
// default 키워드는 단 한번만 사용 가능
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// default 키워드 사용 시 이름없는 클래스 내보내기 가능
// export default class {
//   constructor() {
//     console.log('');
//   }
// }

// default 키워드 사용 시 이름없는 함수 내보내기 가능
// export default function(user) {
//   console.log(`Hello, ${user}!`);
// }

// default 키워드 사용 시 이름없는 데이터 내보내기 가능
// export default ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jun'];

// default export는 import로 가져올 때 사용자가 원하는 형태로 이름을 지정할 수 있음




// import 사용하기

// import로 test.js에 있는 export로 설정된 함수 sayHi, sayBye를 불러옴
// import {sayHi, sayBye} from './test.js';

// sayHi('aa');
// sayBye('aa');


// import로 test.js에 있는 모든 것을 가져와서 test라는 객체로 묶어서 사용
// import * as test from './test.js';
// test.sayHi('bb');
// test.sayBye('bb');


// import 시 as를 사용하여 멤버의 이름을 변경하여 사용
// import {sayHi as hi, sayBye as bye} from './test.js';
// hi('cc');
// bye('cc');


// export default 를 사용하여 내보내기를 했을 경우 import 시 {} 없이 불러올 수 있음
// import Test from './test.js';
// new Test('dd');


// export default 를 사용하여 내보내기를 했을 경우 import 시 원하는 이름으로 사용할 수 있음
// 단 {} 를 사용했을 경우에는 이름을 변경할 수 없음
// import TestModule from './test.js'


// 모듈 다시 내보내기
// index.js 파일에 다른 생성한 다른 모듈을 로딩하고 바로 로딩한 모듈을 다시 export 하여 내부적으로 사용할 모듈과 외부로 노출할 모듈을 구분할 수 있음

// import {login, logout} from './helpers.js';
// export {login, logout}



