import React from 'react';

export const Image = ({ imageSrc }) => {
  return (
    <>
      <div className="greenSpace">
        <img src={imageSrc} className="imgCar" alt="png file of a car"/>
      </div>
    </>
  )
};