import { useEffect, useState } from 'react'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const [coffee, setCoffee] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json'
    )
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar datos')
        return res.json()
      })
      .then(data => {
        setCoffee(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const filteredCoffee =
    filter === 'available'
      ? coffee.filter(c => c.available)
      : coffee

  if (loading) return <p style={{ textAlign: 'center' }}>Cargando cafés...</p>
  if (error) return <p style={{ textAlign: 'center' }}>{error}</p>

  return (
    <main className="container">
      <h1>Our Collection</h1>

      <p>
        Introducing our Coffee Collection, a selection of unique coffees
        from different roast types and origins.
      </p>

      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All Products
        </button>

        <button
          className={filter === 'available' ? 'active' : ''}
          onClick={() => setFilter('available')}
        >
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