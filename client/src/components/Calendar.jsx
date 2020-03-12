import React from 'react'
import { CalendarSt } from './Styled'
import { useState, useEffect } from 'react'
import Calendar from 'react-calendar'

const CalendarPage = ({setColor}) => {
  const [date, setDate] = useState([new Date()])
  
  useEffect(() => {
    setColor(window.location.pathname === '/calendar' ? '#F7FAFF' : 'white')
  }, [setColor])

  return (
    <CalendarSt>
      <div className="calendar">
        <Calendar value={date} onChange={currDate => setDate(currDate)} />
      </div>
      <div className="items">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </CalendarSt>
  )
}

const Item = () => {

  return (
    <div className="item">
      <div className="date">
        <span className='first-color'>Apr</span>
        <span className='second-color bold'>17</span>
      </div>
      <div className="event">
        <span className="title second-color">
          Desing Review
        </span>
        <span className="time first-color">
          7:00 AM to 8:00 AM
        </span>
      </div>
    </div>
  )
}

export default CalendarPage