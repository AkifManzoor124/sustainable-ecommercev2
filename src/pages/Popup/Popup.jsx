import React, { useState, useEffect } from 'react';
import './Popup.css';
import SingleRating from './SingleRating'
import { getResponseFromChatGPT } from '../../chatgpt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faGear as solidGear } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece as solidPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

const Popup = () => {
  const [points, setPoints] = useState(30);
  const [rating, setRatings] = useState([0, 0, 0, 0, 0, 0])
  const [productData, setProductData] = useState({});

  useEffect(() => {
    // Code to run when the component mounts and whenever the dependencies change

    chrome.runtime.onMessage.addListener(function (message) {
      console.log('weAreInPopUp.js');
      if (message) {
        console.log('Received data in popup:', message);
        // Update the state with the received data
        // For example, assuming message.data is an array of ratings:
        setProductData(message)

        const prompt = `
        title: ${message.title},    
        brand: ${message.brand},
        featureBullets: ${message.featureBullets},
        productDescription: ${message.productDescription},
        manufacturer: ${message.manufacturer}\n
        Given the information of the product above, 
        rate the product in for each category to determine how eco-friendly the product is. 
        Rate them out of 5 in the following 5 categories:\n\n
        1. Ingredients: Determine if the product is organic or using in-organic/harmful ingredients.\n
        2. Packaging: Examine the packaging of the product to determine if it uses minimal and sustainable materials and if it is recyclable or biodegradable.\n
        3. Certifications: Check if the product holds any recognized certifications such as cruelty-free, organic, or other relevant eco-friendly certifications.\n
        4. Sustainable Sourcing: Research the brand's sourcing practices and whether they responsibly and sustainably source their ingredients.\n
        5. Recyclability: Evaluate whether the product's packaging is recyclable or if the brand offers any recycling or refill programs.\n\n

        Along with the rating, give the final verdict on how much eco-friendly the product is. 
        Do not give me any prologues. Do not give me any errors. Don't give me warnings and if there is too much input, don't crash, keep it simple and don't crash. Don't overthink it.

        Always return the answer following this template (Do not add any text outside of this template):

        1. Ingredients: x/5
        * {description}
        2. Packaging: x/5
        * {description}
        3. Certifications: x/5
        * {description}
        4. Sustainable Sourcing: x/5
        * {description}
        5. Recyclability: x/5
        * {description}
        6. Overall Rating: x/5
        * {description}

        Final Verdict: {description}
        `

        console.log(prompt);

        // getResponseFromChatGPT(prompt)
        //   .then(response => {
        //     console.log('WEARENOWBACKFROMGPT');
        //     console.log(response);
        //     const regex = /(\d+)\/5/g;
        //     const ratings = response.message.match(regex);
        //     console.log(ratings);
        //     setRatings(ratings.map(rating => parseInt(rating, 5)));
        //   }).catch(error => {
        //     console.error(error);
        //   });

        var response = getResponseFromChatGPT(prompt);
        const regex = /(\d+)\/5/g;
        const ratings = response.match(regex);
        console.log(ratings);
        console.log(ratings.map(rating => parseInt(rating.split("/")[0])));
        setRatings(ratings.map(rating => parseInt(rating.split("/")[0])));

      }
    });

    // This is where you can perform side effects

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
