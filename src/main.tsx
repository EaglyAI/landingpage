import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Forces a new production bundle hash when redeploying Pages.
document.documentElement.setAttribute('data-release', '2026-03-07-01')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
