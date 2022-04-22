// import MyComponent from './components/MyComponent';
// import MyComponentFunc from './components/MyComponentFunc';
// import Counter from './components/Counter';
// import Says from './components/Says';
// import EventPractice from './components/22-04-21/EventPractice';
// import EventPracticeFunc from './components/22-04-21/EventPracticeFunc';
// import ValidationSample from './components/22-04-22/ValidationSample';
import ScrollBox from './components/22-04-22/ScrollBox';
function App() {
  return (
    <div>
      <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
    </div>
  );
}

export default App;
