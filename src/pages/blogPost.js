import React from 'react'
import styled from 'styled-components';
const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 900px;
`;

const BlogCont = styled.div`
  width: auto;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  background-color: #fff;
  text-decoration: none;
`

const BlogContents = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`

const PageTitle = styled.h1`
  
  font-size: 36px;
  margin-bottom: 30px;
`;

const PageSubTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 14px;
  color: #454545;
`;

const AuthorContent = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`;

const DateContent = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 34px;
`;

const P1Header = styled.h3`
  font-size: 36px;
  margin-bottom: 20px;
`;

const P1Content = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`

const BackButton = styled.button`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#32546d' : '#A29587')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '18px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? 'white' : '#32546d')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
      transition: all 0.2s ease-in-out;
      background: ${({primary}) => (primary ? '#A29587' : '#32546d')};
  }
`;

const P1Image = styled.img`
  height: 50vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
const P2Image = styled.img`
  height: 45vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 30px;

  @media screen and (max-width: 768px){
    height: 25vh;
  }

  @media screen and (max-width: 400px){
    height: 20vh;
  }
`

const P3Image = styled.img`
  height: 18vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;

  @media screen and (max-width: 768px){
    height: 14vh;
  }

  @media screen and (max-width: 400px){
    height: 10vh;
  }
`

const P1ImageCaption = styled.h6`
  margin-top: 10px;
  text-align: center;
`

const LineBreak = styled.div`
  width: 100%;
  height: 2px;
  background-color: lightgray;
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const BlogPost = (
    {   title, 
        subtitle,
        author,
        date,
        p1header,
        p1,
        image,
        p1Caption,
        p2,
        p2header,
        p3header,
        p3,
        p4header,
        p4,
        p4p,
        p4p4,
        p5header,
        p5, 
        p5p,
        p5p5,
        onBack }) => {
  return (
    <PageContainer>
    <BackButton onClick={onBack}
      big='true'
      primary='true'
      dark='false'>Back
    </BackButton>
    <BlogCont>
    <BlogContents>
      <PageTitle>{title}</PageTitle>
      <PageSubTitle>{subtitle}</PageSubTitle>
      <LineBreak></LineBreak>
      <AuthorContent>{author}</AuthorContent>
      <DateContent>{date}</DateContent>
      <LineBreak></LineBreak>
      <P1Header>{p1header}</P1Header>
      <P1Content>{p1}</P1Content>
      <P1Image src={require('../images/BlogImages/slc23.jpeg')} alt={title}/>
      <P1ImageCaption>{p1Caption}</P1ImageCaption>
      <LineBreak></LineBreak>
      <P1Header>{p2header}</P1Header>
      <P1Content>{p2}</P1Content>
      <LineBreak></LineBreak>
      <P1Header>{p3header}</P1Header>
      <P1Content>{p3}</P1Content>
      <LineBreak></LineBreak>
      <P1Header>{p4header}</P1Header>
      <P1Content>{p4}</P1Content>
      <P1Content>{p4p}</P1Content>
      <P2Image src={require('../images/BlogImages/upcomingHunt.png')} alt={title}/>
      <P1Content>{p4p4}</P1Content>
      <P2Image src={require('../images/BlogImages/huntAwait.png')} alt={title}/>
      <LineBreak></LineBreak>
      <P1Header>{p5header}</P1Header>
      <P1Content>{p5}</P1Content>
      <P1Content>{p5p}</P1Content>
      <P1Content>{p5p5}</P1Content>
      <P3Image src={require('../images/shed_blue.png')} alt={title}/>
    </BlogContents>
    </BlogCont>
    </PageContainer>
  );
};

export default BlogPost