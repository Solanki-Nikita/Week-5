import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// App from './App.jsx'
import WeatherApp from './WeatherApp.jsx';
import Users from './Users.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <WeatherApp /> */}
    <Users />
  </StrictMode>,
)
