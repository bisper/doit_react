// ES6의 클래스 상속

class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  nextYearAge() {
    return Number(this.age) + 1;
  }
}

// extends 명령으로 클래스를 상속받을 수 있음
// 상속 시 부모 클래스의 멤버를 그대로 사용 가능
// 상속 시 부모 클래스의 생성자를 그대로 사용 가능
class introducePerson extends Person {
  constructor(name, age, city, futureHope) {
    // super() 를 사용하여 부모 클래스의 생성자를 호출
    super(name, age, city);
    this.futureHope = futureHope;
  }

  introduce() {
    // super.멤버명 을 사용하여 부모 클래스의 멤버를 호출
    return `저는 ${this.city}에 사는 ${this.name} 입니다.
    내년엔 ${super.nextYearAge()} 살 이며,
    장래희망은 ${this.futureHope} 입니다.`;
  }
}

let kim = new introducePerson('kim', '24', 'busan');
console.log(kim.introduce());
console.log(kim.nextYearAge());

