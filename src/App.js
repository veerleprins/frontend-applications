import "./App.css";
import React, { useEffect, useState } from "react";
import { fetchData } from "./modules/fetchData.js";
import { Intro } from "./components/molecules/intro";
import { DutchMap } from "./components/molecules/dutchmap.js";
import { ScrollVisualization } from "./components/organisms/scrollVisualization";
import { BarChart } from "./components/molecules/barchart";
import { PieChart } from "./components/molecules/piechart";

function App() {
  // Datasets:
  const [garages, setGarages] = useState(null);
  const [chargingGarages, setChargingGarages] = useState(null);
  const [electric, setElectric] = useState(null);
  const [map, setMap] = useState(null);
  const [cars, setCars] = useState(null);

  useEffect(() => {
    fetchData(setGarages, setElectric, setMap, setChargingGarages, setCars);
  }, [setMap, setGarages]);

  // useEffect(() => {
  //   <DutchMap data={map} garages={garages} chargingPoints={chargingGarages} />;
  // }, [map, garages, chargingGarages]);

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
      <footer></footer>
    </>
  );
}
export default App;