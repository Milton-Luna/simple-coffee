function SkeletonCard() {
  return (
    <div className="card skeleton">
      <div className="skeleton-img"></div>

      <div className="card-body">
        <div className="skeleton-text"></div>
        <div className="skeleton-price"></div>
      </div>

      <div className="card-footer">
        <div className="skeleton-text small"></div>
      </div>
    </div>
  )
}

export default SkeletonCard