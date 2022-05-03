import React from "react";
import Img1 from "../assets/img/tablesetting2.jpg";
import styled from "styled-components";

const About = styled.div`
  width: 1080px;
  max-width: 100%;
  margin: auto;
  padding-top: 50px;

  * {
    vertical-align: middle;
  }

  img {
    display: block;
    margin: auto;
    width: 50%;
    max-width: 80%;
    min-width: 30%;
    border-radius: 4px;
    float: left;
    margin-right: 40px;
    opacity: 0.8;
  }

  h2 {
    font-size: 35px;
    text-align: center;
    line-height: 300%;
    letter-spacing: 5px;
    padding-bottom: 10px;
  }

  .content1 {
    max-height: 750px;
    text-overflow: ellipsis;
    overflow: hidden;

    .subtitle {
      text-align: center;
      font-size: 18px;
      font-weight: 100;
      letter-spacing: 5px;
      padding-bottom: 20px;
    }

    p {
      font-size: 16px;
      line-height: 25px;

      &:last-child {
        color: #5f5f5f;
        padding-top: 10px;
      }
    }
  }
  &:after {
    float: none;
    clear: both;
    content: "";
    display: block;
    padding-bottom: 200px;
  }
`;

const Post1 = () => {
  return (
    <About>
      <div className="image">
        <img src={Img1} alt="tablesetting" />
      </div>
      <h2>About Catering</h2>
      <div className="content1">
        <p className="subtitle">Tradition since 1889</p>
        <p>
          The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
          sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only
          use seasonal ingredients.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum consectetur adipiscing
          elit, sed do eiusmod temporincididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </About>
  );
};

export default Post1;
