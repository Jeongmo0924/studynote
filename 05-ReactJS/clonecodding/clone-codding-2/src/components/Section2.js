import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Section2container = styled.div`
  div {
    padding-top: 65px;
  }
    
  p{
    font-size: 16.4px;
    line-height: 20px;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    padding-top: 50px;
    flex-wrap: wrap;
    
    li {
      width: 355px;
      flex: 0 1 auto;
      display: flex;
      flex-direction: column;
      margin: 0 10px;
      
      img {
        width: 100%;
        filter: grayscale(0.8);
        margin: auto;
      }
      h3 {
        letter-spacing: 0;
        padding-top: 20px;
        display: block;
      }
      p:nth-of-type(1) {
        color: #7e7e7e;
        line-height: 50px;
        display:block;
      }
      a {
        display: block;
        margin: 10px 0;
        width: 350px;
        padding: 13px 0;
        text-align: center;
        background-color: #f1f1f1;
        
        &:hover {
          background-color: #cacaca;
        }
      }
    }
  }
`

const Section2 = (props) => {
    return (
        <Section2container>
            <div id='about'>
            <h3>About</h3>
            </div>
            <hr />
            <p>{props.data.content}</p>
            <ul>
                {props.data.member.map((v, i) => {
                    return(
                        <li>
                            <img src={v.img} alt={v.name} />
                            <h3>{v.name}</h3>
                            <p>{v.position}</p>
                            <p>{v.desc}</p>
                            <Link to='/'>Contact</Link>
                        </li>
                    )
                })}
            </ul>
        </Section2container>
    );
};

export default Section2;