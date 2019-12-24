import React from 'react';
import './styles.css';
import menu from '../../assets/img/menu.png';
import logo from '../../assets/img/logo.png';
import user from '../../assets/img/user.png';
import { FaAngleDown } from 'react-icons/fa';

export default function Header({ setSearch }) {

  return (
    <div className="header">
      <div className="grow-1">
        <img src={menu} alt="menu"></img>
        <img src={logo} alt="logo"></img>
      </div>
      <div className="grow-2">
        <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="grow-1">
        <img src={user} alt="user" />
        <p>Randall Cohen</p>
        <FaAngleDown color="98a0a6" />
      </div>
    </div>
  );
}
