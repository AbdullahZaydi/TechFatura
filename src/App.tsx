import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Navbar/header';
import Routes from './Routes/AppRoutes';
import './assets/css/app.css';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
   );
}