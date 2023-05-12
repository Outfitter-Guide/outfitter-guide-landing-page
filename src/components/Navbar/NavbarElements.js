import styled from 'styled-components';

export const Nav = styled.nav`
    background: #32546d;
    height: 130px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 95px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const MobileIcon = styled.div`
    display: block;
    position: absolute;
    top: 10;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
        
`

export const MainLogo = styled.img` 
    width: 210px;
    height: 100px;
    margin: auto;
`

export const BackButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const BackArrow = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;