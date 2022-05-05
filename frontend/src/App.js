import './App.css';
import AddStudent from './component/AddStudent';
import Header from './component/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AllStudents from './component/AllStudents';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
     
      <Routes>
      <Route path="/" exact element={ <AllStudents/>}/>
      <Route path='/add' exact element={<AddStudent />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
