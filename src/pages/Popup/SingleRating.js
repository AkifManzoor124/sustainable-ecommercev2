import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const SingleRating = ({ title, initialRating }) => {
    return (
        <div className="SingleRating" style={{
            alignItems: 'center',
            display: 'flex',
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            borderBottomStyle: 'solid',
            paddingLeft: 10,
            paddingRight: 10
        }}>
            <h1>{title}:</h1>
            <Rating
                stop={5}
                initialRating={initialRating}
                readonly
                emptySymbol={[
                    <FontAwesomeIcon icon={emptyStar} className="fa-2x low" style={{ color: 'red' }} />,
                    <FontAwesomeIcon icon={emptyStar} className="fa-2x low" style={{ color: 'red' }} />,
                    <FontAwesomeIcon icon={emptyStar} className="fa-2x medium" style={{ color: 'orange' }} />,
                    <FontAwesomeIcon icon={emptyStar} className="fa-2x medium" style={{ color: 'orange' }} />,
                    <FontAwesomeIcon icon={emptyStar} className="fa-2x high" style={{ color: 'green' }} />,
                    <FontAwesomeIcon icon={emptyStar} className="fa-2x high" style={{ color: 'green' }} />
                ]}
                fullSymbol={[
                    <FontAwesomeIcon icon={solidStar} className="fa-2x low" style={{ color: 'red' }} />,
                    <FontAwesomeIcon icon={solidStar} className="fa-2x low" style={{ color: 'red' }} />,
                    <FontAwesomeIcon icon={solidStar} className="fa-2x medium" style={{ color: 'orange' }} />,
                    <FontAwesomeIcon icon={solidStar} className="fa-2x medium" style={{ color: 'orange' }} />,
                    <FontAwesomeIcon icon={solidStar} className="fa-2x high" tyle={{ color: 'green' }} />,
                    <FontAwesomeIcon icon={solidStar} className="fa-2x high" tyle={{ color: 'green' }} />
                ]}
            />
        </div>
    );
};

export default SingleRating;
