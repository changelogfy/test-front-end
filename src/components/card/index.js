import React, { useState } from 'react';
import './styles.css';
import heart from '../../assets/img/heart-1.png';
import person from '../../assets/img/person.png';
import assing from '../../assets/img/to-do.png';
import view from '../../assets/img/preview.png';
import heartActive from '../../assets/img/heart-2.png';

export default function Card( { item } ) {
  const [activeheart, setActiveHeart] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [activeButton2, setActiveButton2] = useState(false);
  return (
    <div className="card">
      <div className="card__heart" onClick={() => setActiveHeart(!activeheart)}>
        {activeheart ? (
          <img src={heartActive} alt="heart" />
        ) : (
          <img src={heart} alt="heart" />
        )}
      </div>
      <div className="card__body">
        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="person" />
        <p className="body__name">{item.name}</p>
        <p className="body__email">marvel@gmail.com</p>
      </div>
      <div className="card__buttons">
        <button
          type="button"
          onClick={() => setActiveButton(!activeButton)}
          className={activeButton && 'button__active'}
        >
          <img src={assing} alt="person" />
          Assing
        </button>
        <button
          type="button"
          onClick={() => setActiveButton2(!activeButton2)}
          className={activeButton2 && 'button__active'}
        >
          <img src={view} alt="person" />
          View
        </button>
      </div>
    </div>
  );
}
