import React from 'react';

export const SubHeading = ({ subtitle, name }) => {
  return <>
    <h2 className={name}>{ subtitle }</h2>
  </>
};