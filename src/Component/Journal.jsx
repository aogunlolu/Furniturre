import React from 'react';
import styled from "styled-components";
import Office from "../Assest/office.jpeg";
import Frame36 from "../Assest/Frame 36.jpg";
import Frame37 from "../Assest/Frame 37.jpg";
import Sofas from "../Assest/sofas.jpg";
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {BsPlayCircle} from "react-icons/bs";
// import { mobile, mobile414px } from '../responsive';

const motherPlant = "https://news.fullerton.edu/app/uploads/2021/04/Gardening-Resilience-800x500.jpg"

const Card =[
    {id: 1,tittle: "Dos & Don’ts of Furniture Shopping", date:"December 5, 2020" ,image: `${Frame36}`, details: "Adipiscing eu pharetra in ut elit leo. Nisl eget aliquet feugiat ut. Cursus eu mattis facilisis aliquam amet vulputate in id commodo. Sodales faucibus."},
    {id: 2,tittle: "5 Useful Tips for Corporate Furniture Shopping",date:"November 25, 2020", image: `${Frame37}`, details: "Sollicitudin viverra et urna sit sapien mi. Nulla nunc non sed donec lacus. Condimentum massa egestas faucibus lacinia" },
    {id: 3,tittle: "Dos & Don’ts of Furniture Shopping", date:"December 5, 2020" ,image: `${Office}`, details: "Adipiscing eu pharetra in ut elit leo. Nisl eget aliquet feugiat ut. Cursus eu mattis facilisis aliquam amet vulputate in id commodo. Sodales faucibus."},
    {id: 4,tittle: "5 Useful Tips for Corporate Furniture Shopping",date:"November 25, 2020", image: `${Sofas}`, details: "Sollicitudin viverra et urna sit sapien mi. Nulla nunc non sed donec lacus. Condimentum massa egestas faucibus lacinia" }   
]

const Journal = () => {
  return (
    <>
    <Section>
        <div>
            <h3>Journal</h3>
        </div>
        <div>
        <Splide options={{
          perPage: 2,
          arrows: false,
          pagination: true,
          drag: "free",
          gap: "40px"
          
          
          
        }}>
          {Card.map((props) => {
            return(
              <SplideSlide key={props.id}>
                <Main>
                    <h4>{props.tittle}</h4>
                    <p>{props.date}</p>
                    <img src={props.image} alt='' />
                    <p>{props.details}</p>
                </Main>       
              </SplideSlide> 
            )
          })}
      </Splide>
        </div>
        <div >
          <h2>Taking Care of Mother Earth</h2>
          <p>We are constantly committed to sustainability and forest conservation. We started the “Plant a <br/> Tree” initiative to promote our values in ethical furniture making.</p>
          <div className='mother-plant'>
            <img src={motherPlant} alt="" />
            <div className='bsplay'>
                <BsPlayCircle/>
            </div> 
          </div>
          
        </div>
    </Section>  
    </>
  )
}
const Section = styled.div`
  padding: 40px 103px;
  text-align: center;
  color: rgba(4, 54, 61, 1);
  border-top: 0.5px solid rgba(4, 54, 61, 1);
  border-bottom: 0.5px solid rgba(4, 54, 61, 1);
  margin-top: 70px;

  

  h3{
    font-family: 'Vollkorn';
    font-weight: 600;
    font-size: 40px;
    line-height: 25px;

  }
 

h2{
    padding-top: 124px;
    font-family: 'Vollkorn';
    font-weight: 500;
    font-size: 40px;


}
.mother-plant{
    position: relative;
}

.mother-plant img{
    width: 100%;
    height: 480px;
    padding-top: 32px;
   
    
}
.bsplay{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 110px;
color: white;

}

`
const Main = styled.div`


 p{
    padding: 0 58px;
    font-family: 'Chivo';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
}
.img{
 
}
    
`

export default Journal