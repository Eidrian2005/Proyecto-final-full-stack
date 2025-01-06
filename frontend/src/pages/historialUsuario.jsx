import React from 'react'
import UserHistorial from '../components/userhistorial'
import Header from '../components/header';
import Sidebar from '../components/sidebar';

export default function historialUsuario() {
  return (
    <>
    <Header />
    <Sidebar/>
    <UserHistorial/>
    </>
  )
}
