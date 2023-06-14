import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import MyAppointment from '../MyAppointment/MyAppointment';

const Dashboard = () => {
  return (
    <MyAppointment></MyAppointment>
  );
};

export default Dashboard;