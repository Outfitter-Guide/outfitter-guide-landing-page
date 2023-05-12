import React, {useState} from 'react'
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { 
    BlogPostCard,
    BlogContainer,
    BlogBackground
} from "../components/Blog/BlogCardElements";
import BlogSidebar from '../components/Sidebar/blogSideBar';
import BlogPost from './blogPost';
import { blogData } from '../components/Blog/blogData';


const Blog = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleBlogClick = (index) => {
        setSelectedBlog(index);
    };

    const handleBackClick = () => {
        setSelectedBlog(null);
      };

    return (
        <BlogBackground>
        <ScrollToTop />
        <BlogSidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <BlogContainer>

        <>
        {selectedBlog !== null ? (
            <BlogPost
                title={blogData[selectedBlog].title}
                subtitle={blogData[selectedBlog].subtitle}
                author={blogData[selectedBlog].author}
                date={blogData[selectedBlog].date}
                p1header={blogData[selectedBlog].p1header}
                p1={blogData[selectedBlog].p1}
                p1Caption={blogData[selectedBlog].p1Caption}
                p2header={blogData[selectedBlog].p2header}
                p2={blogData[selectedBlog].p2}
                p3header={blogData[selectedBlog].p3header}
                p3={blogData[selectedBlog].p3}
                p4header={blogData[selectedBlog].p4header}
                p4={blogData[selectedBlog].p4}
                p4p={blogData[selectedBlog].p4p}
                p4p4={blogData[selectedBlog].p4p4}
                p5header={blogData[selectedBlog].p5header}
                p5={blogData[selectedBlog].p5}
                p5p={blogData[selectedBlog].p5p}
                p5p5={blogData[selectedBlog].p5p5}
                onBack={handleBackClick}
            />
        ) : (
        blogData.map((blog, index) => (
            <BlogPostCard
                key={index}
                title={blog.title}
                imageUrl={require('../images/zach.jpeg')}
                subtitle={blog.subtitle}
                author={blog.author}
                date={blog.date}
                onClick={() => handleBlogClick(index)}
            />
            ))
        )}
        </>
        </BlogContainer>
        </BlogBackground>
    )
  }
  
  export default Blog