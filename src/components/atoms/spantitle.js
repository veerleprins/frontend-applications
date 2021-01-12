import React from 'react';

export const SpanTitle = ({ first, spanText, last }) => (
  <h2> { first } <span className="bigYellow"> { spanText }</span> { last }</h2>
);