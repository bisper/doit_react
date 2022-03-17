import React from 'react';

class ForceUpdateExample extends React.Component {
  constructor(props) {
    super(props);

    // state로 상태 관리하던 변수를 클래스 멤버 변수로 선언하여 사용
    this.loading = true;
    this.formData = 'no data';

    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    this.loading = false;
    this.formData = data + this.formData;
    // forceUpdate()를 사용하여 강제로 화면을 업데이트
    // 성능에 좋지 않으므로 비추천
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <span>로딩중 : {String(this.loading)}</span>
        <span>결과 : {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;