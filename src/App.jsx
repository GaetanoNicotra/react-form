import { useState } from 'react'

function App() {

  // definisco l'array con gli elementi della mia lista
  const roadBike = [
    {
      id: 1,
      name: 'Pinarello',

    },
    {
      id: 2,
      name: 'Bianchi',

    },
    {
      id: 3,
      name: 'Santa Cruz',
    },
    {
      id: 4,
      name: 'Specialized',
    },
    {
      id: 5,
      name: 'Cannodale',

    },
    {
      id: 6,
      name: 'Trek',

    },
    {
      id: 7,
      name: 'Colnago',

    },
    {
      id: 8,
      name: 'Scott',

    }
  ];

  return (
    <>
      <header>
        <div className="navbar bg-primary-subtle mb-4">
          <div className="container-fluid">
            <h1>React Blog Form (Road Bike🚲)</h1>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          {/* elenco degli elementi della lista */}
          <ul className="list-group">
            <li class="list-group-item active" aria-current="true"> Bike list</li>
            {roadBike.map(bike => (
              <li className='list-group-item' key={bike.id} >{bike.name} </li>
            ))}
          </ul>
          <form>
            <div className="input-group mt-3">
              <input type="text" className='form-controll px-4' placeholder='Inserisci una nuova bici' />
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
