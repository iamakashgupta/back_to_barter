import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const EcoMeter = ({ userId }) => {
  const [ecoData, setEcoData] = useState({ ecoMeter: 0, ecoPoints: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}/ecometer`);
        setEcoData(response.data);
      } catch (error) {
        console.error('EcoMeter load failed:', error);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div className="ecometer-container">
      <div style={{ width: 120, height: 120 }}>
        <CircularProgressbar
          value={ecoData.ecoMeter}
          text={`${ecoData.ecoMeter}%`}
          styles={{
            path: { stroke: '#4CAF50' },
            text: { fontSize: '16px' }
          }}
        />
      </div>
      <div className="eco-points">
        Total Points: {ecoData.ecoPoints}
      </div>
    </div>
  );
};

export default EcoMeter;