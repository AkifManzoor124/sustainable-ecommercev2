import React, { useState, useEffect } from 'react';
import './Popup.css';
import SingleRating from './SingleRating'
import { getResponseFromChatGPT } from '../../chatgpt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faGear as solidGear } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece as solidPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

const title = '';
const brand = '';
const featureBullets = '';
const productDescription = '';
const manufacturer = '';


const Popup = () => {
  const [points, setPoints] = useState(30);
  const [rating, setRatings] = useState([0, 0, 0, 0, 0, 0])

  useEffect(() => {
    // Code to run when the component mounts and whenever the dependencies change

    const title = document.querySelector('#productTitle')?.innerText.trim();
    const brand = document.querySelector('#edp-feature-declaration')?.innerText.trim()
    const featureBullets = document.querySelector('#feature-bullets')?.innerText.trim()
    const productDescription = document.querySelector('#productDescription')?.innerText.trim()
    // const manufacturer = document.querySelector('th.a-color-secondary:contains("Manufacturer") + td.a-size-base.prodDetAttrValue');

    console.log(title, brand, featureBullets, productDescription);

    const prompt = `
    title: ${title}
    productDescription: ${productDescription}
    manufacturer: ${manufacturer}
    Given the information of the product above, 
    rate the product in each category to determine how eco-friendly the product is. 
    Rate them out of 10 in the following 5 categories:\n\n
    1. Ingredients: Determine if the product is organic or using organic ingredients\n
    2. Packaging: Examine the packaging of the product to determine if it uses minimal and sustainable materials and if it is recyclable or biodegradable.\n
    3. Certifications: Check if the product holds any recognized certifications such as cruelty-free, organic, or other relevant eco-friendly certifications.\n
    4. Sustainable Sourcing: Research the brand's sourcing practices and whether they responsibly and sustainably source their ingredients.\n
    5. Recyclability: Evaluate whether the product's packaging is recyclable or if the brand offers any recycling or refill programs.\n\n
    Along with the rating, give the final verdict on how much eco-friendly the product is. 
    Don't give me warnings and if there is too much input, don't crash, keep it simple and don't crash. Don't overthink it.\n\n
    Provide me with an average as well using the 5 parameters.`



    // getResponseFromChatGPT(prompt)
    //   .then(response => {
    //     const regex = /(\d+)\/10/g;
    //     const ratings = response.match(regex);
    //     console.log(ratings);
    //     setRatings(ratings.map(rating => parseInt(rating, 10)));
    //   }).catch(error => {
    //     console.error(error);
    //   });

    // This is where you can perform side effects

    // Return a cleanup function if needed
    return () => {
      // Code to run when the component unmounts or when the dependencies change
    };
  }, []);

  return (
    <div className="App">
      <div className="Header">
        {/* TODO: Extension Logo */}
        <div>
          <FontAwesomeIcon icon={solidPuzzlePiece} className="fa-2x low" />,
        </div>
        <>
          <div>
            {/* TODO: Add Star logo */}
            <div>
              <FontAwesomeIcon icon={solidStar} className="fa-2x low" />, {/* Replaced with the Font Awesome star icon */}
            </div>
            {/*  */}
            <div>{points}</div>
            {/* TODO: Add avatar logo */}
            <div></div>
          </div>
          {/* TODO: Add settings icon */}
          <div>
            <FontAwesomeIcon icon={solidGear} className="fa-2x low" />,
          </div>
        </>
      </div>
      <div>
        <SingleRating title={"Ingredients"} initialRating={rating[0]} />
        <SingleRating title={"Packaging"} initialRating={rating[1]} />
        <SingleRating title={"Sustainable Sourcing"} initialRating={rating[2]} />
        <SingleRating title={"Certifications"} initialRating={rating[3]} />
        <SingleRating title={"Recyclability"} initialRating={rating[4]} />
        <SingleRating title={"Overall Rating"} initialRating={rating[5]} />
      </div>
      <div>
        <h1>Powered by OpenAI - ChatGPT</h1>
      </div>
    </div>
  );
};

export default Popup;
