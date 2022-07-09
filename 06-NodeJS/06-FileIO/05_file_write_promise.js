/** (1) 모듈참조 */
import fs from 'fs';

/** (2) 필요한 변수 생성 */
const target = './output_promise.txt';   // 저장할 파일의 경로()
const content = 'Hello World Promise!';  // 저장할 내용
const isExists = fs.existsSync(target);  // 파일의 존재여부 검사

/** (3) 파일을 비동기식으로 파일 쓰기, 삭제 */
if(!isExists) {
    const myPromise = fs.promises.writeFile(target, content);

    myPromise
        .then(() => {
            fs.chmod(target, '0766', (err) => {
                if(err) {
                    console.error(err);
                    return;
                }
                console.debug(target + '의 퍼미션 설정 완료');
            })
            console.debug('저장완료');
        })
        .catch((e) => {
            console.error('저장실패');
            console.error(e);
        });

    console.log(target + '의 파일 저장을 요청했습니다.');
} else {
    /** (3) 파일이 존재할 경우 파일 삭제 */
    fs.promises
        .unlink(target)
        .then(() => {
            console.debug('삭제완료');
        })
        .catch((e) => {
            console.error('삭제실패');
            console.error(e);
        });

    console.log(target + '의 파일 삭제를 요청했습니다,');
}