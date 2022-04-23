document.querySelector('.color-button').addEventListener('mouseover', (e) => {
    const target = document.querySelector('.color-button');
    const color = getComputedStyle(target).color;
    console.log(color);
    target.style.backgroundColor = color;
    target.style.color = 'white';
    target.style.textDecoration = 'underline';

    target.addEventListener('mouseout', (e) => {
        
    })
})