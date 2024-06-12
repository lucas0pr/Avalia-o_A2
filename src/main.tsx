import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useCarrinhoCompras } from './store/CarrinhoCompras.ts'


useCarrinhoCompras.subscribe((state) => console.log("Novo estado", state));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
