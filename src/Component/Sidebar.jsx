import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import {GiCancel} from "react-icons/gi";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import { tablets} from '../responsive';

const Sidebar = ({active}) => {
    const closeSidebar = () => {
        active(false);
      };
  return (
    <>
    <Menu Sidebar={active}> 
        <GiCancel 
        style={{
            fontSize: "43px",
          }}
        onClick={closeSidebar}/>
        <Container>
            <Link to='/' className='nav-list' onClick={closeSidebar}>HOME</Link >
            <li className='nav-list'> 
            <div className='shop'>
                <p >SHOP</p>
                <MdOutlineKeyboardArrowDown/>
            </div>    
            <ul>
                <li className='dropdown'>
                    <Link to='/sofas' className='dropdown-list'>Sofas</Link >
                    <Link to='/sofas' className='dropdown-list'>Chairs</Link >
                    <Link to='/sofas' className='dropdown-list'>Tables</Link >
                    <Link to='/sofas' className='dropdown-list'>Bedroom</Link >
                    <Link to='/sofas' className='dropdown-list'>Office</Link >
                </li>
            </ul >
            </li>  
              <Link to='/collections' className='nav-list' onClick={closeSidebar}>CUSTOMIZE</Link >
              <Link to='/journal' className='nav-list' onClick={closeSidebar}>JOURNAL</Link >
              <Link to='/about' className='nav-list' onClick={closeSidebar}>ABOUT</Link >
              <Link to='/contact' className='nav-list' onClick={closeSidebar}>CONTACT</Link>
        </Container>
    </Menu>
    </>
  )
}
const Menu = styled.div`
/* width: 50%;
height: 100%;
background-color: rgba(4, 54, 61, 1);
color: white;
padding: 40px;
position: fixed;
top: 0;
right: 0;
z-index: 100;
 */



padding: 40px;
background-color: rgba(4, 54, 61, 1);
color: white;
position: fixed;
z-index: 99;
top: 0;
right: 0;
width: 50%;
height: 100%;

animation: showSidebar 1s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }


`
const Container = styled.div`
    display:block;
    justify-content: center;
    line-height: 3;
    color: white;
    text-align: center;
    width: 100%;
    
 

 .nav-list{
    text-decoration: none;
    color: white;
    padding: 0 30px;
    position:relative;
    display: grid;
 }

 .nav-list:hover{
  background-color:#1d5d65 ;
  color: white;
  border-radius: 4px;
  transition: 1s ease-out;
  opacity: 7;
}

 li{
    
    list-style: none;
 }
.dropdown{
    line-height: 2;
    position: static;
    
    ${tablets({display:"block"})}
    
}
.dropdown-list{
    text-decoration: none;
    color: white;
    
    ${tablets({display:"block"})}
    
}
.dropdown .dropdown-list{
   display :block ;
   width: 100%;

   ${tablets({display:"block"})}
}

.shop{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    
}


`
export default Sidebar