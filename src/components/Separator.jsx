import React from 'react';

export default function Separator({ flip }) {
  return (
    <svg
      style={{ transform: flip ? 'rotate(180deg)' : undefined }}
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      className="separator"
    >
      <path d="M0,0 L1200,0 L0,100 Z" fill={flip ? '#0a0a0a' : '#111'} />
    </svg>
  );
}