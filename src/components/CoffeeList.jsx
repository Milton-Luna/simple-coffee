import CoffeeCard from './CoffeeCard'

function CoffeeList({ coffee }) {

  if (coffee.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: '#9ca3af' }}>
        😢 No coffees available at the moment
      </p>
    )
  }

  return (
    <div className="grid">
      {coffee.map(item => (
        <CoffeeCard key={item.id} coffee={item} />
      ))}
    </div>
  )
}

export default CoffeeList