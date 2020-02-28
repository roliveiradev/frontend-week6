import React, { useState, useEffect } from 'react';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt'
import api from '../../services/api';

import './styles.css';
import logo from '../../assets/logo.png';

export default function Dashboard( {history} ) {
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    async function loadBoxes(){
      const response = await api.get('dashboard');
      setBoxes(response.data);
    }
    loadBoxes();

  }, []);

  function OpenBox(idBox){
    history.push(`/box/${idBox}`)
  }

    return (
    <div id="box-container">
      <header>
      <img src={logo} alt="R.OLIVEIRA BOX" />
      <h1>Listagem de Boxes</h1>
      </header>
      <ul>
        {boxes.map(box => ( 
          <li key={box._id}>
              <strong onClick={() => OpenBox(box._id)}>{box.title}</strong>
              <span>há{" "}{distanceInWords(box.createdAt, new Date(), {locale: pt})}</span>
          </li>
          ))
        }
      </ul>
    </div>
    );
}
