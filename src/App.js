import "./App.css";
import React, { useEffect, useState } from "react";
import { fetchData } from "./modules/fetchData.js";
import { Intro } from "./components/molecules/intro";
import { SubHeading } from "./components/atoms/subheading.js";
import { DutchMap } from "./components/molecules/dutchmap.js";
import { ScrollVisualization } from "./components/organisms/scrollVisualization";
import { Paragraph } from "./components/atoms/paragraph";
import { lastText } from "./modules/helpers/utils";
import { BarChart } from "./components/molecules/barchart";

function App() {
  // Datasets:
  const [garages, setGarages] = useState(null);
  const [chargingGarages, setChargingGarages] = useState(null);
  const [electric, setElectric] = useState(null);
  const [map, setMap] = useState(null);
  const [cars, setCars] = useState(null);

  useEffect(() => {
    fetchData(setGarages, setElectric, setMap, setChargingGarages, setCars);
  }, []);

  useEffect(() => {
    <DutchMap data={map} garages={garages} chargingPoints={chargingGarages} />;
  }, [map, garages, chargingGarages]);

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
        <ScrollVisualization carsObj={cars} />
        <BarChart data={electric} cars={cars} />
        <SubHeading subtitle="Waar staan de laadpalen in Nederland?" />
        <Paragraph text={lastText} name="lastP" />
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