import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../../molecules/Content/Content'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
require('./_style.scss')
const Navbar = () => {

  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="header">
        <Content />
        <div className="add-main">
          <div className="inputMain">
            <Input placeholder={"...search"} className={"a_input"} />
          </div>
          <div className="create-contact">
            <Link to="/contacts/add">
              <Button className={"a_button"} text={"Create Contact"} />
            </Link>
          </div>
          <div className="react-virtualised">
            <Link to="/lists">
              <Button className={"a_button"} text={"React-Virtualized"} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
