import React from "react";
import PropTypes from "prop-types";

/**
 * 프로퍼티 : 리액트에서 사용하는 단방향 데이터 전송
 * 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전송함
 * 
 * 하위 컴포넌트에서 상위 컴포넌트의 데이터를 받을 경우 props
 */
class PropsComponent extends React.Component {
  render() {
    return (
      <div className="message-container">
        {this.props.name}
      </div>
    );
  }
}

/**
 * 컴포넌트에서 사용할 데이터의 데이터 타입을 React의 prop-type 모듈을 사용하여 데이터 타입을 선언
 */
PropsComponent.propTypes = {
  /** 변수 name 의 데이터 타입을 PropTypes를 통해서 string 형으로 지정 */
  name: PropTypes.string
};

export default PropsComponent;
