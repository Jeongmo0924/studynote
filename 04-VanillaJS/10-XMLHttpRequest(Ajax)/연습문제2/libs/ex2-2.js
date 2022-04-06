const KAKAO_REST_KEY = "a2c94e649a4c25ea4ee592b869a04a12";
let is_end = false;
let currentPage = 1;
let queryKeyword = null;
let source = document.querySelector("#source");
source = source.options[source.selectedIndex].value;
const qs = (selector) => document.querySelector(selector);
const ce = (tags) => document.createElement(tags);
const sa = (target, attribute, 값) => target.setAttribute(attribute, 값);
const ca = (target, 값) => target.classList.add(값);

async function search_data() {
    const loading = qs("#loading");
    loading.classList.add("active");

    let json;
    try {
        json = await axios.get(`https://dapi.kakao.com/v2/search/${source}`, {
            params: {
                query: queryKeyword,
                page: currentPage,
            },
            headers: {
                Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
            },
        });
    } catch (e) {
        console.error(e);
        alert("에러에러");
    } finally {
        loading.classList.remove("active");
    }

    const list = qs("#list");

    if (json) {
        const { data } = json;
        console.log(data);

        data.documents.map((v) => {
            const li = ce("li");
            const a = ce("a");
            sa(a, "href", v.url);
            sa(a, 'target', '_blank');
            ca(a, 'use-thumbnail');
            const img = ce('img');
            sa(img, 'src', v.thumbnail);
            const h2 = ce('h2');
            h2.innerHTML = v.title;
            const p = ce('p');
            p.innerHTML = v.contents;
            const span1 = ce('span');
            ca(span1, 'info');
            span1.innerHTML = source == 'blog' ? v.blogname : v.cafename;
            const span2 = ce('span');
            ca(span2, 'info');
            span2.innerHTML = v.datetime;

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

qs("#searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    queryKeyword = qs("#query").value.trim();
    
    if (!queryKeyword) {
        alert('검색어 임마! 까먹을걸 까먹어라');
        qs('#query').focus();
        return;
    }
    currentPage = 1;
    search_data();
});
