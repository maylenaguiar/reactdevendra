import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "../src/components/NavBar/NavBar";
import Home from '../src/components/Views/Home/Home';
import { CartProvider } from '../src/Context/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <CartProvider>
    <Router>
    <div className="App">
      <NavBar />
    </div>
       <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/category/:categoryId' element={<ItemListContainer />}/>
       <Route path='/item/:productId' element={<ItemDetailContainer />}/>
       <Route path='/Cart' element={<Cart />}/>
    </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
