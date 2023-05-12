import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    // SidebarLink,
    // SidebarBtnWrap,
    SideBarRoute

 } from './SidebarElements'

export const BlogPostSidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SideBarRoute to='/' onClick={toggle}>Home Page</SideBarRoute>
                <SideBarRoute to='/blog' onClick={toggle}>Blog</SideBarRoute>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default BlogPostSidebar
