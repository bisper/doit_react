import React from "react";

/**
 * 상위 컴포넌트에서 하위 컴포넌트로 프로퍼티를 이용하여 데이터를 전송 시 Boolean 타입은 변수명만 입력 시 true, 변수를 미 입력 시 false
 * 조건문에서 undefined와 false는 모두 false로 인식함
 */
class BooleanComponent extends React.Component {
  render() {
    const message = this.props.bored ? '놀러가자' : '하던 일 열심히 하자';

    return (
      <div className='message-container'>
        {message}
      </div>
    );
  }
}

export default BooleanComponent;