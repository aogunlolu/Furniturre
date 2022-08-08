import  React, {useState} from 'react'
import styled from "styled-components";
import FurnituresLogo from "../Assest/Furnichurrs-Logo.svg";
import {BsSearch, BsCartFill} from "react-icons/bs";
import {IoIosArrowDown} from "react-icons/io"
import {Link} from "react-router-dom";
import {BiMenuAltRight} from "react-icons/bi";
import { tablets, largeScreens} from '../responsive';
import Sidebar from './Sidebar';
import "rsuite/dist/rsuite.min.css";


const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);

  const showSiderBar = () => setSideBar(!sidebar);
  
  return (
    <>
      <Nav>
        <div>
          <Link to="/">
            <img className="logo" src={FurnituresLogo} alt="Logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/" className="nb-nav-list">
              HOME
            </Link>
          </li>
          <li className="nb-nav-list">
            SHOP <IoIosArrowDown className="arrow" />
          </li>
          <div  className="nb-nav-submenu">
            <ul className="submenu">
              <li>
                <Link to="/sofas" className="submenu-list">
                  Sofas
                </Link>
              </li>
              <li>
                <Link to="/sofas" className="submenu-list">
                  Chairs
                </Link>
              </li>
              <li>
                <Link to="/sofas" className="submenu-list">
                  Tables
                </Link>
              </li>
              <li>
                <Link to="/sofas" className="submenu-list">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link to="/sofas" className="submenu-list">
                  Office
                </Link>
              </li>
            </ul>
          </div>
          <li>
            <Link to="/collections" className="nb-nav-list">
              CUSTOMIZE
            </Link>
          </li>
          <li>
            <Link to="/journal" className="nb-nav-list">
              JOURNAL
            </Link>
          </li>
          <li>
            <Link to="/about" className="nb-nav-list">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nb-nav-list">
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="icon">
          <BiMenuAltRight onClick={showSiderBar} className="menu" />
          <BsSearch />
          <BsCartFill />
        </div>
        {sidebar && <Sidebar active={setSideBar} />}
      </Nav>
    </>
  );
}
const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 0px;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: white;
  width: 100%;
  /* height: 70px; */
  border-bottom: 0.5px solid rgba(4, 54, 61, 1);
  overflow: hidden;
  cursor: pointer;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    color: rgba(4, 54, 61, 1);

    ${tablets({ display: "none" })}
  }
  .nb-nav-list {
    padding: 0 30px;
    color: rgba(4, 54, 61, 1);
    font-family: Chivo;
    font-weight: 400;
    font-size: 15px;
    text-decoration: none;

    ${largeScreens({ padding: "0 20px" })}

    &:hover {
      transition: 1s ease-out;
      color: white;
      background-color: #010c0d;
      border-radius: 3px;
    }
  }
  .arrow {
    float: right;
    color: rgba(4, 54, 61, 1);
    align-items: center;
  }

  .nb-nav-list:active {
    color: #eb0808ea;
  }
  li {
    list-style: none;
  }

  .nb-nav-list:hover .submenu{
    display: block;
    margin-top: 15px;
    margin-left: -15px;
    transition: all 1s ease;
   
  }
  .nb-nav-submenu {
    position: relative;
    top: 100%;
    left: -100px;
    display: none;
  }
  .submenu {
    display: block;
    width: 150px;
    height: 100%;
    padding: 0 10px;
    align-items: center;
    position: absolute;
    z-index: 1;
  }

  .submenu-list {
    list-style: none;
    padding: 20px 30px;
    color: rgba(4, 54, 61, 1);
    font-family: Chivo;
    font-weight: 400;
    font-size: 15px;
    text-decoration: none;
    background-color: white;
    display: block;

    &:hover {
      background-color: #1d5d65;
      color: white;
      border-radius: 3px;
      transition: 1s ease-out;
    }
  }

  .menu {
    display: none;
    cursor: pointer;

    ${tablets({ display: "block" })}
  }

  .icon {
    display: flex;
    gap: 40px;
    color: rgba(4, 54, 61, 1);
    font-size: 20px;
  }
`;

export default Navbar