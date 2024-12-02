'use client';

export default function Button({ type, onClick, children, style }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#0070f3',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        ...style, 
      }}
    >
      {children}
    </button>
  );
}
