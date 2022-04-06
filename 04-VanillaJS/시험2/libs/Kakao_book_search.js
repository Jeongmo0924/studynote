/**
 * @filename    : Kakao_book_search.js
 * @author      : 박정모(oooperbjm@gmail.com)
 * @description : 카카오 API를 이용한 카카오 책 검색결과를 HTML에 li형태로 추가
 */


/** KAKAO REST API KEY */
const KAKAO_REST_KEY = "a2c94e649a4c25ea4ee592b869a04a12";

/** 페이지 번호 */
let currentPage = 1;

/** 검색어 */
let queryKeyword = null;

/** 마지막 페이지인지 검사 */
let isEnd = false;

/** 신규 검색 이벤트 */
document.querySelector("#searchForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const queryField = document.querySelector("#query");
    queryKeyword = queryField.value.trim();

    if (!queryKeyword) {
        alert("검색어를 입력하세요");
        queryField.focus();
        return;
    }
    currentPage = 1;
    get_book_search();
});

/** 추가 검색 스크롤 이벤트 */
window.addEventListener('scroll', (e) => {
    if(isEnd || document.querySelector('#loading').classList.contains('active')){
        return;
    }

    const scrollTop = window.scrollY;
    const windowHeight = window.screen.availHeight;
    const documentHeight = document.body.scrollHeight;

    if(scrollTop + windowHeight >= documentHeight){
    currentPage++;
    get_book_search();
    }
})

/** ajax요청 및 결과를 HTML에 출력하는 함수 */
async function get_book_search() {
    // ajax 요청 처리중 화면에 띄울 로딩바 작업
    const loading = document.querySelector("#loading");
    loading.classList.add("active");

    // 검색 결과를 출력할 위치
    const list = document.querySelector("#list");

    // 기존 검색 내역이 있다면, 최초 검색시 기존 내역 삭제
    if (currentPage == 1) {
        Array.from(list.getElementsByTagName("li")).forEach((v, i) => {
            list.removeChild(v);
        });
    }

    // ajax 요청 전, 드롭다운으로 선택된 값 저장
    let sizePerPage = document.querySelector("#size");
    sizePerPage = sizePerPage.options[sizePerPage.selectedIndex].value;

    let pageSort = document.querySelector("#source");
    pageSort = pageSort.options[pageSort.selectedIndex].value;

    // 검색 결과값을 저장할 변수
    let json = null;

    try {
        json = await axios.get(`https://dapi.kakao.com/v3/search/book?target=title`, {
            params: {
                query: queryKeyword,
                page: currentPage,
                size: sizePerPage,
                sort: pageSort,
            },
            headers: {
                Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
            },
        });
    } catch (e) {
        console.error(e);
        alert("요청을 처리하는데 실패했습니다.");
        return;
    } finally {
        loading.classList.remove("active");
    }

    if (json != null) {
        const { data } = json;
        console.log(data);

        // 스크롤 시 마지막 페이지인지 판단할 수 있는 기준 저장
        isEnd = data.meta.is_end;

        data.documents.map((v, i) => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.setAttribute("href", v.url);
            a.setAttribute("target", "_blank");
            a.classList.add("use-thumbnail");

            const img = document.createElement("img");
            if (v.thumbnail) {
                img.setAttribute("src", v.thumbnail);
            } else {
                img.setAttribute("src", "img/noimage.jpg");
            }

            const h2 = document.createElement("h2");
            h2.innerHTML = v.title;

            const p = document.createElement("p");
            p.innerHTML = v.contents;

            const span = document.createElement("span");
            span.innerHTML = `${v.authors} | ${v.publisher} | ${v.price} | ${v.sale_price} |`
            span.classList.add("info");

            li.appendChild(a);
            a.appendChild(img);
            a.appendChild(h2);
            a.appendChild(p);
            a.appendChild(span);
            list.appendChild(li);
        });
    }
}
