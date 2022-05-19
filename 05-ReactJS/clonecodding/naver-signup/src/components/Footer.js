import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';

const FooterContainer = styled.div`

  margin-top: 20px;
  .footer1 {
    width: 460px;
    margin: auto;
    font-size: 12px;
    text-align: center;
    letter-spacing: -0.5px;
    a {
      color: #666;
      text-decoration: none;
      letter-spacing: 0.1px;
    }
    .bld{
      font-weight: bold;
    }
  }


  .footer2 {
    display: block;
    width: 460px;
    margin: auto;
    
    .footerbg {
      background: url(${logo}) no-repeat 0px -19px;
      width: 70px;
      height: 20px;
      display: block;
      position: relative;
      left: 80px;
      top: -3px;
      float: left;
      background-size: 100px 40px;
      z-index: 10;
    }
    p {
      position: relative;
      width: 100%;
      font-size: 9px;
      font-family: 'Verdana', serif;
      line-height: 14px;
      top: -4px;
      right: -80px;
      font-style: normal;
      letter-spacing: .05em;
      span {
        font-weight: bold;
        
      }
    }
  }

`

const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer1">
                <a href="https://policy.naver.com/rules/service.html">이용약관 | </a>
                <a href="https://policy.naver.com/policy/privacy.html" className="bld">개인정보처리방침</a>
                <a href="https://policy.naver.com/rules/disclaimer.html"> | 책임의 한계와 법적고지 | </a>
                <a href="https://help.naver.com/support/service/main.help?serviceNo=532&_membership_p.membership_p.membership_26&from=alias"
                   target='_blank' rel="noreferrer">회원정보 고객센터</a>
            </div>
            <address className="footer2">
                <div className="footerbg"></div>
                <p>Copyright <span>NAVER Corp.</span> All Rights Reserved.</p>
            </address>
        </FooterContainer>
    );
};

export default Footer;
