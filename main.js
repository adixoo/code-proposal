const { animate, scroll } = Motion;

const username = localStorage.getItem("username")

if (username) {
    // disable input slide
    document.querySelector(".text-input").style.display = "none"
    document.querySelector(".name").innerHTML = username
}
else {
    document.querySelector(".slide1").style.display = "none"
    document.querySelector(".slide2").style.display = "none"
    document.querySelector(".slide3").style.display = "none"
    document.querySelector(".slide4").style.display = "none"
    document.querySelector("button").addEventListener("click", () => {
        let name = document.querySelector("input").value
        localStorage.setItem("username", name)
        window.location.reload()
    })
}

// slide 1
animate(
    ".slide1 span",
    { scale: [0.1, 1], opacity: [0, 1] },
    {
        type: "spring",
        duration: 1,
        delay: 1,
        bounce: 0.3,
    }
);
setTimeout(() => {
    animate(
        ".slide1 span",
        { scale: [1, 0], opacity: [1, 0] },
        {
            type: "spring",
            duration: 1,
        }
    );
    setTimeout(() => {
        localStorage.removeItem("username")
        document.querySelector(".slide1").style.display = "none";
    }, 1100);
}, 4000);
// slide 2
animate(
    ".slide2 span",
    { x: [-60, 0], opacity: [0, 1] },
    {
        type: "spring",
        duration: 1,
        delay: 5,
    }
);
setTimeout(() => {
    animate(
        ".slide2 span",
        { x: [0, 60], opacity: [1, 0] },
        {
            type: "spring",
            duration: 1,
        }
    );
    setTimeout(() => {
        document.querySelector(".slide2").style.display = "none";
    }, 1100);
}, 8000);
// slide 3
animate(
    ".slide3 span",
    { scale: [0.1, 1], opacity: [0, 1] },
    {
        type: "spring",
        duration: 1,
        delay: 9,
    }
);
setTimeout(() => {
    animate(
        ".slide3 span",
        { scale: [1, 0], opacity: [1, 0] },
        {
            type: "spring",
            duration: 1,
        }
    );
    setTimeout(() => {
        document.querySelector(".slide3").style.display = "none";
    }, 1100);
}, 12000);
// slide 4
animate(
    ".slide4",
    { y: [50, 0], opacity: [0, 1] },
    {
        type: "spring",
        duration: 1,
        stifness: 300,
        delay: 13,
    }
);