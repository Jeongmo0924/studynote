            /** KAKAO REST API KEY */
            const KAKAO_REST_KEY = 'a2c94e649a4c25ea4ee592b869a04a12';

            /** 페이지 번호 */
            let currentPage = 1;

            /** 검색어 */
            let queryKeyword = null;

            /** 마지막 페이지인지 검사 */
            let isEnd = false;

            

            // 검색폼 submit 이벤트 - 신규검색
            document.querySelector('#searchForm').addEventListener('submit', (e) => {
                e.preventDefault();
                let page = document.querySelector('#source');
                
                console.log(page);
                
                const queryField = document.querySelector('#query');
                queryKeyword = queryField.value.trim();

                if(!queryKeyword) {
                    alert('검색어를 입력하세요');
                    queryField.focus();
                    return;
                }

                // 신규검색
                currentPage = 1;
                get_data_search();
            })

            // 스크롤 이벤트 - 추가 검색
            window.addEventListener('scroll', (e) => {
                if(isEnd || document.querySelector('#loading').classList.contains('active')){
                    return;
                }

                const scrollTop = window.scrollY;
                const windowHeight = window.screen.availHeight;
                const documentHeight = document.body.scrollHeight;

                if(scrollTop + windowHeight >= documentHeight){
                currentPage++;
                get_data_search();
                }
            })

            // ajax 요청 후 결과를 화면에 HTML로 출력하는 함수
            async function get_data_search() {
                // 로딩바 작업
                const loading = document.querySelector("#loading");
                loading.classList.add('active');

                // 검색 결과가 표시될 영역
                const list = document.querySelector('#list');

                if(currentPage == 1) {
                    Array.from(list.getElementsByTagName('li')).forEach((v, i) => {
                        list.removeChild(v);
                    });
                }

                let page = document.querySelector('#source');
                page = page.options[page.selectedIndex].value;

                // 검색 결과를 저장할 변수
                let json = null;

                

                try {
                    json = await axios.get(`https://dapi.kakao.com/v2/search/${page}`, {
                        params: {
                            query: queryKeyword,
                            page: currentPage,
                        },
                        headers: {
                            Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
                        }
                    });
                }
                catch(e) {
                    console.error(e);
                    alert('요청을 처리하는데 실패했습니다.');
                    return;
                }
                finally {
                    loading.classList.remove('active');
                    console.log(page);
                }

                if(json != null){
                    const {data} = json;
                    console.log(data);

                    isEnd = data.meta.is_end;

                    data.documents.map((v, i) => {
                        const li = document.createElement('li');
                        const a = document.createElement('a');
                        a.setAttribute('href', v.url);
                        a.setAttribute('target', '_blank');
                        a.classList.add('use-thumbnail');

                        const img = document.createElement('img');
                        if(v.thumbnail){
                            img.setAttribute('src', v.thumbnail);
                        } else {
                            img.setAttribute('src', '../img/noimage.jpg');
                        }

                        const h2 = document.createElement('h2');
                        h2.innerHTML = v.title;

                        const p = document.createElement('p');
                        p.innerHTML = v.contents;

                        const span1 = document.createElement('span');
                        span1.innerHTML = (page == 'blog' ? v.blogname : v.cafename);
                        span1.classList.add('info');

                        const span2 = document.createElement('span');
                        let yyyy = v.datetime.substring(0, 4);
                        let mm = v.datetime.substring(5, 7);
                        let dd = v.datetime.substring(8, 10);
                        let hh = v.datetime.substring(11, 13);
                        let MM = v.datetime.substring(14, 16);
                        let ss = v.datetime.substring(17, 19);
                        let oo = '오전';
                        if(hh > 12){
                            hh -= 12;
                            oo = '오후';
                        }
                        span2.innerHTML = `${yyyy}. ${mm}. ${dd}. ${oo} ${hh}:${MM}:${ss}`;
                        span2.classList.add('info');
                        
                        li.appendChild(a);
                        a.appendChild(img);
                        a.appendChild(h2);
                        a.appendChild(p);
                        a.appendChild(span1);
                        a.appendChild(span2);
                        list.appendChild(li);
                    });
                }
            }