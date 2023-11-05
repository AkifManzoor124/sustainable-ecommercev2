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
                    <FontAwesomeIcon icon={emptyStar} className="fa-2x low" />,
                    <FontAwesomeIcon icon={emptyStar} className="fa-2x low" />,
                    <FontAwesomeIcon icon={emptyStar} className="fa-2x medium" />,
                    <FontAwesomeIcon icon={emptyStar} className="fa-2x medium" />,
                    <FontAwesomeIcon icon={emptyStar} className="fa-2x high" />,
                    <FontAwesomeIcon icon={emptyStar} className="fa-2x high" />
                ]}
                fullSymbol={[
                    <FontAwesomeIcon icon={solidStar} className="fa-2x low" />,
                    <FontAwesomeIcon icon={solidStar} className="fa-2x low" />,
                    <FontAwesomeIcon icon={solidStar} className="fa-2x medium" />,
                    <FontAwesomeIcon icon={solidStar} className="fa-2x medium" />,
                    <FontAwesomeIcon icon={solidStar} className="fa-2x high" />,
                    <FontAwesomeIcon icon={solidStar} className="fa-2x high" />
                ]}
            />
        </div>
    );
};

export default SingleRating;
