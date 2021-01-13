import "./App.css";
import React, { useEffect, useState } from "react";
import { cleanCars } from "./modules/clean/cleanCars.js";
import { Intro } from "./components/molecules/intro";
import { DutchMap } from "./components/molecules/dutchmap.js";
import { ScrollVisualization } from "./components/organisms/scrollVisualization";
import { BarChart } from "./components/molecules/barchart";
import { PieChart } from "./components/molecules/piechart";
import { Footer } from "./components/molecules/footer";
import { cleanMapData } from "./modules/clean/cleanMapData.js";
import { cleanGarages } from "./modules/clean/cleanGarages";

function App() {
  // Datasets:
  const [garages, setGarages] = useState(null);
  const [chargingGarages, setChargingGarages] = useState(null);
  const [electric, setElectric] = useState(null);
  const [map, setMap] = useState(null);
  const [cars, setCars] = useState(null);

  useEffect(() => {
    cleanCars(setElectric, setCars);
  }, []);

  useEffect(() => {
    cleanMapData(setMap);
    localStorage.setItem('map', JSON.stringify(map))
  }, [map]);

  useEffect(() => {
    cleanGarages(setGarages, setChargingGarages);
    // localStorage.setItem('garages', JSON.stringify(garages))
    // localStorage.setItem('charging-garages', JSON.stringify(chargingGarages))
  }, []);

  if (!cars) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <main>
        <Intro />
        <ScrollVisualization cars={cars} />
        <PieChart data={cars}/>
        <BarChart data={electric} cars={cars} />
        <DutchMap
          data={map}
          garages={garages}
          chargingPoints={chargingGarages}
        />
      </main>
      <Footer/>
    </>
  );
}
export default App;