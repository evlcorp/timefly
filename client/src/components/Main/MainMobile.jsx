import React from 'react'
import { MainMobileSt } from '../Styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarry, faEllipsisH, faTrash } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment'
import { remove } from '../../utils/functions';

const MainMobile = ({user, events, getContent, token}) => {
  const defData = {
    name: 'test',
    startDate: 'Sat Mar 14 2020 17:00:00 GMT+0200 (Eastern European Standard Time)'
  }
  return (
    <MainMobileSt>
      <span className='mainText' >
        <span className='hello'>
          Hello Steven,
        </span>
        <br/>
        Your Dashboard
      </span>
      <div className="blocks">
        <Block getContent={getContent} event={defData} />
        {events && events.map(e => (
          <Block token={token} event={e}/>
        ))}
      </div>
    </MainMobileSt>
  )
}

const Block = ({event, getContent, token}) => {
  const deleteItem = () => {
    // remove(
    //   'user/dashboard/timeline/remove/',
    //   event._id,
    //   token,
    //   () => {
    //     getContent()
    //   }
    // )
  }
  return (
    <div className="block">
      <FontAwesomeIcon icon={faPeopleCarry} />
      <FontAwesomeIcon onClick={() => deleteItem()} className='secondIcon' icon={faTrash} />
      <div className="info">
        <Moment format='HH:mm'>
          {event.startDate}
        </Moment>
        <span>{event.name}</span>
      </div>
    </div>
  )
}

export default MainMobile