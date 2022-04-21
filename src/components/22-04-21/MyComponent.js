import React from 'react';
import { PropTypes } from 'prop-types';

//props: 객체 데이터
function MyComponent(props) {
  //비구조화 할당 문법
  const { name, children } = props;
  return (
    <div>
      안녕하세요 제 이름은 {name} 입니다. <br />
      children 값은 {children} 입니다.
    </div>
  );
}

MyComponent.defaultProps = {
  name: '디폴트 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
