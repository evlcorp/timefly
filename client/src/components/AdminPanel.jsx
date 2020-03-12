import React, { useState, useEffect } from 'react'
import { AdminPanelSt } from './Styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const AdminPanel = ({ setColor }) => {
  useEffect(() => {
    setColor(window.location.pathname === '/calendar' ? '#F7FAFF' : 'white')
  }, [setColor])

  return (
    <AdminPanelSt>
      <div className="wrapper">
        <span className="mainText">Categories</span>
        <div className="categories">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
      <div className="wrapper">
        <span className="mainText">Activities</span>
        <div className="categories">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
    </AdminPanelSt>
  )
}

const CategoryItem = ({ category }) => {
  const [editMode, setEditMode] = useState(false)
  const [categoryName, setCategoryName] = useState('name')
  // const [categoryName, setCategoryName] = useState(category.name || 'name')

  return (
    <div className="item">
      {editMode ? (
        <input
          value={categoryName}
          onChange={e => {
            debugger
            setCategoryName(e.target.value)
          }}
          type="text"
        />
      ) : (
        <span>{categoryName}</span>
      )}
      <div className="buttons">
        <FontAwesomeIcon onClick={() => setEditMode(!editMode)} icon={faEdit} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  )
}

export default AdminPanel
