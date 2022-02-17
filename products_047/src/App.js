import './App.css';
import {Home} from './components/Home'
import {Products} from './components/Products'
import {ProductDetails} from './components/ProductDetails'
import {ProductTypePage} from './components/ProductTypePage'
import {Navbar} from './components/Navbar'
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/products" element={<Products/>}></Route>
         <Route path="/products/:id" element={<ProductDetails/>}></Route>
         <Route path="/products/category/:types" element={<ProductTypePage/>}></Route>
       </Routes>

    </div>
  );
}

export default App;
