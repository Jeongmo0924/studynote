/** 별찍기 */
/*
- i가 0일 때 1회를 수행하기 위해서 'j < 1'
- i가 1일 때 2회를 수행하기 위해서 'j < 2'
- i가 2일 때 3회를 수행하기 위해서 'j < 3'
- i가 3일 때 4회를 수행하기 위해서 'j < 4'
- i가 n일 때 i+1회를 수행하기 위해서 'j < i + 1'
*/

for(let i=0; i<7; i++) {
    let str="";

    for(let j = 0; j < i + 1; j++) {
        str += "*";
    }

    console.log(str);
}

