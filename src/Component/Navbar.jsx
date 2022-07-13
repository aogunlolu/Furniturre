import  React, {useState} from 'react'
import styled from "styled-components";
import FurnituresLogo from "../Assest/Furnichurrs-Logo.svg";
import {BsSearch, BsCartFill} from "react-icons/bs";
import DownArrow from "../Assest/down-arrow.svg"; 
import {Link} from "react-router-dom";
import {BiMenuAltRight} from "react-icons/bi";
import { tablets, largeScreens} from '../responsive';
import Sidebar from './Sidebar';



const Navbar = () => {

  const [sidebar, setSideBar] = useState(false);

  const showSiderBar = () => setSideBar(!sidebar);
  
  return (
    <>
        <Nav>
          <div>
            <Link to='/' ><img className='logo' src={FurnituresLogo} alt="Logo" /></Link>            
          </div>  
            <ul className='relate'>
              <Link to='/' className='nav-list'>HOME</Link >
              <div className='shop-drop'>
              <ul>SHOP<img src={DownArrow} alt="" />
                <li className='dropdown'>
                  <Link to='/sofas' className='dropdown-list'>Sofas</Link >
                  <Link to='/sofas' className='dropdown-list'>Chairs</Link >
                  <Link to='/sofas' className='dropdown-list'>Tables</Link >
                  <Link to='/sofas' className='dropdown-list'>Bedroom</Link >
                  <Link to='/sofas' className='dropdown-list'>Office</Link >
                </li>
              </ul>
              </div>
                <Link to='/collections' className='nav-list'>CUSTOMIZE</Link >
                <Link to='/journal' className='nav-list'>JOURNAL</Link >
                <Link to='/about' className='nav-list'>ABOUT</Link >
                <Link to='/contact' className='nav-list'>CONTACT</Link>
            </ul>
              <div className='menu'> 
                <BiMenuAltRight style={{  
                  position: "fixed",
                  cursor: "pointer"
                }} 
                onClick={showSiderBar}/>
              </div>
              <div className='icon'>
                <BsSearch className='icons'/>
                <BsCartFill className='icons'/>
              </div>
              {sidebar && <Sidebar active={setSideBar} />}
        </Nav>
    </>
  )
}
const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px 0px;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color:white;
    width: 100%;
    border-bottom: 0.5px solid rgba(4, 54, 61, 1);
    overflow: hidden;
    cursor: pointer;


  ul{
    display: flex;
    align-items: center;
    color: rgba(4, 54, 61, 1);
    

    ${tablets({display:"none"})}
    
  }
.nav-list{
  list-style: none;
  padding: 0 30px;
  color: rgba(4, 54, 61, 1);
  font-family: Chivo;
  font-weight: 400;
  font-size: 15px;
  text-decoration: none;

  ${largeScreens({padding:"0 20px"})}
  
}
.nav-list:hover{
  transition: 1s ease-out;
  color: white;
  background-color:#010c0d ;
  border-radius: 3px;
}

.li:active{
 color: #ff0000ea;

}
.menu{
    display: none;
    color: rgba(4, 54, 61, 1);
    font-size: 25px;
    cursor: pointer;

    ${tablets({display:"block"})}
  }
 

  .icon{
    display: flex;
    gap: 40px;
    color: rgba(4, 54, 61, 1);
    font-size: 20px;
    align-items: center;
      
  }

  .shop-drop ul{
    position: relative;
    width: 100%;
    padding: 0 10px;
  }

  .shop-drop:hover{
  transition: 1s ease-out;
  color: white;
  background-color:#010c0d ;
  border-radius: 3px;
  
}
  .shop-drop img{
    padding-left: 10px;
    
  }

  .shop-drop:hover li .dropdown{
    display: grid;
    top:35px;
    transition: all 1s ease;
    width: 100%;
  }
 

 li{
  list-style: none;
  padding: 0 30px;
  color: rgba(4, 54, 61, 1);
  font-family: Chivo;
  font-weight: 400;
  font-size: 15px;
  text-decoration: none;
  
 
}
.dropdown{
  display: none;
  position: absolute;
  min-width: 150px;
  height: 100%;
  z-index: 100;
  align-items: center;
  background-color: white;
  
}

.dropdown-list{
  list-style: none;
  padding: 20px 30px;
  color: rgba(4, 54, 61, 1);
  font-family: Chivo;
  font-weight: 400;
  font-size: 15px;
  text-decoration: none;
  background-color: white;
 
  &:hover{
  background-color:#1d5d65 ;
  color: white;
  border-radius: 3px;
  transition: 1s ease-out;
  
}

}
 
  `;

export default Navbar