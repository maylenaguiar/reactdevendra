import React from 'react';
import './Home.css';
import Portada from '../../imagenes/salesHimalaya.jpg'
import ItemListContainer from '../../ItemListContainer/ItemListContainer';
function Home() {
	return (
		<div className='bienvenida'>
		<h1>Bienvenidos a la Tienda Mágica</h1>
		<ItemListContainer />
		<img className='portada' src = {Portada} alt='portada'></img>
		</div>

	);
}

export default Home;