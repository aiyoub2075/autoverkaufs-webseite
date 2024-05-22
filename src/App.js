import React from 'react';
import './App.css';
import CarListing from './components/CarListing';

function App() {
  const cars = [
    {
      
      name: 'Mazda 5',
      image: 'https://www.motortrend.com/uploads/sites/10/2015/11/2011-mazda-mazda6-i-grand-touring-auto-sedan-angular-front.png'
    },
    {
      name: 'ford cmax',
      image: 'https://media.autoexpress.co.uk/image/private/s--5Civ6LUc--/t_content-image-full-desktop@2/v1562243384/autoexpress/2016/09/ford-st-052.jpg'
    },
    {
      name: 'Audi A4',
      image: 'https://car-images.bauersecure.com/pagefiles/73860/1752x1168/audi_a4_avant_01.jpg?mode=max&quality=90&scale=down'
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Autoverkauf Webseite</h1>
      </header>
      <div className="car-listings">
        {cars.map((car, index) => (
          <CarListing key={index} name={car.name} image={car.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
