import React from 'react'
import { FooterMobileSt } from './Styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCalendarAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Footer = ({setModal}) => {

  return (
    <FooterMobile setModal={setModal} />
  )
}

const FooterMobile = ({setModal}) => {

  return (
    <FooterMobileSt>
      <div className="fill"></div>
      <Link className='home' to='/'>
        <FontAwesomeIcon color={'#CDD2DE'} icon={faHome} />
      </Link>
      <div className="plus">
        <FontAwesomeIcon onClick={() => setModal({isActive: true, type: 'addActivity'})} color={'white'} icon={faPlus} />
      </div>
      <Link className='calendar' to='/calendar' >
        <FontAwesomeIcon color={'#CDD2DE'} icon={faCalendarAlt} />
      </Link>
   </FooterMobileSt>
  )
}



export default Footer