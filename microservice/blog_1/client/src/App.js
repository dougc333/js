import './App.css';
import Posts from './components/posts';
import Comments from './components/comments';
import {Grid,Container,Typography} from "@material-ui/core";
import FunctionalPost from './components/functional_post';

const App=()=> {
  return (
    <Container>
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
        <Posts/>      
        <Comments />
      </Typography>
    </Container>
  );
}

export default App;
