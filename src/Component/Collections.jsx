import React from 'react'
import styled from 'styled-components';
import KariShea from "../Assest/KariShea.jpg";
import Office from "../Assest/office.jpeg";
import { tablets, mobile, smallScreens} from '../responsive';

  
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
                  <img src={props.image} alt='' />
                  <h3>{props.tittle}</h3>              
                </Grid>                    
            )
          })}
      </div> 
      <div className='wrappers'data-aos="fade-right">    
    {Cards.map((props) => {
            return(
                  <Grids key={props.id}>
                  <img src={props.image} alt='' />
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
          <div className='officedesk-details' >
            <h3>Comfort = Productivity</h3>
            <p>Studies show that comfortable employees
              are happier and <br /> more efficient at work.</p>
            <button>EXPLORE OUR OFFICE COLLECTION</button>
          </div>
        </div>
        <div className='single-chair' >
          <div className='schair' data-aos="fade-right">
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
  text-align: center;
  
  /* ${tablets({padding: "90px 30px"})} */

  h2{
    text-align: center;
    padding: 20px 0;
    color: rgba(4, 54, 61, 1);
    font-family: 'Vollkorn';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;

    ${tablets({fontSize: "25px"})}
    ${mobile({fontSize: "18px"})}
   
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
    
    ${tablets({width: "384px", height: "320px"})};
    ${mobile({width: "290px", height: "240px"})};

  }

  h3{
    font-size: 36px;  
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;

    ${tablets({fontSize: "25px"})}
    ${mobile({fontSize: "18px"})}
   
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

    ${tablets({fontSize: "25px"})}
    ${mobile({fontSize: "18px"})}
    
  }
`
const Main = styled.div`
  
.office-desk{
  position: relative;
  width: 100%;
}
  .officedesk img{
  width: 100%;
  height: 540px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  
  ${tablets({height: "340px"})};
}

.officedesk-details{
  position: absolute;
  top: 146px;
  left: 104px;
  color: #6d7711df;
  line-height: 30px;

  ${tablets({top: "70px", left:"30px", lineHeight:"22px"})}
  ${mobile({padding:"10px", alignItems: "center"})}
}

.officedesk-details h3{
  font-family: 'Vollkorn';
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  line-height: 2;

  ${smallScreens({fontSize: "50px"})}
  ${tablets({fontSize: "24px"})}
  ${mobile({fontSize: "18px"})}
  
}
.officedesk-details p{
  font-family: 'Chivo';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  opacity: 0.8;

 
  ${mobile({fontSize: "16px"})}
 
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

      ${mobile({padding: "10px", fontSize:"14px", width:"50%"})}
    }
  .single-chair{
    display: flex;
    gap: 60px;
    padding: 144px 104px 103px 104px;
    line-height: 32px;
    justify-content: center;
    align-items: center;
   

    ${smallScreens({padding:"70px 40px", lineHeight:"28px", gap:"30px"})}
    ${tablets({display:"grid", padding:"70px 40px", lineHeight:"28px", gap:"30px"})}
   
  }
  .schair{
    width: 50%;
    text-align: center;

    ${tablets({width: "100%"})};
  }
  .schair img{
    width: 100%;
    height: 100%;
    
    
   
    ${tablets({width: "384px", height: "100%"})};
    ${mobile({width: "290px", height: "100%"})};
  }
 .singleChair-details{
  width: 50%;


  ${tablets({width: "100%"})};
 }
  h4{
    font-family: 'Vollkorn';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    color: #485051;

    ${tablets({fontSize: "25px"})}
    ${mobile({fontSize: "18px"})}
  }
  p{
    font-size: 18px;
    opacity: 0.6;
    color: #4A5253;

    ${tablets({fontSize: "18px"})}
    ${mobile({fontSize: "16px"})}
  }
  button{
      padding: 12px 80px;


      ${mobile({padding: "10px 30px"})}
    }
`
export default Collections