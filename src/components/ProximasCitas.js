import React from 'react'
import { Link } from 'react-router-dom'

const ProximasCitas = () => {
  return (
    <div className='tarjetas'>
        <div class="card" style={{width: '30rem'}}>
            <div class="card-body">
                <h5 class="card-title pb-15">Próximas citas</h5>
                <p class="card-text">Melissa Encarnación</p>
                <p class="card-text">Corte de pelo</p>
                <p class="card-text">Martes 9 de agosto -11:00 P.M.</p>
                <button class="btn btn-primary" disabled>Ver más</button> <Link to="/ProcesoFinalizado" class="btn btn-primary">Proceso finalizado</Link>
            </div>
            <div class="card-body">
                <p class="card-text">Melissa Encarnación</p>
                <p class="card-text">Corte de pelo</p>
                <p class="card-text">Martes 9 de agosto -11:00 P.M.</p>
                <button  class="btn btn-primary" disabled>Ver más</button>
            </div>
            <div class="card-body">
                <p class="card-text">Melissa Encarnación</p>
                <p class="card-text">Corte de pelo</p>
                <p class="card-text">Martes 9 de agosto -11:00 P.M.</p>
                <button class="btn btn-primary" disabled>Ver más</button>
            </div>
        </div>
    </div>
  )
}

export default ProximasCitas