// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1 className="title">두잇! 리액트 시작하기</h1>
//     </div>
//   );
// }

// export default App;

import React from "react";
import TodaysPlan from "./03/TodaysPlan";
// 프로퍼티 사용해 보기
import PropsComponent from "./03/PropsComponent";
import ChildComponent from "./03/ChildComponent";
import BooleanComponent from "./03/BooleanComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <img src="http://www.easyspub.co.kr/images/logo_footer.png" alt="" />
        <div>안녕하세요</div>
        <div className="body">
          {/* 컴포넌트 사용하기 */}
          <TodaysPlan />
          {/* 하위 컴포넌트에 프로퍼티로 문자열 데이터 전송 */}
          <PropsComponent name="두잇 리액트" />
          {/* 하위 컴포넌트에 프로퍼티로 문자열이 아닌 데이터 전송 */}
          <ChildComponent
            boolValue={true}
            numValue={1}
            arrayValue={[1, 2, 3]}
            objValue={{ name: "제목", age: 30 }}
            nodeValue={<h1>노드</h1>}
            funcValue={() => {
              console.log("메시지");
            }}
          />
          <br /><hr /><br/>
          <div>
            {/* 하위 컴포넌트에 프로퍼티로 Boolean 데이터 전송 시 변수 명만 사용하여 true 값 전달 */}
            <b>지루할 때 : </b><BooleanComponent bored />
          </div>
          {/* 하위 컴포넌트에 프로퍼티로 Boolean 데이터 전송 시 변수명을 미사용하여 false 값 전달 */}
          <div><b>즐거울 때 : </b><BooleanComponent /></div>
        </div>
      </div>
    );
  }
}

export default App;
