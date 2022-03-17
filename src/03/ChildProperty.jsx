import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChildProperty extends Component {
  render() {
    // children 프로퍼티를 통해서 전달 받은 자손 태그
    const node = this.props.children;
    // <div><span>자식 노드</span></div> 라는 내용의 자손 태그가 전달됨
    return <div>{node}</div>;
  }
}

// 상위 컴포넌트에서 프로퍼티로 전송된 프로퍼티의 타입을 설정
ChildProperty.propTypes = {
  children: PropTypes.node
};

export default ChildProperty;