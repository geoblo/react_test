import React, { useRef } from 'react';

function RefSample(props) {
  // 렌더링과 상관없이 사용할 수 있는 변수.
  // ref의 값이 바뀌어도 컴포넌트는 렌더링 되지 않음.->렌더링과 관련되지 않는 값을 써야할때
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };

  setId(2);
  printId();

  return <div onClick={printId}>ref</div>;
}

export default RefSample;
