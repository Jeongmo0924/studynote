import axios from "axios";

const url = "http://itpaper.co.kr/data/grade_card.json";

(async () => {
  let json = null;

  try {
    const response = await axios.get(url);
    json = response.data;
  } catch (err) {
    const errorMsg = "[" + err.response.status + "] " + err.response.statusText;
    console.error(errorMsg);
    return;
  }

  json.grade_card.map((v, i) => {
    console.group(i + "번째 항목 ---");
    console.log("이름 : %s, 학년 : %d, 성별 : %s, 국어 : %d, 영어 : %d, 수학 : %d, 과학 : %d", v.이름, v.학년, v.성별, v.국어, v.영어, v.수학, v.과학);
    console.groupEnd();
  });
})();
