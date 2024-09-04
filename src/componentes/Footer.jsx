import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <p className='iconos-footer'><i class="material-icons icon">location_on</i> Miramar, Centro</p>
      <p className='iconos-footer'><i class="material-icons icon">call</i> (2291) 44-444444</p>
      <p className='iconos-footer'><i class="material-icons icon">alternate_email</i> todoentremanos@todoentremanos.com</p>
        
      <a className='logo-instagram' href="https://www.instagram.com/todoentremanos/" target="_blank" rel="instagram">
        <FaInstagram size={30} color="#fff" />
        <p>@todoentremanos</p>
      </a>
      <a className='logo-instagram' href="https://wa.me/numero-de-telefono" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={30} color="#25D366" />
        <p> (2291) 414141</p>
      </a>
    </div>

  
  )
}

export default Footer
