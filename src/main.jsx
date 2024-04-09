import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LocationProvider } from './../contexts/LocationDetailsContext.jsx';
import Home from "./routes/root";
import ErrorPage from "./routes/error-page";
import Location from './routes/location';
import About from './routes/about';
import './css/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <LocationProvider> 
        <Routes>
          <Route path="/" element={<Home />} errorElement={<ErrorPage />}/>
          <Route path="/location/:id" element={<Location />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </LocationProvider>
    </Router>
  </React.StrictMode>,
)

