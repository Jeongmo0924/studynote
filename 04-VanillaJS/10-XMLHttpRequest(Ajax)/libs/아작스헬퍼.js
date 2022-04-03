/**
 * 
 * @param {string} url 
 * @param {string} method 
 * @param {function} success 
 */
function ajaxHelper(url, method, success){
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = e => {
        const ajax = e.target;

        if(ajax.readyState == 4){
            if(ajax.status == 200){
                if(success != undefined){
                    const json = JSON.parse(ajax.responseText);
                    success(json);
                }
            } else {
                const s = parseInt(ajax.status / 100);
                if( s == 4){
                    alert(`[${ajax.status}] ${ajax.statusText} - 요청 주소가 잘못되었습니다.`);
                } else if(s == 5){
                    alert(`[${ajax.status}] ${ajax.statusText} - 서버의 응답이 없습니다.`);
                } else {
                    alert (`[${ajax.status}] ${ajax.statusText} - 요청에 실패했습니다.`);
                }
            }
        }
    };

    xhr.open(method, url);
    xhr.send();
}