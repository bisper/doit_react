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
import ChildComponent2 from "./03/ChildComponent2";
import BooleanComponent from "./03/BooleanComponent";
import DefaultPropsComponent from "./03/DefaultPropsComponent";
import ChildProperty from "./03/ChildProperty";

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

          <br/><hr/><br/>
          
          <ChildComponent2
          objValue={{ age: 20 }}
          // 필수 프로퍼티의 내용을 입력
          requiredStringValue="문자"
          />
          <br/><hr/><br/>
          <DefaultPropsComponent />
          <br/><hr/><br/>
          {/* 프로젝트 내용 */}
          <br/><hr/><br/>
          {/* 하위 컴포넌트에 자손 태그를 입력하면 하위 컴포넌트에서 children 프로퍼티를 통해서 자손 태그를 받아올 수 있음 */}
          <ChildProperty>
            {/* 하위 컴포넌트에 전송될 자손 태그 */}
            <div><span>자식 노드</span></div>
          </ChildProperty>
        </div>
      </div>
    );
  }
}

export default App;
