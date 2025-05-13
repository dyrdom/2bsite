import React from 'react';

export default function Download() {
  const platforms = ['Windows','macOS','Android','iOS'];
  return (
    <>
      <h2>Скачать 2bVPN</h2>
      <ul>
        {platforms.map((os,i) => (
          <li key={i}><a href="#">{os}</a></li>
        ))}
      </ul>
    </>
  );
}