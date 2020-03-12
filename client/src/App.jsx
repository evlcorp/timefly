import React, { useState, useEffect, useCallback } from "react"
import NavBar from "./components/NavBar"
import { Router, Route, Switch } from "react-router-dom"
import Profile from "./components/Profile"
import history from "./utils/history"
import PrivateRoute from './components/PrivateRoute'
import Main from './components/Main/Main'
import Footer from './components/Footer'
import ExternalApi from "./views/ExternalApi"
import { getItems, create } from './utils/functions'
// import { Auth0Context } from "./react-auth0-spa"
import { ModalSt } from './components/Styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons"
// import DatePicker from 'react-date-picker'
import CalendarPage from './components/Calendar'
// import TimeRangePicker from '@wojtekmaj/react-timerange-picker'
import AdminPanel from "./components/AdminPanel"
import DateTimePicker from 'react-datetime-picker'
import Moment from "react-moment"
import { useAuth0 } from "./react-auth0-spa"

function App() {
  // const [width, setWidth] = useState(700)
  const [modal, setModal] = useState({isActive: false})
  const [color, setColor] = useState('white')
  const {token} = useAuth0()

  const [events, setEvents] = useState(undefined)
  const [categories, setCategories] = useState(undefined)
  const [activities, setActivities] = useState(undefined)

  // window.onresize = () => {
  //   setWidth(window.innerWidth)
  // }

  const getData = () => {
    getItems(
      token,
      'dashboard/timeline',
      (res) => setEvents(res.data.data.timeline)
    )
    getItems(
      token,
      'categories/all',
      (res) => setCategories(res.data.data.categories)
    )
    getItems(
      token,
      'activities/all',
      (res) => setActivities(res.data.data.activities)
    )
  }
  useEffect(() => {
    if (token) {
      getItems(
        token,
        'dashboard/timeline',
        (res) => setEvents(res.data && res.data.data.timeline)
      )
      getItems(
        token,
        'categories/all',
        (res) => setCategories(res.data && res.data.data.categories)
      )
      getItems(
        token,
        'activities/all',
        (res) => setActivities(res.data && res.data.data.activities)
      )
    }
  }, [token])
  
  return (
    <div className="App">
      <Router history={history}>
        {
          modal.isActive && <Modal categories={categories} activities={activities} setModal={setModal} token={token} getData={() => getData()} modal={modal} />
        }
        <NavBar color={color} />
        <Switch>
          <Route path="/" exact>
            <Main setColor={setColor} events={events} />
          </Route>
          <Route path='/calendar' exact>
            <CalendarPage setColor={setColor} />
          </Route>
          <Route path='/admin'>
            <AdminPanel setColor={setColor} />
          </Route>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
        <Footer setModal={setModal} />
      </Router>
    </div>
  )
}

const Modal = ({setModal, getData, token, activities, categories}) => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(['10:00', '11:00'])
  const [tab, setTab] = useState('Category')
  const tabs = ['Category', 'Activity', 'Event']
  const [data, setData] = useState({})
  
  useEffect(() => {
    setData({})
  }, [tab])

  const createNewItem = () => {
    let endpoint
    switch(tab) {
      case 'Category':
        endpoint = 'categories/new'
        break
      case 'Activity':
        endpoint = 'activities/new'
        break
      case 'Event':
        endpoint = 'dashboard/timeline/new'
        break
      default: return
    }
    create(
      endpoint,
      data,
      token,
      (res) => {
        console.log(res.data)
        getData()
        setModal({isActive: false})
      }
    )
  }

  return (
    <ModalSt>
      <div className="wrapper">
        <div className="header">
          <span>Add</span>
          <FontAwesomeIcon onClick={() => setModal({isActive: false})} icon={faTimes} />
        </div>
        <div className="tabs">
          {tabs.map(e => (
            <div style={{backgroundColor: e === tab ? '#c6bcd5' : 'white'}} onClick={() => setTab(e)}>
              <span>{e}</span>
            </div>
          ))}
      </div>
      {
        tab === 'Category' && (
          <div className="addActivity">
            <span>
              Title
            </span>
            <input onChange={(e) => setData({...data, title: e.target.value})} type="text"/>
          </div>
        )
        // <div className="addEvent">
      }
      {
        tab === 'Activity' && (
          <div className="addActivity">
            <span>
              Title
            </span>
            <input onChange={(e) => setData({...data, title: e.target.value})} type="text"/>
            <span>Choose Category</span>
            {categories
              ? <select onChange={(e) => setData({...data, categories: [e.currentTarget.value]})}>
                {categories.map(el => (
                  <option key={el._id} value={el._id}>
                    {el.title}
                  </option>
                )) }
              </select>
              : 'U dont have categories'
            }
            
          </div>
        )
      }
      {
        tab === 'Event' && (
          <div className="addActivity">
            <span>
              Name
            </span>
            <input onChange={(e) => setData({...data, name: e.target.value})} type="text"/>
            <span>Choose Activity</span>
            {
              activities
              ? <select onChange={(e) => setData({...data, activity: e.currentTarget.value})}>
                {activities.map(el => (
                  <option key={el._id} value={el._id}>
                    {el.name}
                  </option>
                ))}
              </select>
              : 'U dont have activities'
            }
            
            <span className='columns'>Choose start date</span>
            <DateTimePicker value={data.startDate} onChange={(e) => setData({...data, startDate: e})} />
            <span className='columns'>Choose end date</span>
            <DateTimePicker value={data.endDate} onChange={(e) => setData({...data, endDate: e})}  />
          </div>
        )
      }
        <button onClick={() => createNewItem()} className='submit'>Add</button>
      </div>
    </ModalSt>
  )
}

export default App