import React from 'react';
import './CreateButton.css';

export const Paragraph = ({ text, name }) => {
  return (
    <>
      <p className={name}> { text }</p>
    </>
  )
};