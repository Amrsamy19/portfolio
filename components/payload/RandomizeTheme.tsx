'use client'
import React from 'react'
import { useForm } from '@payloadcms/ui'

function hslToHex(h: number, s: number, l: number) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export default function RandomizeTheme() {
  const { dispatchFields, setModified } = useForm();

  const handleRandomize = () => {
    const baseHue = Math.floor(Math.random() * 360);
    
    // Cohesive dark palette
    const bg = hslToHex(baseHue, 10, 5);          
    const card = hslToHex(baseHue, 15, 10);       
    const border = hslToHex(baseHue, 15, 15);     
    const fg = hslToHex(baseHue, 10, 95);         
    
    // Vibrant accents
    const muted = hslToHex(baseHue, 40, 75);      
    const accent = hslToHex(baseHue, 80, 60);     
    const accentHover = hslToHex(baseHue, 80, 50);
    
    dispatchFields({ type: 'UPDATE', path: 'background', value: bg });
    dispatchFields({ type: 'UPDATE', path: 'foreground', value: fg });
    dispatchFields({ type: 'UPDATE', path: 'muted', value: muted });
    dispatchFields({ type: 'UPDATE', path: 'accent', value: accent });
    dispatchFields({ type: 'UPDATE', path: 'accentHover', value: accentHover });
    dispatchFields({ type: 'UPDATE', path: 'card', value: card });
    dispatchFields({ type: 'UPDATE', path: 'border', value: border });
    
    if (setModified) {
      setModified(true);
    }
  }

  return (
    <div style={{ marginBottom: '30px', marginTop: '10px' }}>
      <button 
        type="button" 
        onClick={handleRandomize}
        style={{ 
          padding: '12px 24px', 
          background: 'var(--theme-elevation-800)', 
          color: 'var(--theme-elevation-50)', 
          border: 'none', 
          borderRadius: '6px', 
          cursor: 'pointer', 
          fontWeight: '600',
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.background = 'var(--theme-elevation-700)'}
        onMouseOut={(e) => e.currentTarget.style.background = 'var(--theme-elevation-800)'}
      >
        ✨ Generate Harmonious Palette
      </button>
    </div>
  )
}
