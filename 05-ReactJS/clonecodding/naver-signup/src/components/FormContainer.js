import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  //height: fit-content;

  h3 {
    margin: 19px 0 8px 0;
  }

  .form1 {
    margin: 0 auto;
    width: 460px;

    .input_id {
      position: relative;
    }
    .inputWrapper {
      display: block;
      padding-left: 14px;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #dadada;
      height: 51px;
      background-color: white;
      position: relative;
      overflow: hidden;
    }
    .phone {
      width: 335px;
    }
    .position {
      position: relative;
    }
    .button {
      width: 115px;
      height: 51px;
      font-size: 15px;
      color: white;
      background-color: #03C75B;
      position: absolute;
      right: 0;
      top: 0;
      text-align: center;
      line-height: 51px;
      cursor: pointer;
    }

    .small {
      width: 147px;

      input, select {
        width: 85%;
      }
    }

    .domain {
      position: absolute;
      top: 16px;
      right: 13px;
      display: inline-block;
      margin-left: 15px;
      text-align: right;
      font-size: 15px;
      color: #8e8e8e;
      font-weight: 100;
    }

    input, select {
      position: relative;
      height: 29px;
      top: 10px;
      left: 0;
      padding: 0;
      width: 100%;
      outline: none;
      border: none;
      font-size: 15px;
      cursor: pointer;
    }

    select {
      background: #fff url(https://static.nid.naver.com/images/join/pc/sel_arr_2x.gif) 100% 50% no-repeat;
      background-size: 20px 8px;
      -webkit-appearance: none;
    }

    .select_full {
      width: 435px;
    }

    .error_message {
      font-size: 12px;
      color: #ff0000;
    }

    .icon {
      background: url(https://static.nid.naver.com/images/ui/join/m_icon_pw_step.png) no-repeat;
      background-size: 125px 75px;
      display: block;
      width: 24px;
      height: 24px;
      position: absolute;
      right: 13px;
      top: 13px;
    }

    .flex_box {
      display: flex;
      justify-content: space-between;
    }

    .check {
      background-position: -27px 0;
    }
  }
  
  .btn_join {
    margin: 30px 0;
    width: 100%;
    color: white;
    display: block;
    padding: 15px 0;
    font-weight: bold;
    text-align: center;
    background-color: #03c75a;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }

  .form_padding {
    margin-top: 40px;
  }
`;

export default FormContainer;