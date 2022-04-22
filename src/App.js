// import MyComponent from './components/MyComponent';
// import MyComponentFunc from './components/MyComponentFunc';
// import Counter from './components/Counter';
// import Says from './components/Says';
// import EventPractice from './components/22-04-21/EventPractice';
// import EventPracticeFunc from './components/22-04-21/EventPracticeFunc';
// import ValidationSample from './components/22-04-22/ValidationSample';
// import ScrollBox from './components/22-04-22/ScrollBox';
// import IterationSample from './components/22-04-22/IterationSample';
import LifeCycleSample from './components/22-04-22/LifeCycleSample';
import { Component } from 'react';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}></LifeCycleSample>
      </div>
    );
  }
}

export default App;
