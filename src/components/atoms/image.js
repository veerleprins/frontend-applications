import React from "react";

export const Image = ({ imageSrc, name, divName, altText }) => {
  return (
    <>
      <div className={divName}>
        <img src={imageSrc} className={name} alt={altText} />
      </div>
    </>
  );
};
