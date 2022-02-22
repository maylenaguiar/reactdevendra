import { Link } from "react-router-dom";
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
// import { Link } from '@mui/material';

const Navbar = () => {
  return <div>
      <nav className="container">
      <ul className='naveg'>
        <Link className='naveg' to='/'>Devendra</Link>
        <Link className='naveg' to='/category/:id'>Sahumerios</Link>
        <CartWidget />
      </ul>
    </nav>
  </div>;
};

export default Navbar;
