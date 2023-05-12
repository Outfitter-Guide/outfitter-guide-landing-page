import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImage from '../../images/landing.JPG'

export const BlogBackground = styled.div`
    min-height: 1300px;
    background-image: url(${backgroundImage}); // Use the background image
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const BlogBgImage = styled.img`
    z-index: 1;
`

export const BlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1100px;
  padding-top: 200px;
`

export const CardContainer = styled(Link)`
  width: 250px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  background-color: #fff;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

`

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: fill;
    border-radius: 10px;
`

export const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  color: black;
`

export const CardSubtitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: black;
`

export const CardAuthor = styled.h3`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  color: black;
`

export const CardDate = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: black;
`

export const BlogPostCard = ({ title, imageUrl, subtitle, author, date, onClick }) => {
    return (
      <CardContainer onClick={onClick}>
        <CardImage src={imageUrl} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardAuthor>{author}</CardAuthor>
        <CardDate>{date}</CardDate>
      </CardContainer>
    );
  };
  export default BlogPostCard;