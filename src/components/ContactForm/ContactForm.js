import { useState } from 'react'
import './ContactForm.css';

const ContactForm = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            name,
            phone,
            address,
            comment
        }
        setContact(objContact)
        setName('')
        setPhone('')
        setAddress('')
        setComment('')
    }

    return (
        <div className='formulario'>
          <h2>Contacto</h2>
          <form onSubmit={handleContactForm}>
            <label>Nombre y Apellido:
              <input
                className='InputContact'
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>  
            <label>Telefono:
              <input
                type='text'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label>Direccion:
              <input
                type='text'
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
            <label>Dejar un comentario: 
              <input
                type='text'
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />
            </label>
            <button className='button' type='submit'>Confirmar</button>
          </form>
        </div>
      )
}

export default ContactForm