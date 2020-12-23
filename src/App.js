import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchData } from './modules/fetchData.js';
import { FirstSection } from './components/organisms/firstsection';
import { SubHeading } from './components/atoms/subheading.js';
import { DutchMap } from './components/molecules/dutchmap.js';
import { SecondSection } from './components/organisms/secondsection';
import { SecondArticle } from './components/organisms/secondarticle';
import { Paragraph } from './components/atoms/paragraph';
import { lastText } from './modules/helpers/utils';
import { PieChart } from './components/molecules/piechart';

function App() {
  // Datasets:
  const [garages, setGarages] = useState(null);
  const [chargingGarages, setChargingGarages] = useState(null);
  const [electric, setElectric] = useState(null);
  const [map, setMap] = useState(null);
  const [cars, setCars] = useState(null);

  useEffect(() => {
    fetchData(setGarages, 
      setElectric, 
      setMap, 
      setChargingGarages,
      setCars);
  }, []);

  useEffect(() => {
    <DutchMap data={map} garages={garages} chargingPoints={chargingGarages}/>
  }, [map, garages, chargingGarages]);

  if (!cars) {
    return (
      <>
      <div>Loading...</div>
      </>
    )
  }

  return <>
    <main>
      <FirstSection/>
      <PieChart data={ cars }/>
      <SecondSection carsObj={cars}/>
      <SecondArticle data={electric}/>
      <SubHeading subtitle="Waar staan de laadpalen in Nederland?"/>
      <Paragraph text={lastText} name="lastP"/>
      <DutchMap data={map} garages={garages} chargingPoints={chargingGarages} />
    </main>
    <footer>

    </footer>
  </>
}
 export default App;





// import './App.css';
// import { useState, useEffect } from 'react';
// import { Title } from './Components/Atoms/Title';
// import { API_1 } from './modules/helpers/utils';
// import { startCleaning } from './modules/cleanData';

// // const useFetch = url => {
// //   const [data, setData] = useState(null);

// //   // async function fetchData() {
// //   //   const response = await fetch(url);
// //   //   const json = await response.json();
// //   //   setData(json);
// //   // }

// //   // useEffect(() => {fetchData()},[url]);

// //   return data;
// // };
// // const useFetch = url => {
// //   const [data, setData] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   // Similar to componentDidMount and componentDidUpdate:
// //   useEffect(async () => {
// //     const response = await fetch(url);
// //     const data = await response.json();
// //     const [item] = data.results;
// //     setData(item);
// //     setLoading(false);
// //   }, []);

// //   return { data, loading };
// // };

// function useFetch (url) {
//   // Function in useState because faster (only runs once i.s.o. every time)
//   const [data, setData] = useState(() => {
//     return null;
//   });
  
//   useEffect(() => {
//     async function fetchData() {
//       let response = await fetch(url);
//       response = await response.json();
//       setData(prevRes => response);
//     }
//     fetchData();
//   });
//   return data;
// }



// function App() {
//   // const { data, loading } = useFetch("https://api.randomuser.me/");

//   const data = useFetch(API_1);

//   // const [data, dataSet] = useState(null)

//   // useEffect(() => {
//   //   async function fetchMyAPI() {
//   //     let response = await fetch(API_1)
//   //     response = await response.json()
//   //     dataSet(response)
//   //   }

//   //   fetchMyAPI()
//   // }, [])

//   return <div>{JSON.stringify(data)}</div>

//   // const cars = startCleaning();

//   // const data = useFetch('https://opendata.rdw.nl/resource/b3us-f26s.json');
//   // console.log(data);

//   // return (
//   //   <div className="App">
//   //     <Title title="The electric car in the Netherlands"/>
//   //     {loading ? <div>...loading</div> : <div>{data.name.first}</div>}
//   //   </div>
//   // );
// }

// export default App;
