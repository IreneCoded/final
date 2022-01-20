import logo from './logo.svg';
import Button from './components/Button';
import './App.css';
//import Quiz from './components/quizapp_new';
import Quiz from './components/quizz__self';
import Start from './components/start';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";  
import './css/styles.css';

function App() {
  function Create() {
    return (
      <div>
        <h2>Create</h2>
      </div>
    );
  }
  return (
    <>
    <div className="App">
    <Router>
      <div >
      
        <ul id="nav" className="forflex" >

          <li>
              <Link to="/">Start</Link>
              </li>
          <li>
              <Link to="/Quiz">Quiz</Link>
              </li>
          <li>
              <Link to="/create">Create</Link>
              </li>
        </ul>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/create" element={<Create />} /> 
          
          <Route path="/" element={<Start />} />
            
        </Routes>
      </div>
    </Router>
  

      
     
    </div>

</>
  );
}

export default App;
