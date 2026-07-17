import { useEffect, useRef, useCallback } from "react";
import "./ShootingStars.css";

function ShootingStars() {
  const meteorsRef = useRef([]);
  
  const stars = [
    { top: "10%", left: "16%", delay: "0s", duration: "3.6s" },      // 3 × 1.2s
    { top: "22%", left: "33%", delay: "1.2s", duration: "4.8s" },    // 4 × 1.2s
    { top: "8%", left: "66%", delay: "2.4s", duration: "3.6s" },     // 2 × 1.2s
    { top: "31%", left: "82%", delay: "0.6s", duration: "4.8s" },    // 4 × 1.2s
    { top: "17%", left: "91%", delay: "1.8s", duration: "3.6s" },    // 3 × 1.2s
  ];

  // Função para ativar uma estrela
  const shootStar = useCallback((meteor) => {
    if (!meteor) return;
    
    meteor.classList.remove('active');
    void meteor.offsetWidth;
    meteor.classList.add('active');
    
    setTimeout(() => {
      meteor.classList.remove('active');
    }, 1200); // 1.2s
  }, []);

  // Função para ativar uma estrela aleatória
  const shootRandomStar = useCallback(() => {
    const meteors = meteorsRef.current;
    if (meteors.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * meteors.length);
    shootStar(meteors[randomIndex]);
  }, [shootStar]);

  // Função para ativar todas em sequência
  const shootSequence = useCallback(() => {
    const meteors = meteorsRef.current;
    meteors.forEach((meteor, index) => {
      setTimeout(() => {
        shootStar(meteor);
      }, index * 1200); // 1.2s entre cada estrela
    });
  }, [shootStar]);

  // Configurar os intervals - TODOS EM MÚLTIPLOS DE 1.2s
  useEffect(() => {
    // Ativa uma estrela aleatória a cada 4.8 segundos (4 × 1.2s)
    const interval1 = setInterval(() => {
      shootRandomStar();
    }, 4800);

    // Ativa todas em sequência a cada 7.2 segundos (6 × 1.2s)
    const interval2 = setInterval(() => {
      shootSequence();
    }, 7200);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [shootRandomStar, shootSequence]);

  return (
    <div className="sky">
      <div className="shooting-stars" aria-hidden="true">
        <div 
          className="shooting-star-meteor" 
          aria-hidden="true"
          ref={el => meteorsRef.current[0] = el}
        />
        <div 
          className="shooting-star-meteor" 
          aria-hidden="true"
          ref={el => meteorsRef.current[1] = el}
        />
        <div 
          className="shooting-star-meteor" 
          aria-hidden="true"
          ref={el => meteorsRef.current[2] = el}
        />
      </div>
      
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}

export default ShootingStars;