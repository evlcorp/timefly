import React from "react"
import { useAuth0 } from "../react-auth0-spa"
import { Link } from "react-router-dom"
import { HeaderMobileSt } from './Styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, faUser, faChartPie } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({width, color}) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <HeaderMobileSt style={{backgroundColor: color}}>
      <FontAwesomeIcon color={'#CDD2DE'} icon={faUser} />
      <div className='middel'>
        <FontAwesomeIcon color={'#CDD2DE'} icon={faChartPie} />
      </div>
      <div className='otherAction'>
        {!isAuthenticated ?(
          <a onClick={() => loginWithRedirect({})}>Log in</a>
        ) : (
          <a onClick={() => logout()}>Log out</a>
        )
        }
        {/* <FontAwesomeIcon color={'#CDD2DE'} icon={faEllipsisH} /> */}
      </div>
    </HeaderMobileSt>
    // <HeaderMobile color={color} isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect} logout={logout} />
  )
}
 
// const HeaderDesktop = ({ isAuthenticated, loginWithRedirect, logout }) => {
//   return (
//     <HeaderSt>
//       <img src="https://avatars1.githubusercontent.com/u/62013224?s=400&u=fbe80b81fdeb706dad1623a6e644385c6dd211c4&v=4" alt='logo'/>
//       <img className='userPhoto' src='https://avatars1.githubusercontent.com/u/62013224?s=400&u=fbe80b81fdeb706dad1623a6e644385c6dd211c4&v=4' alt=""/>
      
      // {!isAuthenticated && (
      //   <a onClick={() => loginWithRedirect({})}>Log in</a>
      // )}
      
      // {isAuthenticated && (
      //   <div className='menu'>
      //     <Link to="/">Home</Link>&nbsp;
      //     {/* <Link to="/profile">Profile</Link> */}
      //     <Link to="/external-api">External API</Link>
      //     <Link onClick={() => logout()}>Log out</Link>
      //   </div>
      // )}
//     </HeaderSt>
//   )
// }

// const HeaderMobile = ({ isAuthenticated, loginWithRedirect, logout, color }) => {
//   return (
//     <HeaderMobileSt style={{backgroundColor: color}}>
//       <FontAwesomeIcon color={'#CDD2DE'} icon={faUser} />
//       <div className='middel'>
//         <FontAwesomeIcon color={'#CDD2DE'} icon={faChartPie} />
//       </div>
//       <div className='otherAction'>
//         <FontAwesomeIcon color={'#CDD2DE'} icon={faEllipsisH} />
//       </div>
//     </HeaderMobileSt>
//   )
// }

export default NavBar