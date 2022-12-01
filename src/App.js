import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
    <Button>
    A Button
    </Button>

    </div>
  );
}

export default App;
// toDo: explain why we pass in a button name as a child
// https://www.netlify.com/blog/2020/12/17/react-children-the-misunderstood-prop/
