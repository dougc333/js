import logo from './logo.svg';
import './App.css';
import Posts from './components/posts';
import Comments from './components/comments';

function App() {
  return (
    <div className="App">
      <div>
      <Posts></Posts>
      </div>
      <div>
      <Comments></Comments>
      </div>
    </div>
  );
}

export default App;
