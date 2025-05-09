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
          <ul className="list-group">
            <li class="list-group-item active" aria-current="true"> Bike list blog</li>
            {roadBike.map(bike => (
              <li className='list-group-item' key={bike.id} >{bike.name} </li>
            ))}

            {/*<li className='list-group-item'>prova</li>
            <li className='list-group-item'>prova</li>
            <li className='list-group-item'>prova</li>
            <li className='list-group-item'>prova</li>*/}
          </ul>
        </div>
      </main>
    </>
  )
}

export default App
