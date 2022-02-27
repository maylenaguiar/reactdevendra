import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "../src/components/NavBar/NavBar";
import Home from '../src/components/Views/Home/Home';
import ItemView from '../src/components/Views/ItemView/ItemView';
import Category from '../src/components/Views/Category/Category';
import { CartProvider } from '../src/components/CartContext/CartContext';
import Cart from './components/Cart/Cart';
// import Header from '../src/components/Header/Header'

function App() {
  return (
    <Router> 
      <CartProvider>
    <div className="App">
      <NavBar />
    </div>
       <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/category/:categoryId' element={<Category />}/>
       <Route path='/item/:productId' element={<ItemDetailContainer />}/>
       <Route path='/Cart' element={<Cart />}/>
    </Routes>
    </CartProvider>
    </Router>
  );
}

export default App;
