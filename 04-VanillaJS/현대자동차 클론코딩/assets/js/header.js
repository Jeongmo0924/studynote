document.querySelector("#introduce").addEventListener("mouseover", (e) => {
    const hidden = document.querySelector(".hiddenheader");
    hidden.classList.remove("hide");
});

document.querySelector("#hiddenclose").addEventListener("click", (e) => {
    e.preventDefault();
    const hidden = document.querySelector(".hiddenheader");
    hidden.classList.add("hide");
});

document.querySelector("#language").addEventListener("click", (e) => {
    const hidden2 = document.querySelector("#hiddenlang");
    hidden2.classList.toggle("hide");
    const arrow = document.querySelector("#arrow");
    arrow.classList.toggle("clickedarrow");
    const hidden = document.querySelector(".hiddenheader");
    hidden.classList.add("hide");
});

document.querySelector('#header-menubar').querySelectorAll(".header-menu").forEach((v) => {
    v.addEventListener("mouseover", (e) => {
        console.log(e.currentTarget.innerHTML);
        if (e.currentTarget.innerHTML != '회사소개') {
            document.querySelector(".hiddenheader").classList.add("hide");
        }
    });
});

document.querySelectorAll(".lang-opt").forEach((v, i) => {
    v.addEventListener("click", (e) => {
        e.preventDefault();
        if (!e.currentTarget.classList.contains("selected")) {
            document.querySelector(".selected").classList.remove("selected");
            e.currentTarget.classList.add("selected");
        }
        document.querySelector("#hiddenlang").classList.add("hide");
        document.querySelector("#arrow").classList.remove('clickedarrow');
    });
});
