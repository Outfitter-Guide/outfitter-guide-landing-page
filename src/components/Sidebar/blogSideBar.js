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

export const BlogSidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SideBarRoute to='/' onClick={toggle}>Home Page</SideBarRoute>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default BlogSidebar
