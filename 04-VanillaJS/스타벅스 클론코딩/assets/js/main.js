const button = document.querySelector(".color-button");
const color = button.dataset.color;
button.style.border = `2px solid ${color}`;
button.style.color = color;

button.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = color;
    e.target.style.color = "white";
    e.target.style.textDecoration = "underline";
});
button.addEventListener("mouseout", (e) => {
    e.target.style.backgroundColor = "";
    e.target.style.color = color;
    e.target.style.textDecoration = "";
});

document.querySelector(".sec1-img1").animate(
    [
        {
            opacity: 0,
        },
        {
            opacity: 1,
        },
    ],
    {
        duration: 1000,
        delay: 0,
        fill: "both",
    }
);

document.querySelector(".sec1-img2").animate(
    [
        {
            opacity: 0,
        },
        {
            opacity: 1,
        },
    ],
    {
        duration: 1000,
        delay: 300,
        fill: "both",
    }
);
document.querySelector(".sec1-img3").animate(
    [
        {
            opacity: 0,
        },
        {
            opacity: 1,
        },
    ],
    {
        duration: 1000,
        delay: 600,
        fill: "both",
    }
);
document.querySelector(".sec1-img4").animate(
    [
        {
            opacity: 0,
        },
        {
            opacity: 1,
        },
    ],
    {
        duration: 1000,
        delay: 900,
        fill: "both",
    }
);
document.querySelector(".color-button").animate(
    [
        {
            opacity: 0,
        },
        {
            opacity: 1,
        },
    ],
    {
        duration: 1000,
        delay: 1200,
        fill: "both",
    }
);

// for (let i = 1; i < 4; i++) {
//     setInterval(() => {
//         document.querySelector(".rolling").animate(
//             [
//                 {
//                     top: (i * (-20)) + `px`,
//                 },
//             ],
//             {
//                 fill: "both",
//                 duration: 1000,
//             }
//         );
//     }, 2000);
// }
