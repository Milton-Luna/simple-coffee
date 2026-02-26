import { useEffect, useState } from 'react'
import CoffeeList from './components/CoffeeList'
import FilterBar from './components/FilterBar'
import SkeletonCard from './components/SkeletonCard'

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
        if (!res.ok) throw new Error('Error loading data')
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

  return (
    <main className="container">
      <h1>Our Collection</h1>

      <p>
        Introducing our Coffee Collection, a selection of unique coffees
        from different roast types and origins.
      </p>

      <FilterBar filter={filter} setFilter={setFilter} />

      {loading && (
        <div className="grid">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {error && <p style={{ textAlign: 'center' }}>{error}</p>}

      {!loading && !error && (
        <CoffeeList coffee={filteredCoffee} />
      )}
    </main>
  )
}

export default App