import React from 'react'
import JasmineSet from "../Assest/jasmineset.jpg";
import JasperCouch from "../Assest/Jaspher-Couch.jpg";
import LuxuriateSet from "../Assest/Luxuriate-Set.jpg";
import Bonny from "../Assest/Bonny.jpg";
import TristianCollection from "../Assest/Tristian.jpg";
import styled from "styled-components"

const url ="https://images.pexels.com/photos/6301174/pexels-photo-6301174.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"

const Cards = [
  
  {id: 6, image: "https://cdn.pixabay.com/photo/2015/12/05/23/45/sofa-1078931_1280.jpg", tittle: "Jacky", amount: "$800"},
  {id: 8, image: `${JasperCouch}`, tittle: "Jaspher Couch", amount: "$1,000"},
  {id: 11, image: `${TristianCollection}`, tittle: "Tristian Collection", amount: "$1,089"}

];

function Cart() {
  

  return (
    <>
    <Section>
      <div className='shop-banner'>
        <img src={url} alt="" />
        <div className='shopping-link'>
          <h2>Sofas</h2>
          <ul>
            <li>Home</li>
            <li>Sofas</li>
          </ul>
        </div>      
      </div> 
      <Main>  
      <div className='shop-list'>
        <div>
          <p>12 Products found in <strong>Sofas</strong></p>
        </div>
        <div className='shop-features'>
          <p>Sort by</p>
          <button>Featured</button>
        </div>
      </div>
      <div className='wrapper'>    
    {Cards.map((props) => {
            return(
                  <Grid key={props.id}>
                  <img src={props.image} />
                  <div>
                    <p>{props.tittle}</p>
                    <h4>{props.amount}</h4> 
                  </div>               
                </Grid>                    
            )
          })}
  </div>
    </Main> 
    </Section>
    </>
  )
}

const Section = styled.div`
.shop-banner {
  position: relative;
}
.shop-banner img{
      background-size: cover;
      width: 100%;
      height: 320px;
      overflow: hidden; 
      margin-top: 90px;
 }
 .shopping-link{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: black;
      text-align: center;

    }

  
    ul{
      display: flex;
      gap: 25px;
    }
    li{
      list-style: none;
      
    }

`;
const Main = styled.div`
  padding: 90px 104px;

  .shop-list{
      display: flex;
      justify-content: space-between;
      
    }
    .shop-features{
      display: flex;
      gap: 20px;
    }
`

const Grid = styled.div`
  
  font-family: Chivo;
  color:rgba(74, 82, 83, 1);
  font-weight: 400;
  
;
img{
  width: 384px;
  height: 320px;
  overflow: hidden;
  cursor: pointer;
}
h4{
    font-size: 18px;    
}
p{
  font-size: 22px;
}
 
`;
export default Cart