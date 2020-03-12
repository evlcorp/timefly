import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { getCategories } from './static/functions'
import Main from './components/Main'
import MainMobile from './components/MainMobile'
import Footer from './components/Footer'
import history from './utils/history'
import { Router } from 'react-router-dom';

function App() {
  const [categories, setCategories] = useState({})

  const [width, setWidth] = useState(window.innerWidth)
  
  window.onresize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    getCategories(
      res => {
        setCategories(res.data)
      }
    )
  }, [])
  
  return (
    <Router history={history}>
      <div>
        <Header />
        {width > 768 ? <Main categories={categories} /> : <MainMobile  categories={categories} />}
        <Footer />
      </div>
    </Router>
  )
}

export default App;
