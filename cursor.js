const cursor = document.querySelector(".custom-cursor");

if (cursor) {

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;


    /* Track mouse position */

    document.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

    });


    /* Smooth cursor movement */

    function animateCursor() {

        cursorX += (mouseX - cursorX) * 0.22;
        cursorY += (mouseY - cursorY) * 0.22;

        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";

        requestAnimationFrame(animateCursor);
    }

    animateCursor();


    /* Grow cursor over clickable elements */

    const interactiveElements =
        document.querySelectorAll("a, button");


    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            cursor.classList.add("cursor-hover");

        });


        element.addEventListener("mouseleave", () => {

            cursor.classList.remove("cursor-hover");

        });

    });


    /* Hide when mouse leaves browser */

    document.addEventListener("mouseleave", () => {

        cursor.style.opacity = "0";

    });


    document.addEventListener("mouseenter", () => {

        cursor.style.opacity = "1";

    });

}
