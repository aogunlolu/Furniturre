import React from 'react'
import styled from "styled-components";
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import KingCouch from "../Assest/king-couch.jpg";
import { tablets, mobile, largeScreens, smallScreens} from '../responsive';



const card =[
  {id: 1, image: "https://images.unsplash.com/photo-1551298698-66b830a4f11c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830", tittle: "The Red Chair", amount: "$189"},
  {id: 2, image: "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", tittle: "Synnes Collection", amount: "$920"},
  {id: 3, image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", tittle: "CH-Couch", amount: "$800"},
  {id: 4, image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", tittle: "Can Seater Sofa", amount: "$1,889"},
  {id: 5, image: "https://images.pexels.com/photos/3773577/pexels-photo-3773577.png?auto=compress&cs=tinysrgb&h=750&w=1260", tittle: "Synnes King’s Size Bed", amount: "$320"},
  {id: 6, image: "https://sonatsounds.eu/wp-content/uploads/2020/08/scott-webb-NQymDb5XqC4-unsplash.jpg", tittle: "CH Roundup", amount: "$800"}
];

const result =[
  {id: 1, image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', text: 'Liveable luxury', content: 'Sleek, stylish, and sophisticated. The perfect match for your home.'},
  {id: 2, image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', text: 'Smart workplaces', content: 'Forward-thinking furniture for your modern office designed with comfort and ergonomics in mind.'}
];

const Banners = () => {


  return (
    <>
    <header>
        <div>
        <Splide options={{
          perPage: 1,
          arrows: true,
          pagination: false,
          drag: "free",
          rewind: true,
          autoScroll:{speed: 2}
          
        }}>
          {result.map((card) => {
            return(
              <SplideSlide key={card.id}>
                <Main>
                <img src={card.image} alt=''/>
                <div className='card'>
                  <h1>{card.text}</h1>
                  <p>{card.content}</p>
                  <button>BROWSE HOME FURNITURE</button> 
                </div>        
                </Main>       
              </SplideSlide> 
            )
          })}
      </Splide>
        </div>
    </header>  
    <Section >
  <div className='section-header'data-aos="fade-left">
    <h2>Smart Solutions for Modern Living </h2>
    <p>Our mission is simple; We want to make beautiful, high quality furniture for everyday living.</p>
    </div>
    <div className='mainWrapper'>
    <div className='section-text'data-aos="fade-right">
      <h2>New Arrivals</h2>
      <p>View All</p>
    </div>
    <div className='wrapper'data-aos="fade-up">    
    {card.map((props) => {
            return(
                  <Grid key={props.id}>
                  <img src={props.image} alt=''/>
                  <div>
                    <p>{props.tittle}</p>
                    <h4>{props.amount}</h4> 
                  </div>               
                </Grid>                    
            )
          })}
  </div>
  </div>
  </Section>
  <Article>
    <div className="articleWrapper">
    <div className='article-img'>
      <img src={KingCouch} alt="king-couch.jpg" />
    </div>  
    <div className='article'>
        <h2>2020 Winter Crafts</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a <br /> more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <button>LEARN MORE</button>
    </div>
    </div>    
  </Article>
    </>
  )
 
}


  const Main = styled.div`
  
    img{
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: 568px;
      overflow: hidden;
      position: relative;
      margin-top: 70px;
      
      ${mobile({height: "368px"})}
    }

    .card{
      position: absolute; 
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      text-align: center;
      animation-name: floating; 
      animation-duration: 5s; 
      animation-iteration-count: 1; 
      animation-timing-function: ease-in-out; 


        }  
  @keyframes floating {
    from { bottom: 300px; } 
    to {top: 150px;}
  }
    
    h1{
      font-family: Vollkorn;
      font-weight: 600;
      font-size: 72px;

      ${smallScreens({fontSize: "40px"})}
      ${tablets({fontSize: "25px"})}
    }
    p{
      font-family: Chivo;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      padding: 0 30px;


      ${tablets({fontSize: "18px", lineHeight: "20px", padding: "0"})}
      ${mobile({fontSize: "12px", lineHeight: "10px", padding: "0"})}
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
      margin-top: 20px;


      &:hover{
        transition: 1s ease-in-out;
        background-color: transparent;
        color: rgba(219, 124, 10, 1);
      }

      ${tablets({fontSize: "12px", padding: "7px 10px"})}
    }
  `; 
  const Grid = styled.div`  
  font-family: Chivo;
  color:rgba(74, 82, 83, 1);
  font-weight: 400;
  line-height: 2;
  background-color: white;
  transition: all 0.5s;
  
  :hover{
    box-shadow:15px 15px 10px 5px silver;
  }

 
  img{
  width: 384px;
  height: 320px;
  overflow: hidden;
  cursor: pointer;

  
  ${tablets({width: "290px", height: "240px"})};


}

h4{
    font-size: 18px;    
}
p{
  font-size: 22px;
}
`
const Section = styled.div`
padding: 90px 104px;
animation-name: body;



${tablets({padding: "20px 30px"})}


.section-header{
  text-align: center;
  color: rgba(74, 82, 83, 1);
  line-height: 26px;
  
}


h2{
    font-family: Vollkorn;
    font-weight: 500;
    font-size: 40px;

    ${tablets({fontSize: "25px"})}
    ${mobile({fontSize: "18px"})}
  }
  p{
    font-family: Chivo;
    font-weight: 300;
    font-size: 18px;
    line-height: 32px;

    ${tablets({fontSize: "14px", lineHeight: "20px"})}
  }
  .section-text{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-top:40px;
    padding-bottom:10px;
    text-align: center;
    


    ${mobile({paddingTop: "20px"})}
  }


  .section-text h2{
    font-family: Vollkorn;
    font-weight: 600;
    font-size: 24px;
    color:rgba(98, 45, 8, 1);


    ${tablets({fontSize: "18px"})}
    ${mobile({fontSize: "14px"})}
  }
  .section-text p{
    font-family: Vollkorn;
    font-weight: 600;
    font-size: 18px;
    color:rgba(219, 124, 10, 1);


    ${tablets({fontSize: "14px"})}
    ${mobile({fontSize: "12px"})}
  }
`
const Article = styled.div`
background-color: rgba(4, 54, 61, 1);
padding: 0 104px;
width: 100%;
height: 350px;
color:#FFFFFF;
margin:62px 0;
z-index: 2;


${largeScreens({padding:"0 50px"})}
${smallScreens({height:"320px", padding:"0 40px"})}
${tablets({padding: "0 20px", margin: "40px, 0", height: "280px"})}
${mobile({padding: "0 10px", height: "230px", margin: "10px 0"})}

.articleWrapper{
  display: flex;
  flex-wrap: wrap;
  position: relative;
  
}
img{
width: 450px;
height: 100%;
 
${smallScreens({width:"380px"})}
${tablets({width:"320px"})}
${mobile({width:"150px"})}

}
.article-img{
  position: absolute;
  top: -52px;


  ${smallScreens({top:"-29px"})}
  ${tablets({top:"-15px"})}
  ${mobile({top:"40px"})}
}

.article{
  padding: 40px 0;
  position: absolute;
  line-height: 26px;
  padding-left: 560px;


  ${smallScreens({paddingLeft:"400px", lineHeight:"22px", paddingTop:"20px"})}
  ${tablets({paddingLeft:"350px", lineHeight:"20px", paddingTop:"20px"})}
  ${mobile({padding: "15px 0" , paddingLeft: "170px", lineHeight: "15px"})}
}
h2{
  font-family:Vollkorn ;
  width: 400;
  font-size: 40px;
  
  ${smallScreens({fontSize: "30px"})}
  ${tablets({fontSize: "18px"})}
  ${mobile({fontSize: "12px"})}
}
p{
  font-family:Chivo;
  width: 400;
  font-size: 16px;
  
  ${tablets({fontSize: "12px"})}
  ${mobile({fontSize: "10px"})}
}
button{
    padding: 14px 80px;
    background-color: rgba(219, 124, 10, 1);
    box-shadow: 0px 8px 20px -1px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    color: white;
    border: none;
    font-family: 'Chivo';
    font-weight: 400;
    font-size: 16px;
    margin-top: 40px;
    text-align: center;

    &:hover{
        transition: 1s ease-in-out;
        background-color: transparent;
        color: rgba(219, 124, 10, 1);
      }
    

    ${smallScreens({ padding: "12px 20px", marginTop: "30px"})}
    ${tablets({fontSize: "12px", padding: "12px 20px", marginTop: "20px"})}
    ${mobile({ padding: "10px", marginTop: "10px"})}
  }
`
  

export default Banners