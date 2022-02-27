import React from 'react';
import './Home.css';
import Portada from '../../imagenes/salesHimalaya.jpg'
function Home() {
	return (
		<div className='bienvenida'>
		<h1>Bienvenidos a la Tienda Mágica</h1>
		<img className='portada' src = {Portada} alt='portada'></img>
		</div>
	);
}

export default Home;