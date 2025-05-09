import { useState } from 'react'

// definisco l'array con gli elementi della mia lista
const roadBike = [
  { id: 1, name: 'Pinarello' },
  { id: 2, name: 'Bianchi' },
  { id: 3, name: 'Santa Cruz' },
  { id: 4, name: 'Specialized' },
  { id: 5, name: 'Cannodale' },
  { id: 6, name: 'Trek' },
  { id: 7, name: 'Colnago' },
  { id: 8, name: 'Scott' }
];

function App() {
  const [newBike, setNewBike] = useState("");
  const [bike, setBike] = useState(roadBike);

  const addBike = (e) => {
    e.preventDefault();
    const newBikeId = bike[bike.length - 1].id + 1;
    console.log(bike)
    const newBikeObject = { id: newBikeId, name: newBike }
    console.log(newBikeObject)
    setBike([...bike, newBikeObject])
    setNewBike("")
  };

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
            <li className="list-group-item active" aria-current="true"> Bike list</li>
            {bike.map(bikeName => (
              <li className='list-group-item' key={bikeName.id} >{bikeName.name} <button className='btn btn-danger ms-5'>Rimuovi</button></li>
            ))}
          </ul>
          <form onSubmit={addBike}>
            <div className="input-group mt-3">
              <input value={newBike} onChange={(e) => {
                setNewBike(e.target.value)
              }} type="text" className='px-4' placeholder='Inserisci una nuova bici' />
              <button className='btn btn-primary ms-3'> Aggiungi</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default App;
