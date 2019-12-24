import React from 'react';
import './styles.css';
import member from '../../assets/img/member.png';

export default function Card() {
  return (
    <div className="card-add">
      <p className="add__member">Add New Member</p>
      <img src={member} alt="member" />
      <p className="add__chosen">Addie Barton</p>
      <input type="text" placeholder="exemplo@gmail.com" />
      <button type="button" >Add</button>
    </div>
  );
}
