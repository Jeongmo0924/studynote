import React, { useRef } from 'react';
import useAxios from 'axios-hooks';
import FormContainer from './FormContainer';
import Spinner from './Spinner';
import regexHelper from '../libs/RegexHelper';


// 1~12의 숫자를 저장하기 위한 배열(생년월일)
const month = [];
for (let i = 1; i < 13; i++) month.push(i);


const Form = () => {

    const icon1 = useRef();
    const icon2 = useRef();

    /** 국가별 지역 코드를 가져오기 위한 요청 */
    const [{data}] = useAxios('http://localhost:4000/list');

    // 국가명 가나다 순으로 정렬
    let country = null;
    if (data != null) {
        country = data.sort((a, b) => {
            return a.country < b.country ? -1 : a.country > b.country ? 1 : 0;
        });
    }

    /** 데이터 저장용 상태값 */
    const [member, setMember] = React.useState({
        userid: '',
        password: '',
        name: '',
        birthday: '',
        gender: '',
        email: '',
        phone_no: ''
    })

    /** 취득한 데이터를 POST하는 axios-hook */
    const [{loading}, refetch] = useAxios({
        method: 'POST',
        url: 'http://localhost:4000/member',
    }, {manual: true});

    /** <form>의 submit 이벤트 */
    const onSubmit = (e) => {
        e.preventDefault();

        // 이벤트가 발생한 폼 객체
        const current = e.target;

        // 유효성 검사 자리
        try {
            regexHelper.value(current.id, '필수 정보입니다.', '멋진 아이디네요!', 'idError');
            regexHelper.engNum(current.id, 'id는 영어나 숫자로 입력하세요', '멋진 아이디네요!', 'idError');
            regexHelper.value(current.password, '필수 정보입니다.', '', 'password_error');
            regexHelper.navPw(current.password, '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.', '', 'password_error');
            if (regexHelper.navPw(current.password, '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.', '', 'password_error')) {
                icon1.current.style.backgroundPosition = '-54px -27px';
            }
            regexHelper.value(current.password_check, '필수 정보입니다.', '', 'password_check_error');
            regexHelper.compareTo(current.password_check, current.password, '비밀번호가 일치하지 않습니다.', '', 'password_check_error');
            if (regexHelper.compareTo(current.password_check, current.password, '비밀번호가 일치하지 않습니다.', '', 'password_check_error')) {
                icon2.current.style.backgroundPosition = '-81px 0';
            } else {
                icon2.current.style.backgroundPosition = '-27px 0';
            }
            regexHelper.value(current.name, '필수 정보입니다.', '', 'name_error');
            regexHelper.value(current.birth_year, '태어난 년도 4자리를 정확하게 입력하세요.', '', 'birth_error');
            regexHelper.value(current.birth_month, '태어난 월을 선택하세요.', '', 'birth_error');
            regexHelper.value(current.birth_date, '태어난 일(날짜) 2자리를 정확하게 입력하세요.', '', 'birth_error');
            regexHelper.value(current.gender, '필수 정보입니다.', '', 'gender_error');
            if (current.email.value) {
                regexHelper.email(current.email, '이메일 주소를 다시 확인해주세요.', '', 'email_error');
            }
            regexHelper.value(current.phone_no, '필수 정보입니다.', '', 'phone_error');
            regexHelper.value(current.certification_num, '인증이 필요합니다.', '', 'certification_error');
        } catch (e) {
            e.field.focus();
            return;
        }

        // 입력받은 값 취득
        const id = current.id.value;
        const password = current.password_check.value;
        const name = current.name.value;
        const birth_year = current.birth_year.value;
        const birth_month = current.birth_month.value;
        const birth_date = current.birth_date.value < 10 ? '0' + current.birth_date.value : current.birth_date.value;
        const gender = current.gender.value;
        const email = current.email.value;
        const phone_no = current.phone_no.value;

        let json = null;

        (async () => {
            try {
                const response = await refetch({
                    data: {
                        userid: id,
                        password: password,
                        name: name,
                        birthday: parseInt(birth_year + birth_month + birth_date),
                        // birth_year: parseInt(birth_year),
                        // birth_month: parseInt(birth_month),
                        // birth_date: parseInt(birth_date),
                        gender: gender,
                        email: email,
                        phone_no: phone_no
                    }
                });

                json = response.data;
            } catch (e) {
                console.error(e);
                window.alert(`[${e.response.statue}] ${e.response.statusText}\n${e.message}`);
            }

            if (json !== null) {
                window.alert('회원가입이 완료되었습니다.');

                //
                // current.id.value = '';
                // current.password.value = '';
                // current.password_check.value = '';
                // current.name.value = '';
                // current.birth_year.value = '';
                // current.birth_month.value = '';
                // current.birth_date.value = '';
                // current.gender.value = '';
                // current.email.value = '';
                // current.phone_no.value = '';
                // current.certification_num.value = '';
                // icon1.current.style.backgroundPosition = '';
                // icon2.current.style.backgroundPosition = '-27px 0';
                window.location.reload();
            }
        })();

    }

    return (<FormContainer>
        <Spinner visible={loading}/>
        <div className='content'>
            <form onSubmit={onSubmit}>
                <div className='form1'>
                    <div className='input_id'>
                        <h3><label htmlFor='id'>아이디</label></h3>
                        <span className='inputWrapper'>
                            <input type='text' id='id' name='id'/>
                            <span className='domain'>@naver.com</span>
                        </span>
                        <span className='error_message' id='idError'></span>
                    </div>


                    <div className='input_id'>
                        <h3><label htmlFor='password'>비밀번호</label></h3>
                        <span className='inputWrapper'>
                            <input type='password' id='password' name='password' maxLength='16' minLength='8'/>
                            <span className='icon' ref={icon1}></span>
                        </span>
                        <span className='error_message' id='password_error'></span>

                        <h3><label htmlFor='password_check'>비밀번호 재확인</label></h3>
                        <span className='inputWrapper'>
                            <input type='password' id='password_check' name='password_check' maxLength='16'
                                   minLength='8'/>
                            <span className='icon check' ref={icon2}></span>
                        </span>
                        <span className='error_message' id='password_check_error'></span>
                    </div>
                </div>

                <div className='form1 form_padding'>
                    <div className='input_id'>
                        <h3><label htmlFor='name'>이름</label></h3>
                        <span className='inputWrapper'>
                            <input type='text' id='name' name='name' maxLength='40'/>
                        </span>
                        <span className='error_message' id='name_error'></span>
                    </div>

                    <div className='input_id'>
                        <h3><label htmlFor='birth_year'>생년월일</label></h3>
                        <div className='flex_box'>
                        <span className='inputWrapper small'>
                            <input className='small_input' type='text' id='birth_year' name='birth_year'
                                   placeholder='년(4자)' maxLength='4' minLength='4'/>
                        </span>
                            <span className='inputWrapper small'>
                            <select id='birth_month' name='birth_month' defaultValue=''>
                                <option value=''>월</option>
                                {month.map((v, i) => {
                                    return (<option value={v} key={i}>
                                        {v}
                                    </option>)
                                })}
                            </select>
                        </span>
                            <span className='inputWrapper small'>
                            <input className='small_input' type='text' id='birth_date' name='birth_date'
                                   placeholder='일' maxLength='2' minLength='1'/>
                        </span>
                        </div>
                        <span className='error_message' id='birth_error'></span>

                        <div className='input_id'>
                            <h3><label htmlFor='gender'>성별</label></h3>
                            <span className='inputWrapper'>
                            <select className='select_full' id='gender' name='gender'>
                                <option value=''>성별</option>
                                <option value='male'>남자</option>
                                <option value='female'>여자</option>
                                <option value='unknown'>선택 안함</option>
                            </select>
                        </span>
                            <span className='error_message' id='gender_error'></span>
                        </div>

                        <div className='input_id'>
                            <h3><label htmlFor='email'>본인 확인 이메일<span
                                style={{fontSize: '12px', color: '#8e8e8e', fontWeight: '400'}}>(선택)</span></label></h3>
                            <span className='inputWrapper'>
                            <input type='text' id='email' name='email' defaultValue='' placeholder='선택입력'/>
                        </span>
                            <span className='error_message' id='email_error'></span>
                        </div>
                    </div>

                    <div className='form1'>
                        <div className='input_id'>
                            <h3><label htmlFor='country_num'>휴대전화</label></h3>
                            <span className='inputWrapper'>
                            {/* selected가 아닌 defaultValue를 사용해야하지만, 작동이 되지 않아 부득이하게 사용함 */}
                                <select className='select_full' id='country_num' name='country_num'>
                                {country && country.map((v, i) => {
                                    return (
                                        v.code === '+82' ?
                                            <option value={v.code} key={i} selected>{v.country} {v.code}</option> :
                                            <option value={v.code} key={i}>{v.country} {v.code}</option>
                                    )
                                })}
                            </select>
                        </span>

                            <h3><label htmlFor='password'></label></h3>
                            <div className='position'>
                        <span className='inputWrapper phone'>
                            <input type='tel' id='phone_no' name='phone_no' placeholder='전화번호 입력'/>
                        </span>
                                <span className='button'>인증번호 받기</span>
                            </div>

                            <h3><label htmlFor='password'></label></h3>
                            <span className='inputWrapper'>
                            <input type='text' id='certification_num' name='certification_num'
                                   placeholder='인증번호 입력하세요'/>
                        </span>
                            <span className='error_message' id='phone_error'></span>
                            <span className='error_message' id='certification_error'></span>
                        </div>
                    </div>

                    <button type='submit' className='btn_join'>가입하기</button>
                </div>
            </form>
        </div>
    </FormContainer>);
};

export default Form;
