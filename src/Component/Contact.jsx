import React from 'react'
import styled from "styled-components";
import ContactLayer from "../Assest/Frame 3.jpg";
import { mobile } from '../responsive';


const Contact = () => {
  return (
    <>
    <Section>
      <div className='contact-layer'>
        <img src={ContactLayer} alt="" />
      </div>
    <div className='contact-form'>
      <h4>Newsletter</h4>
      <p>Sign up to receive 10% off your first purcahse</p>
      <form>
          <input type="text"  placeholder='Name'/>
          <input type="email" placeholder='Email address' />
          <button>SIGN UP</button>
      </form>
    </div>
    </Section>
    </>
  )
}
const Section = styled.div`
 .contact-layer img{
  width: 100%;
  height: 540px;
  margin: 90px 0 120px 0;

  ${mobile({height: "268px", marginBottom: "80px"})}
;
 } 
h4{
  font-family: 'Vollkorn';
  font-weight: 600;
  font-size: 32px;
  color: rgba(4, 54, 61, 1);
  
  ${mobile({fontSize: "20px"})}
}
p{
  font-family: 'Chivo';
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color:rgba(74, 82, 83, 1);
  padding-bottom: 16px;

  ${mobile({fontSize: "14px", lineHeight: "15px"})}
}
 .contact-form{
   background-color: rgba(234, 240, 238, 1);
   margin:0 104px ;
   height: 464px;
   text-align: center;
   padding: 40px 0;
   ${mobile({height: "368px", margin: "0 50px", padding: "20px 0"})}
   
 }
 form{
   display: grid;
   flex-direction: column;
   width: 400px;
   height: 56px; 
   margin-left: 416px;

   ${mobile({marginLeft: "10px", height: "20px", width: "270px"})}
 }
 input{
  padding: 16px;
  margin-bottom: 24px;
  background-color: white;
  border: none;
  color: rgba(74, 82, 83, 0.7);
  
  ${mobile({padding: "14px"})}
 }
  button{
      padding: 12px 20px;
      background-color: rgba(219, 124, 10, 1);
      box-shadow: 0px 8px 20px -1px rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      color: white;
      border: none;
      font-family: 'Chivo';
      font-weight: 400;
      font-size: 16px;
      margin-top: 8px;
     
    }
`
export default Contact