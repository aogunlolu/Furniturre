import React from 'react'
import styled from "styled-components";
import {FaPinterest, FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"
// import { mobile } from '../responsive';
// import { mobile414px } from '../responsive';

function Footer() {
  return (
    <>
    <Footers>
        <div>
            <h4>Information</h4>
            <ul>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Showroom</li>
            </ul>
        </div>
        <div>
            <h4>Policies</h4>
            <ul>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Warranty</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <h4>Follow Us</h4>
        <ul>
            <div className='icon'>
            <li className='icons'><FaFacebookF/></li> 
            <li>Facebook</li>
            </div>
            <div className='icon'>
            <li className='icons'><FaInstagram/></li>
            <li>Instagram</li>
            </div>
            <div className='icon'>
            <li className='icons'><FaTwitter/></li>
            <li>Twitter</li>
            </div>
            <div className='icon'>
            <li className='icons'><FaPinterest/></li>
            <li>Pinterest</li>
            </div>   
        </ul>
        </div>
        <div>
            <ul>
                <li className='copyright'>©2020, Furnichurrs</li>
                <li className='copyright'>All rights reserved</li>
            </ul>
        </div>
    </Footers>
    </>
  )
}
const Footers = styled.div`
  display:flex ;
  justify-content: space-between;
  background-color: rgba(4, 54, 61, 1);
  padding: 40px 104px;
  margin-top: 80px;
  height: 312px;
  

  
  
  h4{
    font-family: 'Chivo';
    font-weight: 400;
    font-size: 20px;
    color: rgba(219, 124, 10, 1);
    line-height: 0;
  

}

li{
    list-style: none;
    font-family: 'Chivo';
    font-weight: 400;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    opacity: 0.7;
    line-height: 2.5;
    
    
}
.icon{
    display: flex;
    gap: 10px;   
}

.icons{
    color: white;
    opacity: 1;
    font-size: 20px;
   
    
}
.copyright{
    opacity: 1;
    color: white;
    line-height: 32px;
    
   
}
`

export default Footer