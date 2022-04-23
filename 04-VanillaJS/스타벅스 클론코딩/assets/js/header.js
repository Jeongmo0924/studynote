document.querySelector('#searchicon').addEventListener('click', e => {
    document.querySelector('.headerlink1').style.left = '-140px';
    const input = document.querySelector('#inputsearch');
    if(input.style.width == '140px'){
        if(!input.value){
            alert('검색어를 입력하세요.');
        }
    }input.style.width = '140px';
    
});

const headermenu = document.querySelector('.headermenu');
const headeritems = document.querySelectorAll('.headeritems');

headeritems.forEach((v, i) => {
    v.addEventListener('mouseover', (e) => {
        const names = e.currentTarget.dataset.names;
        document.querySelectorAll('.headermenu').forEach((v, i) => {
            v.classList.add('hidden');
            if(v.getAttribute('id') == names){
                v.classList.remove('hidden');
            }
        })
    })
    v.addEventListener('mouseout', (e) => {
        document.querySelectorAll('.headermenu').forEach((v, i) => {
            v.classList.add('hidden');
        });
    });
})