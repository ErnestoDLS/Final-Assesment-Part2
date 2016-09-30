import React from 'react'
import { Link } from 'react-router'
import Board from './Board'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>My Boards</h1>
          <div className="board">JS Chat</div>
          <div>
              <Board/>
          </div>
      </div>
    )
  }
})
