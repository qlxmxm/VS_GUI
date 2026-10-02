import React from 'react'
import { Link } from 'react-router-dom'

const NaviBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Home">홈</Link>
        </li>

        <li>
          <Link>회원관리</Link>
        </li>

        <li>
          <Link>회원목록</Link>
        </li>
      </ul>
      
    </div>
  )
}

export default NaviBar
