function CoffeeCard({ coffee }) {
  return (
    <div className="card">
      <img src={coffee.image} alt={coffee.name} />

      {coffee.popular && <span className="badge">Popular</span>}

      <div className="card-body">
        <h3>{coffee.name}</h3>
        <span className="price">{coffee.price}</span>
      </div>

      <div className="card-footer">
        {coffee.rating ? (
          <span>⭐ {coffee.rating} ({coffee.votes})</span>
        ) : (
          <span>No ratings</span>
        )}

        {!coffee.available && <span className="sold">Sold out</span>}
      </div>
    </div>
  )
}

export default CoffeeCard