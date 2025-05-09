import { useState } from 'react'

function App() {

  // definisco l'array con gli elementi della mia lista
  const roadBike = [
    {
      id: 1,
      name: 'Pinarello',

    },
    {
      id: 1,
      name: 'Bianchi',

    },
    {
      id: 1,
      name: 'Santa Cruz',
    },
    {
      id: 1,
      name: 'Specialized',
    },
    {
      id: 1,
      name: 'Cannodale',

    },
    {
      id: 1,
      name: 'Trek',

    },
    {
      id: 1,
      name: 'Colnago',

    },
    {
      id: 1,
      name: 'Scott',

    }
  ];

  return (
    <>
      <header>
        <div className="navbar bg-primary-subtle mb-4">
          <div className="container-fluid">
            <h1>React Blog Form</h1>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <ul className="list-group">
            <li className='list-group-item'>prova</li>
            <li className='list-group-item'>prova</li>
            <li className='list-group-item'>prova</li>
            <li className='list-group-item'>prova</li>
            <li className='list-group-item'>prova</li>

          </ul>
        </div>
      </main>
    </>
  )
}

export default App
