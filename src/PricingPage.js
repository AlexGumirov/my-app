import React from 'react';
import './PricingPage.css';
import cloudImg from './assets/cloud.png';
import backgroundImg from './assets/background.png';
import dogImg from './assets/dog.png';

// Импортируем буквы
import letterB from './assets/b.png';
import letterO from './assets/o.png';
import letterN from './assets/n.png';
import letterU from './assets/y.png';
import letterS from './assets/c.png';
import letterY from './assets/q.png';

function BonusItem({ title, description }) {
  return (
    <div className="bonus-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function BonusesPage() {
  const bonuses = [
    {
      title: "Фото и видео с прохождения",
      description: "Каждый получит крутые кадры с мероприятия!"
    },
    {
      title: "Веселье и новые знакомства",
      description: "Отличная возможность провести время активно и зарядиться эмоциями!"
    },
    {
      title: "Награждение победителей",
      description: "Медали, сертификаты и призы от партнеров!"
    }
  ];

  const titleLetters = [
    { img: letterB, alt: "Б" },
    { img: letterO, alt: "О" },
    { img: letterN, alt: "Н" },
    { img: letterU, alt: "У" },
    { img: letterS, alt: "С" },
    { img: letterY, alt: "Ы" }
  ];

  return (
    <div className="bonuses-page">
      <div className="background" style={{ backgroundImage: `url(${backgroundImg})` }}></div>
      
      <img src={cloudImg} alt="Облако" className="cloud cloud-1" />
      <img src={cloudImg} alt="Облако" className="cloud cloud-2" />
      
      <div className="character-container">
        <img src={dogImg} alt="Собачка" className="character" />
      </div>
      
      {/* Заголовок из картинок */}
      <div className="bonuses-title">
        {titleLetters.map((letter, index) => (
          <img 
            key={index}
            src={letter.img}
            alt={letter.alt}
            className="title-letter"
          />
        ))}
      </div>
      
      <div className="bonuses-list">
        {bonuses.map((bonus, index) => (
          <BonusItem key={index} title={bonus.title} description={bonus.description} />
        ))}
      </div>
    </div>
  );
}

export default BonusesPage;