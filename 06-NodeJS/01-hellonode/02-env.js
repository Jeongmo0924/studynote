// process.env.환경변수이름
// 해킹이 됐다? -> node가 가동중인 곳이 입구일 가능성이 큼(누구나 접속할 수 있게 열려있으므로)
// MYSQL 환경변수 추가했을 때 처럼 NODEMESSAGE 라는 환경변수를 추가하고 아무 내용이나 넣어보세요.
console.log(process.env.NODE_MSG);
