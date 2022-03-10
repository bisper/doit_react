// ES6의 클래스 사용 방법

// es6에서 클래스 선언
class Shape {
  // 클래스의 static 멤버는 클래스의 객체없이 호출 가능
  // 클래스명.정적멤버명 으로 호출
  static crate(x, y) {
    return new Shape(x, y);
  }

  // 접근 제어자가 없는 클래스의 멤버 변수는 public 으로 설정됨
  // 접근 제어자는 public, protected, private
  name = 'Shape';
  
  // 자바스크립트 클래스의 생성자
  // 클래스에 단 하나만 생성 가능
  // 2개 이상 선언 시 오류 발생
  constructor (x, y) {
    this.move(x, y);
  }

  move (x, y) {
    // 클래스 내부의 this는 해당 객체의 멤버를 뜻함
    // this.멤버변수명 을 사용 시 따로 클래스의 멤버변수로 선언한 것과 동일한 효과를 가짐(암묵적으로 자동 선언됨)
    this.x = x;
    this.y = y;
  }

  area () {
    return 0;
  }
}

var s = new Shape(10, 20);
// 클래스의 객체를 생성하여 사용 시 객체 생성 후 메서드를 해당 객체에 추가하여 사용할 수 있음
// 생성된 객체에 추가한 메서드는 해당 객체에서만 사용이 가능하고 새로운 객체를 생성 시 사용할 수 없음
s.move2 = function(x, y) {
  return x + y;
}

console.log(s.area());
console.log(s.name);
console.log(s.x);
console.log(s.y);
// 새로 객체에 추가한 메서드를 호출하여 사용
console.log(s.move2(100, 200));

// 클래스를 사용하여 새로운 객체를 생성하고 기존에 추가했던 메서드를 호출 시 추가했던 메서드가 없기 때문에 오류가 발생함
// var s2 = new Shape(10, 20);
// console.log(s2.move2(100, 200));