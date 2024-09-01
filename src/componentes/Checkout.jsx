import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/data';

function Checkout() {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const {register, handleSubmit} = useForm();

    const comprar = (data)=>{

        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido)

        const pedidosRef = collection(db,"pedidos");

        addDoc(pedidosRef,pedido)

    }
  
  
  return (
    <div>
              <h1 className='title-formulario'>Finalizar Compra</h1>
        <form className='formulario' onSubmit={ handleSubmit(comprar) }>

            <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
            <input type="email" placeholder='Ingresa tu email' {...register("email")} />
            <input type="phone" placeholder='Ingresa tu telefono' {...register("telefono")} />
            <button type='submit'>Enviar</button>
            
        </form>
    </div>
  )
}

export default Checkout
