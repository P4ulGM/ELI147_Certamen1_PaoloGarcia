import React, { useState } from 'react'
import GuerreroForm from '../components/GuerreroForm'
import GuerreroView from '../components/GuerreroView';

function GuerreroContainer() {

    const [guerreros, setGuerreros] = useState([]);

    const handleCreate = (guerrero) => {
        setGuerreros([...guerreros, guerrero]);
    }

    const handleDelete = (guerrero) => {
        const filtrada = guerreros.filter((j)=>{return j?.nombre != guerrero?.nombre});
        setGuerreros(filtrada);
  }

  return (
    <>
    <div className='container mt-3 d-flex flex-column gap-3'>
      <div className="w-100">
        <GuerreroForm onCreateGuerrero={handleCreate} />
      </div>
      <div className="w-100">
        <GuerreroView guerreros={guerreros} onQuitar={handleDelete} />
      </div>
    </div>
    </>
  )
}

export default GuerreroContainer
