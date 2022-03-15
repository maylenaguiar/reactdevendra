import React, { useContext, useState, useRef } from 'react'
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Togglable from '../Togglable/Togglable';
import ContactForm from '../ContactForm/ContactForm';
import { writeBatch, getDocs, collection, addDoc, where, query, documentId } from 'firebase/firestore'
import { database } from '../../services/firebase/firebase'
// import { useNotificationServices } from '../../services/notification/NotificationServices';
import './Cart.css';

const Cart = () => {
  const [processingOrder, setProcessingOrder] = useState(false)
  const [contact, setContact] = useState({
    name:'',
    phone: '',
    address: '',
    comment: ''
  }) 
  
  const { totalCart, cart, emptyCart, removeCart, getTotal } = useContext(CartContext);

  const contactFormRef = useRef()

//   const setNotification = useNotificationServices()

  const confirmOrder = () => {
    if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
        setProcessingOrder(true)
        
        const objOrder = {
            buyer: contact,
            items: cart,
            total: getTotal(),
            date: new Date()
        } 
        
  const batch = writeBatch(database)
  const outOfStock = []
        
  const ids = objOrder.items.map(i => i.id)

  getDocs(query(collection(database, 'products'),where(documentId(), 'in', ids)))
   .then(response => {
     response.docs.forEach((docSnapshot) => {
      if(docSnapshot.data().stock >= objOrder.items.find(prod => prod.id === docSnapshot.id).qty) {
      batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - objOrder.items.find(prod => prod.id === docSnapshot.id).qty})
 } else {
     outOfStock.push({id: docSnapshot.id, ...docSnapshot.data()})
 }
 })
 }).then(() => {
if(outOfStock.length === 0) {
    addDoc(collection(database, 'orders'), objOrder).then(({id}) => { 
    batch.commit()
    emptyCart()
    // setNotification('success', `La orden se genero exitosamente, su numero de orden es: ${id}`)
    alert(`La orden se genero exitosamente, su numero de orden es: ${id}`)
    
    })
    } else {
          outOfStock.forEach(prod => {
        //   setNotification('error', `El producto ${prod.name} no tiene stock disponible`)
        alert(`El producto ${prod.name} no tiene stock disponible`)
          removeCart(prod.id)
                    })    
                }               
            }).catch((error) => {
                // setNotification('error', error)
                alert('error')
            }).finally(() => {
                setProcessingOrder(false)
            })
    } else {
        //  setNotification('error', 'Debe completar los datos de contacto para generar la orden')
        alert('Debe completar los datos de contacto para generar la orden')
    }
}
if(processingOrder) {
    return <h2>Se esta procesando su orden</h2>
}

if(cart.length === 0) {
    return (
        <div>
            <h1>Carrito</h1>
            <h2 className='elementoCarrito'>No hay productos en el carrito</h2>
        </div>
    )
} 
    return (
        <>
        {
          totalCart(cart)>0 ?
          <div className='compra'><h1>Tu compra</h1>
        {cart.map(element=><div className='elementoCarrito'>
          <div>{element.qty} {element.name} por ${element.price} c/u </div>
          <button onClick={()=>{
            removeCart(element.id)}}> X</button>
          </div>)}
          <h2 className='elementoCarrito'>Total: ${getTotal(cart)}</h2>
        <Link to='/'>
        <button className='botonVaciar' onClick={()=>{emptyCart()}}>Cancelar compra</button>
        </Link>
        <Link to='/'> <button className='finalizar' onClick={() => confirmOrder() }>Confirmar compra</button>
       </Link>
        </div>
         :
        <div className='elementoCarrito'><h2>No hay productos en tu carrito</h2>
        <Link to='/'><button className='elementoCarrito'>Volver al Home</button>
        </Link></div>
        }
        {
           (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') &&
                
           <div>
               <h4>Nombre: {contact.name}</h4>
               <h4>Telefono: {contact.phone}</h4>
               <h4>Direccion: {contact.address}</h4>
               <h4>Comentario: {contact.comment}</h4>
               <button onClick={() => setContact({ phone: '', address: '', comment: ''})} 
                       className='Button' 
                       style={{backgroundColor: '#db4025'}}>
                   Borrar datos de contacto
               </button>
           </div>    
        }
        <Togglable buttonLabelShow={
                        (contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') 
                            ? 'Editar contacto' 
                            : 'Agregar contacto'
                        } 
                        ref={contactFormRef}>
                <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
            </Togglable>          
       </>
    )
}

export default Cart
