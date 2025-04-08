// src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// we import the default export from App.jsx
// we can name the function whatever we want here, so we'll call it App
import App from './App.jsx'

// we then use the component below. Note that the tag is self-closing
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
