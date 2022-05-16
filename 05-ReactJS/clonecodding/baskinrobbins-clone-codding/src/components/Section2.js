/**
 * @filename: Section2.js
 * @description: Content 파일 두번째 부분, 슬라이더 이미지를 이용한 이벤트 링크
 * @author: 박정모(oooperbjm@gmail.com)
 */

import React from "react";
// slick 모듈 사용
import Slider from "react-slick";
import styled from 'styled-components';
// slick 모듈에 포함되지 않은 버튼 이미지 추가
import prevbtnIcon from '../assets/img/btn_banner_prev.png';
import nextbtnIcon from '../assets/img/btn_banner_next.png';
// axios를 통해 백엔드에서 데이터를 수신
import axios from 'axios';

const Section2Container = styled.div`
    padding-top: 3px;
    .buttonIcon {
        position: absolute;
        top: 650px;
        cursor: pointer;

        &:first-of-type {
            left: 30px;
        }

        &:nth-of-type(2) {
            right: 30px;
        }
    }
`

// slick 슬라이더 css 변경
const StyledSlider = styled(Slider)`
.slick-slide div {
    cursor: pointer;
}

.slick-list {
    width: 100%;
    display: block;
    margin: 0 auto;
    img {
        width: inherit;
    }
}

.slick-prev:before {
    opacity: 1;
    left: 0;
    color: black;
}

.slick-next:before {
    opacity: 1;
    color: black;
}

.slick-dots {
    bottom: 15px;
}
`

const Section2 = () => {

    const prevbtn = React.useRef();
    const nextbtn = React.useRef();
    const slickRef = React.useRef();

    // axios를 통해 백엔드에서 수신한 데이터를 저장할 상태값
    const [data, setData] = React.useState([]);

    // 컴포넌트가 로딩됨과 동시에 동작할 함수
    React.useEffect(()=>{
        (async ()=>{
            try {
                const response = await axios.get('http://localhost:4000/section2');
                setData(response.data);
            } catch(e) {
                console.error(e);
                alert('section2 ajax 연동 실패');
            }
        })();
    },[]);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    // 좌우 이동 버튼에 적용할 onClick 함수
    const onClickPrev = React.useCallback(() => {
        slickRef.current.slickPrev()
    },[])

    const onClickNext = React.useCallback(() => {
        slickRef.current.slickNext()
    },[])


    return (
        <Section2Container>
            <StyledSlider ref={slickRef} {...settings}>
                {data.map((v, i)=> {
                    return (
                        <div key={i}>
                            {/* <div style={background(v.img)} /> */}
                            <img src={v.img} alt={v.alt} />
                        </div>
                    )
                })}
            </StyledSlider>
            <img className="buttonIcon" src={prevbtnIcon} alt='prevbtn' ref={prevbtn} onClick={onClickPrev}/>
            <img className="buttonIcon" src={nextbtnIcon} alt='nextbtn'ref={nextbtn} onClick={onClickNext}/>
        </Section2Container>
    );
};

export default Section2;