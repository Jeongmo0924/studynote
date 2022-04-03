# 박정모 HTML 표 연습문제
> 2022-02-24

문제 1.
HTML 테이블을 활용하여 다음의 형태로 본인의 이력서를 작성하시오.

```html
<!DOCTYPE html>
<html lang = "ko">
    <head>
        <met charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <title>이력서</title>
    </head>

    <body>
        <div id="content">
            <div id="resume">
                <table border="1" width="1000" height="1300">
                    <thead>
                        <tr>
                            <td rowspan="4" colspan="3" width="300" height="300" align="center">사진</td>
                            <th colspan="4"><font size="10">이  력  서</font></th>
                        </tr>
                        <tr>
                            <th width="300" align="center">성명</th>
                            <td width="400" align="center">홍길동</td>
                            <th width="300" align="center">주민등록번호</th>
                            <td width="400" align="center">010101-3101010</td>
                        </tr>
                        <tr>
                            <th width="300" align="center">생년월일</th>
                            <td width="400" align="center">2001년 1월 1일</td>
                            <th width="300" align="center">전화번호</th>
                            <td width="400" align="center">010-0101-1010</td>
                        </tr>
                        <tr>
                            <th width="300" align="center">현주소</th>
                            <td colspan="3" width="400" align="center">서울시 강남구 역삼동 ...</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr height="50">
                            <th width="100">년</th>
                            <th width="100">월</th>
                            <th width="100">일</th>
                            <th width="550" colspan="3">학력 및 경력사항</th>
                            <th width="150">발령청</th>
                        </tr>
                        <tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr>
                        <tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr><tr height="50">
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="100"> </th>
                            <th width="550" colspan="3"> </th>
                            <th width="150"> </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </body>
</html>
```

   
### ***실행결과 스크린샷***
![문제1](문제1_실행결과.jpg)
   
---
   