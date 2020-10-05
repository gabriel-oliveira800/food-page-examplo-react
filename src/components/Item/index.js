import React, { useState, useEffect } from 'react';
import './style.css';

import StarIcon from '../../assets/icons/star.svg';

const ItemCard = ({ name, description, url, rating, price }) => {
    const [ratingList, setRatingLists] = useState([]);

    useEffect(() => {
        function handRating() {
            var numRating = parseInt(rating);
            var listsRatingNumber = [];

            for (let index = 0; index < numRating; index++) {
                listsRatingNumber.push(index);
            }

            setRatingLists(listsRatingNumber);
        }

        handRating();
    }, [rating]);

    return (
        <div className="content-item">
            <img src={url} alt="food" />
            <div className="content-info">
                <h3>{name}</h3>
                <span className="description">{description}</span>
                <br></br>
                <div className="rating">
                    <span>{rating}</span>
                    {ratingList.map((key, item) => {
                        return <img key={key} src={StarIcon} alt="star" />
                    })}
                </div>
            </div>
            <div className="buy">
                <span >R$ {parseFloat(price).toFixed(2)} </span>
                <button type="button">Compre Agora</button>
            </div>
        </div>
    );
}

export default ItemCard;
