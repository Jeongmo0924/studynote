import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';

const HeaderContainer = styled.div`
  width: 768px;
  height: 116px;
  margin: auto;

  div {
    width: 240px;
    height: 44px;
    position: relative;
    top: 52px;
    margin: auto;
    background: url(${logo}) no-repeat;
    background-size: 240px auto;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
`

const Header = () => {
    return (<HeaderContainer>
            <div>
                <a href='https://www.naver.com'></a>
            </div>
        </HeaderContainer>);
};

export default Header;
