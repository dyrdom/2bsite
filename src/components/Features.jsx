import React from 'react';

export default function Features() {
  const items = [
    { title: 'Максимальная скорость', text: 'Оптимизированные серверы для быстрой и стабильной связи.' },
    { title: 'Надёжная защита',      text: 'Шифрование AES-256 и защита от утечек DNS.' },
    { title: 'Анти-блокировка',      text: 'Обход цензуры и гео-ограничений.' },
    { title: 'Поддержка 24/7',       text: 'Круглосуточная помощь.' }
  ];

  return (
    <>
      <h2>Почему выбирают нас?</h2>
      <div className="grid">
        {items.map((f,i) => (
          <div key={i} className="feature-item">
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}