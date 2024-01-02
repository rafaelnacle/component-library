import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from "./components-usage/Cards"
import Badges from "./components-usage/Badges"
import Banners from "./components-usage/Banners"
import Testimonials from "./components-usage/Testimonials"
import Tooltips from "./components-usage/Tooltips"

function App() {
  return (
    <div className='main__container'>
      <h1>Component Library ++</h1>

      <h2 className='component__title'>Cards</h2>
      <Cards/>

      <h2 className='component__title'>Badges</h2>
      <Badges />

      <h2 className='component__title'>Banners</h2>
      <Banners />

      <h2 className='component__title'>Tooltips</h2>
      <Tooltips />

      <h2 className='component__title'>Testimonials</h2>
      <Testimonials />
    </div>
    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
