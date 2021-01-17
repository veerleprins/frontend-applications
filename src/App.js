import './App.css';
import React, { useEffect, useState} from 'react';
import { cleanCars } from "./modules/clean/cleanCars.js";
import { Intro } from "./components/molecules/intro";
import { DutchMap } from "./components/molecules/dutchmap.js";
import { ScrollVisualization } from "./components/organisms/scrollVisualization";
import { BarChart } from "./components/molecules/barchart";
import { PieChart } from "./components/molecules/piechart";
import { Footer } from './components/molecules/footer';
import { cleanMapData } from './modules/clean/cleanMapData.js';
import { cleanGarages } from './modules/clean/cleanGarages';
import { Image } from './components/atoms/image';

function App() {
  // Datasets:
  const [garages, setGarages] = useState(null);
  const [chargingGarages, setChargingGarages] = useState(null);
  const [electric, setElectric] = useState(null);
  const [map, setMap] = useState(null);
  const [cars, setCars] = useState(null);

  useEffect(() => {
    localStorage.setItem('map', JSON.stringify(map))
  }, [map])

  useEffect(() => {
    localStorage.setItem('electric-cars', JSON.stringify(electric));
  }, [electric])

  useEffect(() => {
    localStorage.setItem('all-cars', JSON.stringify(cars));
  }, [cars])

  useEffect(() => {
    localStorage.setItem('all-garages', JSON.stringify(garages));
  }, [garages])

  useEffect(() => {
    localStorage.setItem('charging-garages', JSON.stringify(chargingGarages));
  }, [chargingGarages])

  useEffect(() => {
    cleanCars(setElectric, setCars);
    console.log('Unmounted first effect');
  }, []);

  useEffect(() => {
    cleanMapData(setMap);
  },[map]);

  useEffect(() => {
    cleanGarages(setGarages, setChargingGarages);
    console.log('Unmounted last effect');
  }, []);

  if (!cars) {
    return (
      <>
        <div className='loading'>
          <h2 className='loading-title'>Even wachten tot alle data verzameld is...</h2>
          <Image imageSrc='carPNG.png' name='imgCar' divName='greenSpace' />
        </div>
      </>
    );
  }
  return (
    <>
      <main>
        <Intro />
        <ScrollVisualization cars={cars} />
        <PieChart data={cars}/>
        <BarChart data={JSON.parse(localStorage.getItem('electric-cars'))} cars={cars} />
        <DutchMap
          data={JSON.parse(localStorage.getItem('map'))}
          garages={JSON.parse(localStorage.getItem('all-garages'))}
          chargingPoints={JSON.parse(localStorage.getItem('charging-garages'))}
        />
      </main>
      <Footer/>
    </>
  );
}
export default App;