import React from 'react'
import MainMobile from './MainMobile'
import { useEffect } from 'react';

const Main = ({items, setColor}) => {
  useEffect(() => {
    setColor(window.location.pathname === '/calendar' ? '#F7FAFF' : 'white')
  }, [setColor])
  return (
    <MainMobile items={items} />
  )
}

export default Main