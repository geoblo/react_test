import React, { Component } from 'react';

class Counter extends Component {
  //생성자: 객체가 생성될때 생성
  //   constructor(props) {
  //     super(props);
  //     //컴포넌트 내부 데이터 생성
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // this.setState((prevState) => ({ number: prevState.number + 1 }));
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('this.state:', this.state);
              },
            );
          }}
        >
          더하기1
        </button>
      </div>
    );
  }
}

export default Counter;
