document.querySelectorAll(".instagram").forEach((v, i) => {
    v.addEventListener('mouseover', e => {
        e.currentTarget.style.opacity = '1';
    })
    v.addEventListener('mouseout', e => {
        e.currentTarget.style.opacity = '0';
    })
});
