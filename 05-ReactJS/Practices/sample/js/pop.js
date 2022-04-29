document.addEventListener('scroll', e => {
    const currentScrollTop = document.documentElement.scrollTop;
    console.log(currentScrollTop);
    if(currentScrollTop > 100){
        document.querySelector('#pop').classList.add('pop');
    } else {
        document.querySelector('#pop').classList.remove('pop');
    }
})