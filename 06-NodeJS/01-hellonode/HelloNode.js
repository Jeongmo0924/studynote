console.group("First");

// 개발 단계에서 부수적인 데이터를 출력하고자 할 때 사용한다.
// --> 제품을 배포할 때는 로그는 웬만하면 삭제해서 배포하는게 좋다. 무언가 출력한다는 거ㅓㅅ은 성능에 영향을 줄 수 있다. 정말 필요한 로그가 아니라면 다 지우고 배포하는게 중요하다.
console.log("HelloWorld");

// 개발자가 변수의 값을 확인하기 위한 용도로 사용하는 출력
// --> 통상적으로 console.log와 크게 구분하지 않는다.
console.debug("HelloWorld");

// 시스템의 정보를 출력할 때 사용한다. 역시 개발 단계에서 지우고 배포하는 게 좋다.
console.info("HelloWorld");
// 경보 단계 (에러는 아니지만 정상적이지 않다고 판단되는 경우)
console.warn("HelloWorld");
// 에러! 심각할 경우, 예상하지 못한 에러, 시스템 에러
console.error("HelloWorld");


console.groupEnd();
