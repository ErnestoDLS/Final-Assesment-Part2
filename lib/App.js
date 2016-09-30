import React from 'react'
import  NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>My Boards</h1>
          <ul className="board" role="nav">JS Chat

          </ul>
          {this.props.children}
      </div>
    )
  }
})
