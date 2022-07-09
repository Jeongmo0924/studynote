/**
 * @filename        : RegexHelper.js
 * @author          : 박정모 (oooperbjm@gmail.com)
 * @description     : 정규표현식 검사 수행
 */

import BadRequestException from "../exceptions/BadRequestException.js";

class RegexHelper {
  // constructor() {}

  /**
   * 값의 존재 여부를 검사한다.
   * @param    {string} content  검사할 값
   * @param    {string} msg      값이 없을 경우 표시할 메시지 내용
   */
  value(content, msg) {
    if (content == undefined || content == null || (typeof content == "string" && content.trim().length == 0)) {
      throw new BadRequestException(msg);
    }

    return true;
  }

  /**
   * 입력값이 지정된 글자수를 초과했는지 검사한다.
   * @param    {string} content 검사할 값
   * @param    {int} length      최대 글자 수
   * @param    {string} msg      값이 없을 경우 표시될 메시지
   */
  maxLength(content, len, msg) {
    this.value(content, msg);

    if (content.trim().length > len) {
      throw new BadRequestException(msg);
    }

    return true;
  }

  /**
   * 입력값이 지정된 글자수 미만인지 검사한다.
   * @param    {string} content 검사할 값
   * @param    {int} length      최소 글자 수
   * @param    {string} msg      값이 없을 경우 표시될 메시지
   */
  minLength(content, len, msg) {
    this.value(content, msg);

    if (content.trim().length < len) {
      throw new BadRequestException(msg);
    }

    return true;
  }

  /**
   * 두 값이 동일한지 검사한다.
   * @param    {string} origin     원본에 대한 CSS 선택자
   * @param    {string} compare    검사 대상에 대한 CSS 선택자
   * @param    {string} msg        검사에 실패할 경우 표시할 메시지
   */
  compareTo(origin, compare, msg) {
    this.value(origin, msg);
    this.value(compare, msg);

    var src = document.querycontent(origin).value.trim(); // 원본값을 가져온다.
    var dsc = document.querycontent(compare).value.trim(); // 비교할 값을 가져온다.

    if (src != dsc) {
      throw new BadRequestException(msg, origin);
    }

    return true; // 성공했음을 리턴
  }

  /**
   * 드롭다운 첫 번째 항목을 선택했는지 검사한다.
   * @param   {string} content   검사 대상에 대한 CSS 선택자
   * @param   {string} msg        검사에 실패할 경우 표시할 메시지
   */
  navDm(content, msg) {
    const checked = Array.from(content);
    if (checked[0].selected) {
      throw new BadRequestException(msg);
    }
  }

  /**
   * 입력된 데이터의 크기가 기준을 초과하는지 검사한다.
   * @param {string} content 검사 대상에 대한 CSS 선택자
   * @param {number} max      최대값
   * @param {string} msg      검사에 실패할 경우 표시할 메시지
   */
  navDd(content, max, msg) {
    if (content > max) {
      throw new BadRequestException(msg);
    }
  }

  /**
   * 입력값이 정규표현식을 충족하는지 검사한다.
   * @param    {string} content      검사할 대상의 CSS선택자
   * @param    {string} msg           표시할 메시지
   * @param    {object} regexExpr     검사할 정규표현식
   */
  field(content, msg, regexExpr) {
    this.value(content, msg);

    const src = content.trim();

    // 입력값에 대한 정규표현식 검사가 실패하면?
    if (!regexExpr.test(src)) {
      throw new BadRequestException(msg);
    }
    return true;
  }

  /**
   * 숫자로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param   {string} content       검사할 값
   * @param   {string} msg            표시할 메시지
   */
  num(content, msg) {
    return this.field(content, msg, /^[0-9]*$/);
  }

  /**
   * 영어 소문자와 숫자, -. _만 사용됐는지를 검사하기 위해 field()를 간접 호출한다.
   * @param   {string} content       검사할 값
   * @param   {string} msg            표시할 메시지
   */
  navId(content, msg) {
    return this.field(content, msg, /^[a-z0-9-_]*$/);
  }

  /**
   * 영어 대, 소문자중 하나와 숫자, 특수문자를 각 한글자 이상 포함하는지 검사하기 위해 field()를 간접 호출한다.
   * @param {string} content         검사할 값
   * @param {string} msg              표시할 메시지
   */
  navPw(content, msg) {
    return this.field(content, msg, /^(?=.*?[A-Z])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/);
  }

  /**
   * 한글과 영어 대소문자, 숫자로만 이루어졌는지 검사하기 위해 field()를 간접 호출한다.
   * @param {string} content         검사할 값
   * @param {string} msg              표시할 메시지
   */
  navName(content, msg) {
    return this.field(content, msg, /^[a-zA-Zㄱ-ㅎ가-힣0-9]*$/);
  }

  /**
   * 이메일주소 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param   {string} content       검사할 값
   * @param   {string} msg            표시할 메시지
   */
  email(content, msg) {
    return this.field(content, msg, /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
  }

  /**
   * 핸드폰번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param   {string} content       검사할 값
   * @param   {string} msg            표시할 메시지
   */
  cellphone(content, msg) {
    return this.field(content, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
  }
}
// for node.js
// module.exports = new RegexHelper();

export default new RegexHelper();
