import React from "react";

/**
 * state 사용하기
 * 1. 생성자에서 state 반드시 초기화하기
 * 2. state의 값 변경 시 setState()를 사용하기
 * 3. setState()는 비동기로 동작, 먼저 실행 후 나중에 setState()가 실행되어 화면을 동기화
 */
class StateExample extends React.Component {
  // 자바스크립트의 클래스 생성자
  // 매개변수 props는 프로퍼티
  constructor(props) {
    super(props);

    // state를 사용하기 위해서 초기화
    this.state = {
      loading: true,
      formData: 'no data'
    };

    // bind() 를 사용하여 현재 객체를 저장
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    const {formData} = this.state;
    // setState()를 통해서 기존의 내용을 변경
    this.setState({
      loading: false,
      formData: data + formData
    });

    console.log('loading값', this.state.loading);
  }

  render() {
    return (
      <div>
        <span>로딩중 : {String(this.state.loading)}</span>
        <span>결과 : {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;