import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Chart from './components/Chart';
import Todo from './components/Todo';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <header>My React App</header>
      <div className="container">
        <BrowserRouter>
          <Sidebar/>
          <Routes>
              <Route index element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/todo' element={<Todo/>}/>
              <Route path='/chart' element={<Chart/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;