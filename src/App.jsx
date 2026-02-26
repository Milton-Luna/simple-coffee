import { useState } from 'react'
import coffeeData from './data/coffee.json'
import CoffeeCard from './components/CoffeeCard'

function App() {

    const [filter, setFilter] = useState('all')

  const filteredCoffee = filter === 'available'
    ? coffeeData.filter(c => c.available)
    : coffeeData


  return (
    <main className="container">
      <h1>Our Collection</h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees
        from different roast types and origins.
      </p>

      <div className="filters">
        <button onClick={() => setFilter('all')}>
          All Products</button>
        <button onClick={() => setFilter('available')}>
          Available Now
          </button>
      </div>

      <div className="grid">
        {filteredCoffee.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </main>
  )
}

export default App