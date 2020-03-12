import React from 'react'
import { MainMobileSt } from '../Styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarry, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment'

const MainMobile = ({user}) => {
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
        <Block startDate={'Sat Mar 14 2020 17:00:00 GMT+0200 (Eastern European Standard Time)'} />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
    </MainMobileSt>
  )
}

const Block = (props) => {
  return (
    <div className="block">
      <FontAwesomeIcon icon={faPeopleCarry} />
      <FontAwesomeIcon className='secondIcon' icon={faEllipsisH} />
      <div className="info">
        <Moment format='HH:mm'>
          {props.startDate}
        </Moment>
        <span>Lorem, ipsum dolor.</span>
      </div>
    </div>
  )
}

export default MainMobile