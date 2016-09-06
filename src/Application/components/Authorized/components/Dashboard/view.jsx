
import React, { PropTypes as PT } from 'react'
import { Link } from 'react-router'
import { actions } from './update'

export const view = ({ model, children, dispatch }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => dispatch(actions.modify({ forename: 'Hans', lastname: 'Jürgen' }))}>Change Name</button>
      <Link to='/authorized/profile'>Profile</Link>
      {children}
    </div>
  )
}

view.propTypes = {
  children: PT.any,
  model: PT.object
}
