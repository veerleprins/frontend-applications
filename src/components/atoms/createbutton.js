import React from 'react';
import './CreateButton.css';

export const CreateButton = ({ text }) => {
  return (
    <>
      <button className="button">{ text }</button>
    </>
  )
};