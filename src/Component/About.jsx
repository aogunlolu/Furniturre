import React from 'react'
import styled from 'styled-components'
import Contact from './Contact'

const About = () => {
  return (
    <>
    <Article>
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores provident numquam, animi molestias odit quasi quam ducimus inventore maxime iusto unde expedita vero eveniet perspiciatis possimus. Consequatur eos laboriosam obcaecati rerum est, distinctio veniam? Obcaecati asperiores fuga perferendis tempora! Sunt optio nam ipsa repellendus totam officia magni voluptatem nesciunt sapiente vero ab libero nihil, dolorem perspiciatis, placeat voluptas adipisci in ad veniam non tenetur aliquam voluptatibus commodi? Ducimus, omnis amet? Beatae, inventore. Nihil suscipit explicabo error, dolore autem nostrum recusandae iste amet sapiente quos temporibus quidem, ab asperiores dolorum magnam, mollitia tempora? Rem dicta, ab nihil ullam cum cupiditate!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae ipsum tempora totam ab voluptate facere perspiciatis obcaecati, sapiente repudiandae expedita veritatis iure, consequatur nulla eveniet perferendis, tempore quibusdam? Perferendis deserunt cumque, et modi tempore aspernatur cupiditate esse assumenda nihil eos accusantium veniam, enim perspiciatis reprehenderit vitae ratione fugiat molestiae.</p>
    </Article>
    <Contact/>
    </>
  )
}
const Article = styled.div`
  padding: 40px 103px;
  color: rgba(4, 54, 61, 1);
  border-top: 0.5px solid rgba(4, 54, 61, 1);
  border-bottom: 0.5px solid rgba(4, 54, 61, 1);
  margin-top: 70px;
  

  h1{
    font-family: 'Vollkorn';
    font-weight: 600;
    font-size: 40px;
    line-height: 25px;
    text-align: center;
  } 

p{
    padding-top: 20px;
    font-family: 'Chivo';
    font-weight: 400;
    font-size: 20px;
}
`
export default About