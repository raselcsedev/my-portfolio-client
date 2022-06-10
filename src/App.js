import './App.css';
import Home from './Pages/Home/Home';
import NavBar from './Pages/Home/NavBar';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className="max-w-7xl p-10 mx-auto scroll-smooth bg-base-300">
      <div className='sticky top-0 z-50'>
      <NavBar></NavBar>
      </div>
      <Home></Home>
      <div>
        <Footer></Footer>
      </div>
      
    </div>
  );
}

export default App;
