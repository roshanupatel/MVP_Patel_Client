import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import MapContainer from './MapContainer.jsx';
import Axios from 'axios';

const Dashboard = ({ getUserData, clearUserInfo }) => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const [array, setArray] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      navigate('/login');
      clearUserInfo();
    } catch (err) {
      setError(err);
    }
  };

  const getData = async () => {
    await Axios.get("/api/getTrails")
      .then((res) => {
       console.log('this working??', res.data);
        setArray(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    getData();
  }, []);

  // const array = [{location: {lat: 37.505, lng: -121.8}, trailName: "Sunol", title: "Sunol Regional Wilderness", length: "2mi", traffic: "moderate", offLeash: "Yes"}, {location: {lat: 37.51, lng: -121.8}}];

  return (
    <>
      <div>
        <h2>Profile</h2>
        {error && console.log(error)}
        <strong>Email: {currentUser && currentUser.email} </strong>
        <Link to="/update-profile">Update Profile</Link>
        <button onClick={handleLogout}>Log Out</button>
      </div>
      {/* <div>
        <button onClick={handleLogout}>Log Out</button>
      </div> */}
      <div>
        {array ? <MapContainer array={array} /> : null}
      </div>
    </>
  );
};

export default Dashboard;