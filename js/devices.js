TweenMax.to(
    ".device-container",
    1,
    {
        delay: 0.2,
        opacity: 1,
        ease: Power4.easeInOut,
    },
    1
);
TweenMax.from(
    ".credits",
    0.3,
    {
        opacity: 0,
        x: -100,
        delay: 0,
        ease: Power4.easeInOut,
    },
    1
);
//
document.getElementById("open").addEventListener("click", function () {
    TweenMax.to(
        ".popup-container",
        0.25,
        {
            scale: 1,
            ease: Power4.easeInOut,
        },
        1
    );
});

document.querySelector("#close").addEventListener("click", function () {
    TweenMax.to(
        ".popup-container",
        0.2,
        {
            scale: 0,
            ease: Power4.easeInOut,
        },
        1
    );
});
