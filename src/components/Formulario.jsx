// rafse
import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ( { pacientes, setPacientes, paciente } ) => {
  

  const [ nombre, setNombre ] = useState('');
  const [ propietario, setPropietario ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ fecha, setFecha ] = useState('')
  const [ sintomas, setSintomas ] = useState('')

  const [ error, setError] = useState(false)

  useEffect( () =>{
    console.log(paciente);
  }, [paciente] )

  
  const generarId = () =>{
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // validacion del propietario

    if([ nombre, propietario, email, fecha, sintomas].includes('')){
      // console.log('Rellena todos los campos');
      setError(true)
      return;
    }
    setError(false)

    // construir un objeto de pacientes
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId()
    }
    // console.log(objetoPaciente);

    setPacientes( [ ...pacientes, objetoPaciente ] )

    // console.log('Enviando formulario');

    // reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-4'>

      <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>

    <p className='text-lg mt-5 text-center mb-10'>
      Añade Pacientes y {''}
      <span className='text-indigo-600 font-bold'>Administralos</span>
    </p>

    <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
 
        { error && 
        <Error>
          <p>Todos los campos son Requeridos</p>
        </Error> 
        }

        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input id='mascota'  type="text" placeholder='Nombre de la Mascota'
          className='border-2 w-full p-2 mt-2 placeholderbg-indigo-400 rounded-md'
          value={nombre}
          onChange={ (e) => setNombre(e.target.value) }
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre del propietario</label>
          <input id='propietario' type="text" placeholder='Nombre del propietario'
          className='border-2 w-full p-2 mt-2 placeholderbg-indigo-400 rounded-md'
          value={propietario}
          onChange={ (e) => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email del propietario</label>
          <input id='email' type="email" placeholder='Nombre del email'
          className='border-2 w-full p-2 mt-2 placeholderbg-indigo-400 rounded-md'
          value={email}
          onChange={ (e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Fecha de alta</label>
          <input id='alta' type="date" 
          className='border-2 w-full p-2 mt-2 placeholderbg-indigo-400 rounded-md'
          value={fecha}
          onChange={ (e) => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea type="text"  id='sintomas'
          className='border-2 w-full p-2 mt-2 placeholderbg-indigo-400 rounded-md'
          placeholder='Describe los sintomas'
          value={sintomas}
          onChange={ (e) => setSintomas(e.target.value)}
          />
        </div>

      <input type="submit"
      className='bg-indigo-600 w-full p-3 text-white uppercase font-bold
      hover:bg-indigo-800 cursor-pointer transition-all'
      value="Agregar Paciente"
      />
    </form>
    </div>
  )
}

export default Formulario


// rfce
// import React from 'react'

// function formulario() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default formulario