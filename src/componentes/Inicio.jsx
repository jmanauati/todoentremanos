import React from 'react'
import fotoInicio from '../imagenes/pottery-inicio.jpg'
import TarjetaCategoría from './TarjetaCategoría'
import FotoTarjeta from '../imagenes/logo-pequeño2.png'
import Footer from './Footer'


function Inicio() {
  return (
    <div className='inicio'>
      <div className='portada-principal'>
        <p className='texto-portada'>Inspirados en la naturaleza </p>
        <div className='boton-productos'>Ver Procuctos</div>
      </div>
      <div className='destacados'>
      <p className='destacado envio'><i class="material-icons icon">local_shipping</i> Envío en Miramar y alrededores</p>
      <p className='destacado experiencia'><i class="material-icons icon">school</i> + 10 años de experiencia</p>
      <p className='destacado personalizado'><i class="material-icons icon">person</i> Tratamiento Personalizado</p>
      <p className='destacado ecofrendly'><i class="material-icons icon">compost</i> Ecofrendly</p>
      </div>
      <div className='foto-torno'>
      </div>
      
      <h2 className='titulo-categorias'>
        Categorías Destacadas
      </h2>
      <div className='tarjetas-categorias'>
        <TarjetaCategoría
        imagen={FotoTarjeta}
        textoBoton='Decoracion'
        />
        <TarjetaCategoría
        imagen={FotoTarjeta}
        textoBoton='Tejidos'
        />
        <TarjetaCategoría
        imagen={FotoTarjeta}
        textoBoton='Para el Jardin'
        />
        <TarjetaCategoría
        imagen={FotoTarjeta}
        textoBoton='Para la familia'
        />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Inicio

