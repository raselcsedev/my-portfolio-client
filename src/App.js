import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Home/NavBar';

function App() {
  return (
    <div className="max-w-7xl p-10 mx-auto scroll-smooth bg-success">
      <div className='sticky top-0 z-50'>
      <NavBar></NavBar>
      </div>
      <Home></Home>
      
    </div>
  );
}

export default App;
