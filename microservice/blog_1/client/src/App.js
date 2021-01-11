import './App.css';
//import Posts from './components/posts';
import FromLec from './components/FromLec'; 
import Comments from './components/comments';
import {Grid} from "@material-ui/core";

const App=()=> {
  return (
    <div className="App">
  <Grid>
      <FromLec></FromLec>
      <Comments></Comments>
  </Grid>  
    </div>
  );
}

export default App;
