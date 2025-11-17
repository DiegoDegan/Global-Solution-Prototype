import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // CORRIGIDO: App está na mesma pasta
import './index.css' // CORRIGIDO: index.css está na mesma pasta

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)