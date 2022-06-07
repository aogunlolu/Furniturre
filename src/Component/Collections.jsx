import React from 'react'
import styled from 'styled-components';
import KariShea from "../Assest/KariShea.jpg";
import Office from "../Assest/office.jpeg";
import { mobile } from '../responsive';
  
const OfficeFurniture ="https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg";

// const KariShea ="https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"

const Card =[
    {id: 1, image: `${Office}`, tittle: "Office"},
    {id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Angelo_Pantazis_2017_%28Unsplash%29.jpg", tittle: "Sofas"},
    
];
const Cards =[
  {id: 1, image: "https://cdn.mos.cms.futurecdn.net/4mQqVeo2z6z2wubJbMMCae-1280-80.jpg.webp", tittle: "Tables"},
  {id: 2, image: "https://images.pexels.com/photos/4273433/pexels-photo-4273433.jpeg", tittle: "Chairs"},
  {id: 3, image: "https://images.pexels.com/photos/3555619/pexels-photo-3555619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", tittle: "Bedroom"}
];

function Collections() {
  return (
    <>
    <Section>
      <div>
        <h2>Collections</h2>
      </div>
      <div className='wrapper'data-aos="fade-left">    
    {Card.map((props) => {
            return(
                  <Grid key={props.id}>
                  <img src={props.image} />
                  <h3>{props.tittle}</h3>              
                </Grid>                    
            )
          })}
      </div> 
      <div className='wrappers'data-aos="fade-right">    
    {Cards.map((props) => {
            return(
                  <Grids key={props.id}>
                  <img src={props.image} />
                  <h3>{props.tittle}</h3>              
                </Grids>                    
            )
          })}
      </div> 
      </Section> 
      <Main>
        <div className='office-desk'>
          <div className='officedesk' >
              <img src={OfficeFurniture} alt="office-desk" />
          </div>
          <div className='officedesk-details' data-aos="fade-up">
            <h3>Comfort = Productivity</h3>
            <p>Studies show that comfortable employees
              are happier and <br /> more efficient at work.</p>
            <button>EXPLORE OUR OFFICE COLLECTION</button>
          </div>
        </div>
        <div className='single-chair' >
          <div data-aos="fade-right">
            <img src={KariShea} alt="singleChair"/>
          </div>
          <div className='singleChair-details'data-aos="fade-left">
            <h4>Turn your ideas into reality</h4>
            <p>Need custom-made furniture tailored to your specifications? Look no further as we are here to help you! We have a great team of craftsmen skilled in the art of furniture making. </p>
            <p>Congue augue sapien vel fusce fermentum volutpat. Sit morbi porttitor aliquam ultricies ipsum vitae at arcu, lectus. Etiam leo enim odio amet ac nec sem. Egestas lorem vulputate dignissim mi, condimentum. Morbi est orci hendrerit.</p>
            <button>GET STARTED</button>
          </div>
        </div>
      </Main>
      


    </>
  )
}

const Section = styled.div`
  padding: 90px 104px;

  ${mobile({padding: "20px 50px"})}
  h2{
    text-align: center;
    padding-bottom: 164px 0 64px 0;
    color: rgba(4, 54, 61, 1);
    font-family: 'Vollkorn';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    ${mobile({fontSize: "25px"})}
  }
`
const Grid = styled.div`  
    font-family: Chivo;
    color:rgba(74, 82, 83, 1);
    font-weight: 400;
    line-height: 0;
    position: relative;
    transition: all 0.5s;
    :hover{
    box-shadow:15px 15px 10px 5px silver;
  }
;
  img{
    width: 596px;
    height: 384px;
    overflow: hidden;
    cursor: pointer;
    
    ${mobile({width: "290px", height: "240px"})}
  }

  h3{
    font-size: 36px;  
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    ${mobile({fontSize: "20px"})}
  }
`
const Grids = styled.div`  
    font-family: Chivo;
    color:rgba(74, 82, 83, 1);
    font-weight: 400;
    line-height: 0;
    position: relative;
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
    ${mobile({width: "290px", height: "240px"})}
  }
  h3{
    font-size: 36px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    ${mobile({fontSize: "20px"})}
  }
`
const Main = styled.div`
.office-desk{
  position: relative;
}
  .officedesk img{
  width: 100%;
  height: 540px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  
  ${mobile({height: "300px"})}
}

.officedesk-details{
  position: absolute;
  top: 146px;
  left: 104px;
  color: #6d7711df;
  line-height: 30px;
  ${mobile({top: "70px", left: "20px" })}

}

.officedesk-details h3{
  font-family: 'Vollkorn';
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 0;

  ${mobile({fontSize: "18px"})}
  
}
.officedesk-details p{
  font-family: 'Chivo';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  opacity: 0.8;
  ${mobile({fontSize: "12px"})}
}
button{
      padding: 12px 22px;
      background-color: rgba(219, 124, 10, 1);
      box-shadow: 0px 8px 20px -1px rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      color: white;
      border: none;
      font-family: 'Chivo';
      font-weight: 400;
      font-size: 16px;
      margin-top: 30px;

      ${mobile({fontSize: "10px", marginTop: "10px", padding: "10px 5px"})}
    }
  .single-chair{
    display: flex;
    gap: 60px;
    padding: 144px 104px 103px 104px;
    line-height: 32px;
    ${mobile({display: "grid", padding: "70px 50px", lineHeight: "18px"})}
  }
  .single-chair img{
    width: 500px;
    height: 500px;
    ${mobile({width: "300px", height: "250px"})}
    
  }
 
  h4{
    font-family: 'Vollkorn';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    color: #485051;
    ${mobile({fontSize: "20px"})}
  }
  p{
    font-size: 18px;
    opacity: 0.6;
    color: #4A5253;
    ${mobile({fontSize: "10px"})}
  }
  button{
      padding: 12px 80px;
      ${mobile({padding: "10px 30px"})}
    }
`
export default Collections