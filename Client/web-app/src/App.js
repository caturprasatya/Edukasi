import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {
  Main,
  Form,
  Edit
} from './pages/'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/question/:id">
          <Edit />
        </Route>
        <Route path="/question">
          <Form />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
