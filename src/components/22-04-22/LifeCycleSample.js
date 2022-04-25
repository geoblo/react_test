import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  //컴포넌트를 만들때 처음 실행: 초기 state를 정할 수 있다.
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps', nextProps, prevState);
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }

    //state를 변경 할 필요가 없다면
    return null;
  }

  // 첫렌더링을 마친 후 실행: 다른 라이브러리 프레임워크의 함수 호출.
  //혹은 이벤트를 등록, 네트워크 비동기 작업(axios...fetch)..
  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    //업데이트가 false일 경우 중지, 기본은 true
    console.log('shouldComponentUpdate', nextProps, nextState);
    //숫자의 마지막 자리가 4면 리렌더링하지 않음
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  //주로 업데이트하기 직전의 값을 참고할 때 사용
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    if (prevProps.color !== this.props.color) {
      console.log(this.myRef.style.color);
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    console.log(snapshot);
    if (snapshot) {
      console.log('업데이트가 되기 직전 색상: ', snapshot);
    }
  }

  //그려준다: props 와 state에 접근
  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
