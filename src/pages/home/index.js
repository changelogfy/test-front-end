import React, { useState, useEffect } from 'react';
import './styles.css';
import rocket from '../../assets/img/rocket.png';
import CardAdd from '../../components/card-add';
import Card from '../../components/card';
import Header from '../../components/header';
import axios from 'axios';

export default function Home() {
  const [marvel, setMarvel] = useState([]);
  const [search, setSearch] = useState('');

  const card = [
    {
      name: 'amanda',
      email: 'amanda@gmail.com',
      id: 1,
    },
    {
      name: 'luiza',
      email: 'luiza@gmail.com',
      id: 2,
    },
    {
      name: 'gabriela',
      email: 'gabriela@gmail.com',
      id: 3,
    },
    {
      name: 'natalia',
      email: 'natalia@gmail.com',
      id: 4,
    },
    {
      name: 'cecilia',
      email: 'cecilia@gmail.com',
      id: 5,
    },
  ];

  async function getMarvel() {
    let criado = true;
    const hash = 'b496f5b3a6bf2e0e412796bf99f2ac48';
    const keyPublic = '137f326d78a1f99dce66be0763ce21b8';
    try {
      const response = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${keyPublic}&hash=${hash}`
      );

      if (criado) {
        setMarvel(response.data.data.results);
      }
    } catch (error) {
      console.log(error);
    }
    return () => {
      
      criado = false;
    };
  }


  const filter = marvel.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getMarvel();
  }, []);
  return (
    <>
          {console.log(marvel)}
          <Header setSearch={setSearch} />
          <div className="home">
            <div className="home__title">
              <div className="title__1">
                <img src={rocket} alt="rocket" />
                <div className="title__teams">
                  <p>Team Members</p>
                  <p className="teams_rocket">Rocket</p>
                </div>
              </div>
              <div className="title__2">
                <button className="button-1" type="button">
                  All
                </button>
                <button className="button-2" type="button">
                  My Team
                </button>
              </div>
            </div>
            <div className="cards">
              <CardAdd />
              {filter.map(item => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
    </>
  );
}
