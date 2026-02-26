function FilterBar({ filter, setFilter }) {
  return (
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
  )
}

export default FilterBar