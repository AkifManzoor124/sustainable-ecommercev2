import React from 'react';
import './Popup.css';
import SingleRating from './SingleRating'

const Popup = () => {

  return (
    <div className="App">
      <SingleRating title={"Ingredients"} initialRating={3} />
      <SingleRating title={"Packaging"} initialRating={2} />
      <SingleRating title={"Sustainable Sourcing"} initialRating={5} />
      <SingleRating title={"Certifications"} initialRating={2} />
      <SingleRating title={"Recyclability"} initialRating={1} />
      <SingleRating title={"Overall Rating"} initialRating={3} />
    </div>
  );
};

export default Popup;
