# #02- Simple-spa

## HTTP GET 파라미터를 포함하는 링크

### 개인 정리
- 간단하게 말해서 주소로 사용되는 query를 HTTP GET 방식으로 받아서 컨트롤하는 방법
- STEP
    1. `Router`를 설치하고 `App.js`에 링크와 `Routes`를 구성
    2. 여기서 `Route`와 링크에 주소를 할당하는데, `Route`는 별다를 것이 없지만 링크는 `queryString`방식으로 값을 전달함(...?key=value&key=value)
    3. Route element파일로 들어가서 `{ useLocation }`을 import
    4. `useLocation();`은 GET파라미터를 추출하는 기능을 갖는다.
    5. React 홈페이지에서 링크를 누르면 주소가 해당 링크로 바뀌는데 이 때의 링크에서 queryString을 받아와서 핸들링하는 방법이다.
    6. `useLocation();`을 변수에 담아 출력해보면 해당 객체의 `search`라는 key에 queryString이 value로 담겨있다.
    7. 이 객체에 `element.get('keyName')`을 이용하여 각 키의 값을 추출한다.
    8. 주어진 데이터들을 `some반복문`으로 반복한다.
    9. `some반복문`은 true가 리턴되면 종료되므로, 조건문을 통해 데이터가 일치하는 요소를 찾아 *빈 변수에 할당시키고* true를 리턴하면 된다.(조건문에 겹치는 데이터가 없을 시 return false; 처리한다.)
    10. 조회 결과가 없는 경우가 코드가 더 짧으므로, 조건문의 조건으로 데이터가 없는 경우를 명시하고 에러메시지를 출력시킨다.
    11. 그렇지 않으면 원하는 데이터를 가지고 원하는 내용을 출력시킨다.
    12. 이 때 할당된 빈 변수를 가지고 핸들링한다.

## PATH 파라미터를 포함하는 링크

### 개인정리
- 간단하게 말해서 주소에 queryString을 이용할 경우 key값이 노출되므로 이를 방지하기 위해 key값을 제외한 value들을 path형식으로 나열하는 방식
- 대신 key값은 Route path에 `.../:key/:key`형식으로 주입한다.
- STEP
  1. 위에 서술한대로, App.js에 Link는 `.../value/value`형식으로 value만 전달한다.
  2. App.js의 Route에는 path에 keyName들을 `:`을 이용하여 지정 및 전달한다.
  3. Route element파일로 들어가서 `{useParams}`를 import한다.
  4. `useParams()`는 PATH파라미터를 추출하는 기능을 갖는다.
  5. `useParams()`를 변수에 할당하고 로그를 찍어보면 바로 `{key: value, key: value}`형식의 json을 리턴해준다!
  6. 여기서부터는 마찬가지로 주어진 데이터를 `some반복문`을 통해 서치하고 빈 변수에 담아 핸들링한다.