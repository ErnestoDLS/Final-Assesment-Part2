import React from 'react'
import  NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>My Boards</h1>
          <ul className="board" role="nav">
            <li className="board__li"><NavLink to="board">JS CHAT</NavLink></li>
          </ul>
          {this.props.children}
      </div>
    )
  }
})
