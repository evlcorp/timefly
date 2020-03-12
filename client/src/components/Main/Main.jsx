import React from 'react'
import MainMobile from './MainMobile'
import { useEffect } from 'react';

const Main = ({setColor, events, getContent, token}) => {
  useEffect(() => {
    setColor(window.location.pathname === '/calendar' ? '#F7FAFF' : 'white')
  }, [setColor])
  return (
    <MainMobile token={token} events={events} getContent={getContent} />
  )
}

export default Main