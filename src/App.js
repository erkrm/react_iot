import React, { useState, useEffect } from 'react';
import {
  FaChargingStation,
  FaLaptopCode,
  FaTv,
  FaLaptopMedical,
  FaDesktop,
} from 'react-icons/fa';
import { onValue, ref, set } from 'firebase/database';
import './App.css';
import db from './firebase';

const icons = [
  FaChargingStation,
  FaLaptopCode,
  FaTv,
  FaLaptopMedical,
  FaDesktop,
];
const ledStatuses = [
  'Led1Status',
  'Led2Status',
  'Led3Status',
  'Led4Status',
  'Led5Status',
];

const defaultStatus = {
  Led1Status: '0',
  Led2Status: '0',
  Led3Status: '0',
  Led4Status: '0',
  Led5Status: '0',
};

const App = () => {
  const [ledStatus, setLedStatus] = useState(defaultStatus);

  useEffect(() => {
    const dbRef = ref(db);
    onValue(dbRef, (snap) => {
      setLedStatus(snap.val() || defaultStatus);
    });
  }, []);

  const handleToggle = (led) => {
    const status = ledStatus[led] === '1' ? '0' : '1';
    set(ref(db, led), status);
  };

  return (
    <div className="wrapper">
      {ledStatuses.map((led, i) => {
        const Icon = icons[i]; // get the Icon for this LED
        const isActive = ledStatus[led] === '1'; // check if this LED is active
        return (
          <div className="progress" key={led}>
            <a className="icon1">
              <Icon style={{ color: isActive ? 'green' : 'gray' }} />
            </a>
            <div
              className={`toggle-btn ${isActive ? 'active' : ''}`}
              onClick={() => handleToggle(led)}
            >
              <div className="inner-circle"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
