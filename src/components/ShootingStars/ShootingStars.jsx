import "./ShootingStars.css";

function ShootingStars() {

  const stars = Array.from({ length: 5 });

  return (
    <div className="shooting-stars">

      {stars.map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 30}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

    </div>
  );
}

export default ShootingStars;