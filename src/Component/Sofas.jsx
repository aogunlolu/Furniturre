import React from 'react'
import JasmineSet from "../Assest/jasmineset.jpg";
import JasperCouch from "../Assest/Jaspher-Couch.jpg";
import LuxuriateSet from "../Assest/Luxuriate-Set.jpg";
import Bonny from "../Assest/Bonny.jpg";
import TristianCollection from "../Assest/Tristian.jpg";
import styled from "styled-components"

const url ="https://images.pexels.com/photos/6301174/pexels-photo-6301174.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"

const Cards = [
  {id: 1, image: "https://cdn.shopify.com/s/files/1/2726/8078/products/can2seater_1024x1024.jpg?v=1515718970", tittle: "Chichi Sofa", amount: "$980"},
  {id: 2, image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", tittle: "Polka Sofa", amount: "$920"},
  {id: 3, image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", tittle: "CH-Couch", amount: "$800"},
  {id: 4, image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", tittle: "Can Seater Sofa", amount: "$1,889"},
  {id: 5, image: `${JasmineSet}`, tittle: "The Jasmine Set ", amount: "$1,320"},
  {id: 6, image: "https://cdn.pixabay.com/photo/2015/12/05/23/45/sofa-1078931_1280.jpg", tittle: "Jacky", amount: "$800"},
  {id: 7, image: "https://images.unsplash.com/photo-1519961655809-34fa156820ff?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774", tittle: "Rounding COllection ", amount: "$1,400"},
  {id: 8, image: `${JasperCouch}`, tittle: "Jaspher Couch", amount: "$1,000"},
  {id: 9, image: `${LuxuriateSet}`, tittle: "Luxuriate Set", amount: "$800"},
  {id: 10, image: `${Bonny}`, tittle: "Bonny", amount: "$1,889"},
  {id: 11, image: `${TristianCollection}`, tittle: "Tristian Collection", amount: "$1,089"},
  {id: 12, image: "https://images.pexels.com/photos/6301174/pexels-photo-6301174.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", tittle: "The Alpha Set ", amount: "$1,520"},

];

function Sofas() {
  

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
    h2{
      font-family: Vollkorn;
      font-weight: 600;
      font-size: 40px;
    }

  
    ul{
      display: flex;
      gap: 25px;
    }
    li{
      list-style: none;
      font-size: 15px;
      
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
  background-color: white;
  transition: all 0.5s;
  
  :hover{
    box-shadow:15px 15px 10px 5px silver;
  }
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
export default Sofas