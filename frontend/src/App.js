import './App.css';
import NavbarUi from './Components/Navbar/Navbar';
import Vibrant from './Components/Home/Vibrant/Vibrant';
import Plants from './Components/Home/Plants/Plants';
import ProductList from './Components/ProductList/ProductList';
function App() {
  return (
    <div className=''>
   <NavbarUi/>
   <Vibrant/>
   <Plants/>
   <ProductList/>
    </div>
  );
}

export default App;
