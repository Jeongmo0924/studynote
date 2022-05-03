import React from 'react';
import styled from 'styled-components';
import Img1 from '../assets/img/architect.jpg';


const Jumbotrons = styled.header`
  max-width: 1500px;
  max-height: 800px;
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
  vertical-align: middle;
  z-index: -10;
  img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  h1 {
    text-align: center;
    font-size: 35px;
    color: white;
    letter-spacing: 4px;
    position: absolute;
    line-height: 50px;
    top: 50%;
    vertical-align: middle;
    
    span {
      &:first-child {
        color: white;
        background-color: rgba(0, 0, 0);
        padding: 8px 17px;
        font-weight: bold;
        opacity: 0.7;
      }
      &:last-child {
        color: white;
        font-weight: 500;
      }
      
    }
  }
`

const Header = () => {

    const [innerWidth, setInnerWidth] = React.useState(false);


    window.addEventListener('resize', () => {
        setInnerWidth(window.innerWidth < 600)
    })

    return (
        <Jumbotrons id='top'>
            <img src={Img1} alt='img' />
            <h1><span>BR</span>&nbsp;
                <span
                    className={innerWidth ? 'hide' : ''}
                >Architects</span></h1>
        </Jumbotrons>
    );
};

export default Header;