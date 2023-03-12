TweenMax.to(
    ".loader",
    0.8,
    {
        delay: 0.3,
        opacity: 1,
        ease: Power4.easeInOut,
    },
    0.2
);
TweenMax.to(
    ".loader",
    0.8,
    {
        delay: 1,
        opacity: 0,
        ease: Power4.easeInOut,
    },
    0.2
);

// TweenMax.from(
//     ".credits",
//     0.5,
//     {
//         delay: 1.3,
//         opacity: "0",
//         x: -100,
//         ease: Power4.easeInOut,
//     },
//     1
// );
