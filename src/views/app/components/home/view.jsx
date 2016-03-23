
import React, { PropTypes as PT } from 'react'
import { Link } from 'react-router/es6'
import { actions } from '../../update'

export const view = ({ data: model, children, dispatch, ...props }) => {
  return (
    <div {...props}>
      <h2>FrontPage</h2>
      <button onClick={() => dispatch(actions.getTodos())}>Fetch Todos</button>
      <Link to='/about'>About</Link>
      <ul>
        {/*model.todos.map((t) => <li key={t.id}>{t.title}</li>)*/}
      </ul>
      {children}
    </div>
  )
}

// view.childContextTypes = { data: PT.object }

view.propTypes = {
  children: PT.any,
  data: PT.shape({
    error: PT.string.isRequired,
    isPending: PT.bool.isRequired,
    todos: PT.arrayOf(PT.shape({
      userId: PT.number.isRequired,
      id: PT.number.isRequired,
      title: PT.string.isRequired,
      completed: PT.bool.isRequired
    })).isRequired
  })
}
