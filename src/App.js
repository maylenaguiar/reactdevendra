import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "../src/components/NavBar/NavBar";
import Home from '../src/components/Views/Home/Home';
import ItemView from '../src/components/Views/ItemView/ItemView';
import Category from '../src/components/Views/Category/Category';


function App() {
  return (
    <Router>
    <div className="App">
       <NavBar />
    </div>
       <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/category/:categoryId' element={<Category />}/>
       <Route path='/item/:id' element={<ItemView />}/>
    </Routes>
    </Router>
  );
}

export default App;
