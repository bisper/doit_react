
// 기존 방식의 문자열 파싱 방법
function parse1(qs) {
  var queryString = qs.substr(1);
  var chunks = queryString.split('&');
  var result = {};

  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    // var value = parts[1];
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  }

  return result;
}

var query = ' banana=10&apple=20&orange=30';

console.log(parse1(query));


// forEach 사용하기
function parse2(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  let result = {};

  chunks.forEach((chunk) => {
    const parts = chunk.split('=');
    const key = parts[0];
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  });

  return result;
}

console.log(parse2(query));


// forEach와 객체 전개 방식 사용하기
function parse3(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  let result = {};
  
  chunks.forEach((chunk) => {
    const [key, value] = chunk.split('=');
    result[key] = value;
  });

  return result;
}

console.log(parse3(query));
