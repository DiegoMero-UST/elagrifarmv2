'use client';
import { useEffect, useState } from 'react';

const fruits = [
  '🍎', '🍌', '🍇', '🍊', '🍐', '🍓', '🥝', '🍍', // Original fruits
  '🍉', '🥭', '🍑', '🍒', '🍋', '🍎', '🥑',  // More fruits
  '🥦', '🥕', '🌽', '🥬', '🥒', '🍆', '🥔', '🧅',  // Vegetables
  '🥜', '🌶️', '🥗', '🥝', '🍅', '🥥', '🍊'  // More produce
];

interface FruitProps {
  id: number;
  fruit: string;
  left: number;
  delay: number;
  duration: number;
}

const FloatingFruit = ({ fruit, left, delay, duration }: FruitProps) => (
  <div
    className="absolute bottom-0 text-2xl animate-float opacity-0"
    style={{
      left: `${left}%`,
      animation: `float ${duration}s linear ${delay}s infinite`,
      opacity: 0,
      filter: 'opacity(0.4)',
    }}
  >
    {fruit}
  </div>
);

const FloatingFruits = () => {
  const [fruitElements, setFruitElements] = useState<FruitProps[]>([]);

  useEffect(() => {
    const elements: FruitProps[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      fruit: fruits[Math.floor(Math.random() * fruits.length)],
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 8 + Math.random() * 10,
    }));
    setFruitElements(elements);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fruitElements.map((fruit) => (
        <FloatingFruit key={fruit.id} {...fruit} />
      ))}
    </div>
  );
};

export default FloatingFruits; 