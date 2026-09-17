'use client'
import React from 'react'
import { useField } from '@payloadcms/ui'

export default function ColorField({ path, field }: any) {
  const { value, setValue } = useField<string>({ path })
  
  const label = field?.label || field?.name || path;
  const required = field?.required;

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, fontSize: '0.875rem', color: 'var(--theme-elevation-800)' }}>
        {label}
        {required && <span style={{ color: 'var(--theme-error-500)', marginLeft: '4px' }}>*</span>}
      </label>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input 
          type="color" 
          value={value || '#000000'} 
          onChange={(e) => setValue(e.target.value)}
          style={{ 
            width: '42px', 
            height: '42px', 
            border: '1px solid var(--theme-elevation-150)', 
            borderRadius: '4px', 
            padding: '2px', 
            cursor: 'pointer', 
            background: 'transparent' 
          }}
        />
        <input
          type="text"
          value={value || ''}
          onChange={(e) => setValue(e.target.value)}
          style={{ 
            padding: '10px 14px', 
            border: '1px solid var(--theme-elevation-150)', 
            borderRadius: '4px', 
            background: 'var(--theme-elevation-50)', 
            color: 'var(--theme-elevation-800)', 
            flex: 1,
            fontSize: '1rem',
            fontFamily: 'monospace'
          }}
        />
      </div>
    </div>
  )
}
