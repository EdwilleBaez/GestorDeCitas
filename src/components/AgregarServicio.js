import React from 'react';
import TipoServicio from './TipoServicio';
import MedidaPelo from './MedidaPelo';

const AgregarServicio = () => {
  return (
    <div>
        {/*Button trigger modal*/}
        <button type="button" class="btn btn-primary" style={{ width: '30rem' }} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Agregar servicio
        </button>

        {/*Modal*/}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar servicio</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card">
                            <div class="card-body">
                                <div className='mb-3'>
                                    <p class="card-title">Tipo de servicio</p>
                                    <div class="input-group">
                                        <TipoServicio />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Procedimiento</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className='mb-3'>
                                    <p class="card-title">Medida del pelo</p>
                                    <MedidaPelo />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Monto</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Duración</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" style={{ width: '30rem' }}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AgregarServicio