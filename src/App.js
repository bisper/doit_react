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

class App extends React.Component {
  render() {
    return (
      <div>
        <img src="http://www.easyspub.co.kr/images/logo_footer.png" alt="" />
        <div>안녕하세요</div>
        <div className="body">
          <TodaysPlan />
          <PropsComponent name="두잇 리액트" />
        </div>
      </div>
    );
  }
}

export default App;
