/** (1) 모듈 참조 */
import fs from "fs";

/** (2) 필요한 변수 생성 */
const target = "c://users/pjm/studynote/06-NODEJS/06-FileIO/docs";

if (!fs.existsSync(target)) {
  // 파라미터 --> 경로, 퍼미션, 콜백함수
  fs.mkdir(target, function (err) {
    if (err) {
      console.error(err);
      return;
    }
    fs.chmodSync(target, "0777");
    console.log(`새로운 ${target} 폴더를 만들었습니다.`);
  });

  console.log(`${target} 폴더의 생성을 요청했습니다.`);
} else {
  // 파일삭제 --> 비어있지 않은 폴더는 삭제 못함.
  fs.rmdir(target, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`${target} 폴더를 삭제했습니다.`);
  });

  console.log(`${target} 폴더의 삭제를 요청했습니다.`);
}
