import './App.css';
import {startText, secondText, width, height, margin } from './modules/helpers/utils';
import { Title } from './Components/Atoms/Title';
import { Paragraph } from './Components/Atoms/Paragraph';
import { SubTitle } from './Components/Atoms/SubTitle';
import React, { useEffect, useState } from 'react';
import { fetchData } from './modules/fetchData';
import { scaleBand, scaleLinear, max, format } from 'd3';
import { AxisBottom } from './Components/Atoms/AxisBottom';
import { AxisLeft } from './Components/Atoms/AxisLeft';
import { Bars } from './Components/Atoms/Bars';

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;


function App() {
  // Datasets:
  const [parking, setParking] = useState(null);
  const [electric, setElectric] = useState(null);

  useEffect(() => {
    fetchData(setParking, setElectric);
  }, []);

  if (!electric) {
    return <div className="App">
    <p>Loading...</p>
  </div>
  }

  // D3 BarChart with help from Curran Kelleher.
  // Source: https://www.youtube.com/watch?v=y03s9MEx6mc&list=PL9yYRbwpkykuK6LSMLH3bAaPpXaDUXcLV&index=23

  const xValue = d => d.brand; //TESLA
  const yValue = d => d.value; //40000

  const xScale = scaleBand()
    .domain(electric.map(xValue))
    .range([0, innerWidth])
    .padding(0.2);

  const yScale = scaleLinear()
    .domain([0, max(electric, yValue)])
    .range([innerHeight, 0]);

  return <div className="App">
    <Title/>
    <Paragraph text={startText} name="firstP"/>
    <SubTitle subtitle="Hoeveel elektrische auto’s rijden er in Nederland?"/>
    <Paragraph text={secondText} name="secondP"/>
    <div>{JSON.stringify(parking[0])}</div>
    <SubTitle subtitle="Welke merken zijn het populairst in Nederland?"/>
    <svg width={width} height={height} >
      <g transform={`translate(${margin.left},${-margin.bottom})`}>
        <g className="x-Axis">
          <AxisBottom 
            xScale={xScale} 
            innerHeight={innerHeight}
          />
        </g>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickFormat={n => format(",d")(n).replace(',', '.')}/>
        <text
          y={-80}
          textAnchor='middle'
          x={- innerHeight / 2}
          transform={`rotate(-90)`}
        >
          Aantal auto's
        </text>
        <Bars 
          data={electric} 
          xScale={xScale} 
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          innerHeight={innerHeight}
        />
        </g>
    </svg>
    <SubTitle subtitle="Waar staan de meeste laadpalen in Nederland?"/>
  </div>
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
