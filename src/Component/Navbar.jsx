import React from 'react'
import styled from "styled-components";
import FurnituresLogo from "../Assest/Furnichurrs-Logo.svg";
import Cart from "../Assest/cart-icon.svg";
import {BsSearch} from "react-icons/bs";
import DownArrow from "../Assest/down-arrow.svg"; 
import {Link} from "react-router-dom";
import {BiMenuAltRight} from "react-icons/bi";
import { mobile } from '../responsive';

const Navbar = () => {
  return (
    <>
        <Nav>
          <div>
            <Link to='/' ><img className='search-icon' src={FurnituresLogo} alt="Logo" /></Link>
            
          </div>  
            <ul>
              <Link to='/' className='li'>HOME</Link >
              <li>SHOP<img className='shop-drop' src={DownArrow} alt="" /><ul className='dropdown'>
              <Link to='/sofas' className='li'>Sofas</Link >
              <Link to='/sofas' className='li'>Chairs</Link >
              <Link to='/sofas' className='li'>Tables</Link >
              <Link to='/sofas' className='li'>Bedroom</Link >
              <Link to='/sofas' className='li'>Office</Link >
              </ul>
              </li>
              <Link to='/collections' className='li'>CUSTOMIZE</Link >
              <Link to='/journal' className='li'>JOURNAL</Link >
              <Link to='/about' className='li'>ABOUT</Link >
              <Link to='/contact' className='li'>CONTACT</Link>
            </ul>
            <div className='menu'> 
              <BiMenuAltRight/>
            </div>
            <div className='icons'>  
              <div className='bs-search'>
                <BsSearch/>
              </div> 
              <div>
              <img className='search-icon' src={Cart} alt="cart-icon" />
              </div> 
            </div>   
        </Nav>
    </>
  )
}
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color:white;
    width: 100%;
    border-bottom: 0.5px solid rgba(4, 54, 61, 1);

    ${mobile({padding: "20px 10px"})}

  ul{
    display: flex;
    ${mobile({display: "none"})}
  }
.li{
  list-style: none;
  padding: 0 30px;
  color: rgba(4, 54, 61, 1);
  font-family: Chivo;
  font-weight: 400;
  font-size: 15px;
  text-decoration: none;
  
  
}
.li:active{
 color: #ff0000ea;

}
  .icons{
    display: flex;

    
  }

  .search-icon{
    padding: 12px 15px 0 15px;
    ${mobile({fontSize: "5px"})}
  }
  

  .bs-search{
    padding: 12px 15px 0 15px;
    color: rgba(4, 54, 61, 1);
    font-size: 25px;

  }

  .shop-drop{
    padding-left: 10px;
  }

  li:hover .dropdown > .li{
    display: block;
    top: 0;
  }


 li{
  list-style: none;
  padding: 0 30px;
  color: rgba(4, 54, 61, 1);
  font-family: Chivo;
  font-weight: 400;
  font-size: 15px;
  text-decoration: none;
  position: relative;
  

}

  ul .dropdown{
    display: block;
    flex-direction: column;
    position: absolute;
    top: 100%;
    background-color: white;
    padding: 10px 0;
  }
  .dropdown .li{
  list-style: none;
  color: rgba(4, 54, 61, 1);
  font-family: Chivo;
  font-weight: 400;
  font-size: 15px;
  text-decoration: none;
  padding: 10px 20px;
  display: none;
  width: 100%;


}
  .menu{
    display: none;
    padding: 12px 15px 0 15px;
    color: rgba(4, 54, 61, 1);
    font-size: 25px;
  }
  ${mobile({display: "flex"})}
  `;

export default Navbar