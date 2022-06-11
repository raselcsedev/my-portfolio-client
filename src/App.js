import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Home/NavBar';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className="max-w-7xl mx-auto scroll-smooth bg-slate-900">
      <div className='sticky top-0 z-50'>
      <NavBar></NavBar>
      </div>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/projects/:id' element={<ProjectDetail></ProjectDetail>}></Route>
        </Routes>
      <div>
        <Footer></Footer>
      </div>
      
    </div>
  );
}

export default App;
