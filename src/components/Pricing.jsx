import React from 'react';

export default function Pricing() {
  const plans = [
    { name: 'Месяц', price: '$9.99' },
    { name: 'Полгода', price: '$49.99' },
    { name: 'Год', price: '$79.99' }
  ];

  return (
    <>
      <h2>Тарифы</h2>
      <div className="grid">
        {plans.map((p,i) => (
          <div key={i} className="plan">
            <h3>{p.name}</h3>
            <div className="price">{p.price}</div>
            <button className="btn-plan">Выбрать</button>
          </div>
        ))}
      </div>
    </>
  );
}