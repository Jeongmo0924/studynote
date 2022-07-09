/**
 * @filename        : RegexHelper.js
 * @author          : 박정모 (regetog@gmail.com)
 * @description     : 정규표현식 검사 수행
 */

import BadRequestException from "../exceptions/BadRequestException.js";

class RegexHelper {
  // constructor() {}

  success(id, msg2) {
    document.getElementById(id).style.color = "green";
    document.getElementById(id).innerHTML = msg2;
  }
  fail(id, msg) {
    document.getElementById(id).style.color = "red";
    document.getElementById(id).innerHTML = msg;
  }

  /**
   * 값의 존재 여부를 검사한다.
   * @param    {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param    {string} msg      실패시 표시할 메시지 내용
   * @param    {string} msg2     성공시 표시할 메시지 내용
   * @param    {string} id          ref
   */
  value(field, msg, msg2, id) {
    const content = field.value;

    if (content === undefined || content === null || (typeof content === "string" && content.trim().length === 0)) {
      this.fail(id, msg);
      throw new BadRequestException(msg, field);
    } else {
      this.success(id, msg2);
    }

    return true;
  }

  /**
   * 입력값이 지정된 글자수를 초과했는지 검사한다.
   * @param    {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param    {int} len      최대 글자 수
   * @param    {string} msg      실패시 표시할 메시지 내용
   * @param    {string} msg2     성공시 표시할 메시지 내용
   * @param    {string} id        id
   */
  maxLength(field, len, msg, msg2, id) {
    this.value(field, msg);

    const content = field.value;
    this.fail(id, msg);
    if (content.trim().length > len) {
      throw new BadRequestException(msg, field);
    } else {
      this.success(id, msg2);
    }

    return true;
  }

  /**
   * 입력값이 지정된 글자수 미만인지 검사한다.
   * @param    {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param    {int} len      최소 글자 수
   * @param    {string} msg      실패시 표시할 메시지 내용
   * @param    {string} msg2     성공시 표시할 메시지 내용
   * @param    {string} id       id
   */
  minLength(field, len, msg, msg2, id) {
    this.value(field, msg);

    let content = field.value;
    this.fail(id, msg);

    if (content.trim().length < len) {
      throw new BadRequestException(msg, field);
    } else {
      this.success(id, msg2);
    }

    return true;
  }

  /**
   * 두 값이 동일한지 검사한다.
   * @param    {HTMLElement} field     원본에 대한 CSS 선택자
   * @param    {HTMLElement} compare    검사 대상에 대한 CSS 선택자
   * @param    {string} msg      실패시 표시할 메시지 내용
   * @param    {string} msg2     성공시 표시할 메시지 내용
   * @param    {string} id       id
   */
  compareTo(field, compare, msg, msg2, id) {
    this.value(field, msg, msg2, id);
    this.value(compare, msg, msg2, id);

    var src = field.value.trim(); // 원본값을 가져온다.
    var dsc = compare.value.trim(); // 비교할 값을 가져온다.

    if (src !== dsc) {
      this.fail(id, msg);
      throw new BadRequestException(msg, field);
    } else {
      this.success(id, msg2);
    }

    return true; // 성공했음을 리턴
  }

  /**
   * 라디오나 체크박스가 선택된 항목인지 확인한다.
   * @param   {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param    {string} msg      실패시 표시할 메시지 내용
   * @param    {string} msg2     성공시 표시할 메시지 내용
   */
  check(field, msg) {
    const checkedItem = Array.from(field).filter((v, i) => v.checked);

    if (checkedItem.length === 0) {
      throw new BadRequestException(msg, field[0]);
    }
  }

  /**
   * 라디오나 체크박스의 최소 선택 갯수를 제한한다.
   * @param   {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param    {number} len       최소 선택 갯수
   * @param    {string} msg      실패시 표시할 메시지 내용
   * @param    {string} msg2     성공시 표시할 메시지 내용
   */
  checkMin(field, len, msg, msg2) {
    const checkedItem = Array.from(field).filter((v, i) => v.checked);

    if (checkedItem.length < len) {
      throw new BadRequestException(msg, field);
    }
  }

  /**
   * 라디오나 체크박스의 최대 선택 갯수를 제한한다.
   * @param   {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param    {number} len       최대 선택 갯수
   * @param    {string} msg      실패시 표시할 메시지 내용
   * @param    {string} msg2     성공시 표시할 메시지 내용
   */
  checkMax(field, len, msg, msg2) {
    const checkedItem = Array.from(field).filter((v, i) => v.checked);

    if (checkedItem.length > len) {
      throw new BadRequestException(msg, field);
    }
  }

  /**
   * 입력값이 정규표현식을 충족하는지 검사한다.
   * @param    {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param    {string} msg      실패시 표시할 메시지 내용
   * @param    {string} msg2     성공시 표시할 메시지 내용
   * @param    {string} id            id
   * @param    {object} regexExpr     검사할 정규표현식
   */
  field(field, msg, msg2, id, regexExpr) {
    this.value(field, msg, msg2, id);

    // 입력값에 대한 정규표현식 검사가 실패하면?
    if (!regexExpr.test(field.value.trim())) {
      this.fail(id, msg);
      throw new BadRequestException(msg, field);
    } else {
      this.success(id, msg2);
    }
    return true;
  }

  /**
   * 영어 대, 소문자중 하나와 숫자, 특수문자를 각 한글자 이상 포함하는지 검사하기 위해 field()를 간접 호출한다.
   * @param {HTMLElement} field         검사할 대상의 CSS 선택자
   * @param {string} msg              표시할 메시지
   * @param   {string} msg        실패시 표시할 메시지
   * @param   {string} msg2       성공시 표시할 메시지
   * @param   {string} id         id
   */
  navPw(field, msg, msg2, id) {
    return this.field(field, msg, msg2, id, /^(?=.*?[A-Z])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/);
  }

  /**
   * 숫자로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param   {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param   {string} msg        실패시 표시할 메시지
   * @param   {string} msg2       성공시 표시할 메시지
   * @param   {string} id         id
   */
  num(field, msg, msg2, id) {
    return this.field(field, msg, msg2, id, /^[0-9]*$/);
  }

  /**
   * 영문으로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param   {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param   {string} msg        실패시 표시할 메시지
   * @param   {string} msg2       성공시 표시할 메시지
   * @param   {string} id         id
   */
  eng(field, msg, msg2, id) {
    return this.field(field, msg, msg2, id, /^[a-zA-Z]*$/);
  }

  /**
   * 한글로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param   {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param   {string} msg        실패시 표시할 메시지
   * @param   {string} msg2       성공시 표시할 메시지
   * @param   {string} id         id
   */
  kor(field, msg, msg2, id) {
    return this.field(field, msg, msg2, id, /^[ㄱ-ㅎ가-힣]*$/);
  }

  /**
   * 영문과 숫자로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param   {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param   {string} msg        실패시 표시할 메시지
   * @param   {string} msg2       성공시 표시할 메시지
   * @param   {string} id         id
   */
  engNum(field, msg, msg2, id) {
    return this.field(field, msg, msg2, id, /^[a-zA-Z0-9]*$/);
  }

  /**
   * 한글과 숫자로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param   {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param   {string} msg        실패시 표시할 메시지
   * @param   {string} msg2       성공시 표시할 메시지
   * @param   {string} id         id
   */
  korNum(field, msg, msg2, id) {
    return this.field(field, msg, msg2, id, /^[ㄱ-ㅎ가-힣0-9]*$/);
  }

  /**
   * 이메일주소 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param   {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param   {string} msg        실패시 표시할 메시지
   * @param   {string} msg2       성공시 표시할 메시지
   * @param   {string} id         id
   */
  email(field, msg, msg2, id) {
    return this.field(field, msg, msg2, id, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
  }

  /**
   * 핸드폰번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param   {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param   {string} msg        실패시 표시할 메시지
   * @param   {string} msg2       성공시 표시할 메시지
   * @param   {string} id         id
   */
  cellphone(field, msg, msg2, id) {
    return this.field(field, msg, msg2, id, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
  }

  /**
   * 집전화 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param   {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param   {string} msg        실패시 표시할 메시지
   * @param   {string} msg2       성공시 표시할 메시지
   * @param   {string} id         id
   */
  telphone(field, msg, msg2, id) {
    return this.field(field, msg, msg2, id, /^\d{2,3}\d{3,4}\d{4}$/);
  }

  /**
   * 핸드폰번호 형식과 집전화 번호 형식 둥 중 하나를 충족하는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param   {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param   {string} msg        실패시 표시할 메시지
   * @param   {string} msg2       성공시 표시할 메시지
   * @param   {string} id         id
   */
  phone(field, msg, msg2, id) {
    this.value(field, msg, msg2, id);

    const content = field.value.trim();
    var check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/; // 핸드폰 형식
    var check2 = /^\d{2,3}\d{3,4}\d{4}$/; // 집전화 형식

    //핸드폰 형식도 아니고      집전화 형식도 아니라면?
    if (!check1.test(content) && !check2.test(content)) {
      field.focus();
      throw new BadRequestException(msg, field);
    } else {
      document.querySelector(id).innerHTML = msg2;
    }
    return true; // 성공했음을 리턴
  }

  /**
   * 최소값보다 큰 값인지 검사
   * @param {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {number} min        최소값
   * @param   {string} msg        실패시 표시할 메시지
   * @param   {string} msg2       성공시 표시할 메시지
   * @param   {string} id         id
   */
  min(field, min, msg, msg2, id) {
    if (field.value < min) {
      field.focus();
      throw new BadRequestException(msg, field);
    } else {
      document.querySelector(id).innerHTML = msg2;
    }
  }

  /**
   * 최대값보다 작은 값인지 검사
   * @param {HTMLElement} field 검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {number} max        최대값
   * @param   {string} msg        실패시 표시할 메시지
   * @param   {string} msg2       성공시 표시할 메시지
   * @param   {string} id         id
   */
  max(field, max, msg, msg2, id) {
    if (field.value > max) {
      field.value = max;
      field.focus();
      throw new BadRequestException(msg, field);
    } else {
      document.querySelector(id).innerHTML = msg2;
    }
  }
}

export default new RegexHelper();
