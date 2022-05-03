import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Navcontainer = styled.div`
  background-color: white;
  width: 100%;
  height: 55px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 99999;
  flex-wrap: nowrap;
  
  a {
    margin: 10px auto;
    padding: 0 10px;
    line-height: 35px;
    letter-spacing: 5px;
    font-size: 15px;

    &:hover {
      background-color: #cacaca;
    }
  }

  .main-logo {
    margin-left: 30px;

    span {
      font-weight: 900;
    }
  }

  .top-navs {
    position: relative;
    right: 100px;
    width: 250px;
    display: flex;
    justify-content: space-between;
    a {
      padding: 0 10px;
      cursor: pointer;
    }
  }

`

const Nav = () => {

    const [innerWidth, setInnerWidth] = React.useState(false);


    window.addEventListener('resize', () => {
        setInnerWidth(window.innerWidth < 600)
    })

    return (
        <Navcontainer>
            <Link to="top" className='main-logo'><span><b>BR</b></span> Architects</Link>
            <div className={innerWidth? 'hide' : 'top-navs'}>
                <Link to='project' spy={true} smooth={true}>Projects</Link>
                <Link to='about' spy={true} smooth={true}>About</Link>
                <Link to='contact' spy={true} smooth={true}>Contact</Link>
            </div>
        </Navcontainer>
    );
};

export default Nav;