// rafse
import React from 'react'

const Formulario = () => {
  return (
    
    <div className='md:w-1/2 lg:w-2/5 ml-4'>

      <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>

    <p className='text-lg mt-5 text-center mb-10'>
      Añade Pacientes y {''}
      <span className='text-indigo-600 font-bold'>Administralos</span>
    </p>

    <form action="" className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>

        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input id='mascota'  type="text" placeholder='Nombre de la Mascota'
          className='border-2 w-full p-2 mt-2 placeholderbg-indigo-400 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre del propietario</label>
          <input id='propietario' type="text" placeholder='Nombre del propietario'
          className='border-2 w-full p-2 mt-2 placeholderbg-indigo-400 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email del propietario</label>
          <input id='email' type="email" placeholder='Nombre del email'
          className='border-2 w-full p-2 mt-2 placeholderbg-indigo-400 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Fecha de alta</label>
          <input id='alta' type="date" 
          className='border-2 w-full p-2 mt-2 placeholderbg-indigo-400 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea type="text"  id='sintomas'
          className='border-2 w-full p-2 mt-2 placeholderbg-indigo-400 rounded-md'
          placeholder='Describe los sintomas'
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