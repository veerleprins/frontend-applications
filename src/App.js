import './App.css';
import {startText, secondText, width, height, margin } from './modules/helpers/utils';
import { Title } from './Components/Atoms/Title';
import { Paragraph } from './Components/Atoms/Paragraph';
import { SubTitle } from './Components/Atoms/SubTitle';
import React, { useEffect, useState } from 'react';
import { fetchData } from './modules/fetchData';
import { scaleBand, scaleLinear, max } from 'd3';

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
  const yScale = scaleBand()
    .domain(electric.map(d => d.brand))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(electric, d => d.value)])
    .range([0, innerWidth]);

  console.log(xScale.ticks());

  return <div className="App">
    <Title/>
    <Paragraph text={startText} name="firstP"/>
    <SubTitle subtitle="Hoeveel elektrische auto’s rijden er in Nederland?"/>
    <Paragraph text={secondText} name="secondP"/>
    <div>{JSON.stringify(parking[0])}</div>
    <SubTitle subtitle="Welke merken zijn het populairst in Nederland?"/>
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {xScale.ticks().map(tickValue => (
          <g key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
            <line
              y2={innerHeight} 
              stroke="black"/>
            <text y={innerHeight + 3} dy=".71em" style={{textAnchor: 'middle'}}>
              {tickValue}
            </text>
          </g>
        ))}
        {yScale.domain().map(tickValue => (
            <text 
              key={tickValue}
              style={{textAnchor: "end"}} 
              x={-3} 
              dy=".32em" 
              y={yScale(tickValue) + yScale.bandwidth() / 2}>
              {tickValue}
            </text>
        ))}
        {electric.map(d => 
          (<rect 
            key={d.brand} 
            x={0}
            y={yScale(d.brand)} 
            width={xScale(d.value)} 
            height={yScale.bandwidth()}
            />
          ))}
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
