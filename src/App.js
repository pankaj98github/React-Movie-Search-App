import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/movie/:id' element={<SingleMovie/>}/>
      <Route exact path='*' element={<Error/>}/>
    </Routes>
  );
}

export default App;
