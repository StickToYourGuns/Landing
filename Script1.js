let imageArray = Array.from(document.querySelectorAll(".second_step_image"));
let circles = Array.from(document.querySelectorAll(".circle"));
let titles = Array.from(document.querySelectorAll(".second_step_object_name"));
let texts1 = Array.from(document.querySelectorAll(".specs_discription1"));
let texts2 = Array.from(document.querySelectorAll(".specs_discription2"));
let texts3 = Array.from(document.querySelectorAll(".specs_discription3"));
let texts4 = Array.from(document.querySelectorAll(".specs_discription4"));

const arrowLeft = document.querySelector(".arrow");
const arrowRight = document.querySelector(".arrow_mirror");


arrowLeft.addEventListener("click", () => scroll("left"));
arrowRight.addEventListener("click", () => scroll("right"));


console.log(imageArray)
console.log(circles)
console.log(titles)

function scroll(direction) {
    let activeElement;
    let nextElement;
    let prevElement;

// ПИКЧИ

    imageArray.forEach (function (value, index) {
        if (value.classList.contains("active")) {
            activeElement = index;
            console.log(activeElement)
            value.classList.remove("active");
        }
    });
    if (direction == "right") {
        nextElement = activeElement + 1;
        if (nextElement == imageArray.length) {
            nextElement = 0;
        }
        imageArray[nextElement].classList.add("active")
    } else {
        prevElement = activeElement - 1;
        if (prevElement == -1) {
            prevElement = (imageArray.length - 1);
        }
        imageArray[prevElement].classList.add("active")
    }

    // КРУГИ

    circles.forEach (function (value, index) {
        if (value.classList.contains("active")) {
            activeElement = index;
            console.log(activeElement)
            value.classList.remove("active");
        }
    });
    if (direction == "right") {
        nextElement = activeElement + 1;
        if (nextElement == circles.length) {
            nextElement = 0;
        }
        circles[nextElement].classList.add("active")
    } else {
        prevElement2 = activeElement - 1;
        if (prevElement == -1) {
            prevElement = (circles.length - 1);
        }
        circles[prevElement].classList.add("active")
    }

    // ТАЙТЛЫ

    titles.forEach (function (value, index) {
        if (value.classList.contains("active")) {
            activeElement = index;
            console.log(activeElement)
            value.classList.remove("active");
        }
    });
    if (direction == "right") {
        nextElement = activeElement + 1;
        if (nextElement == titles.length) {
            nextElement = 0;
        }
        titles[nextElement].classList.add("active")
    } else {
        prevElement2 = activeElement - 1;
        if (prevElement == -1) {
            prevElement = (titles.length - 1);
        }
        titles[prevElement].classList.add("active")
    }

    // ТЕКСТЫ бля ну и хуета

    texts1.forEach (function (value, index) {
        if (value.classList.contains("active")) {
            activeElement = index;
            console.log(activeElement)
            value.classList.remove("active");
        }
    });
    if (direction == "right") {
        nextElement = activeElement + 1;
        if (nextElement == texts1.length) {
            nextElement = 0;
        }
        texts1[nextElement].classList.add("active")
    } else {
        prevElement2 = activeElement - 1;
        if (prevElement == -1) {
            prevElement = (texts1.length - 1);
        }
        texts1[prevElement].classList.add("active")
    }

    texts2.forEach (function (value, index) {
        if (value.classList.contains("active")) {
            activeElement = index;
            console.log(activeElement)
            value.classList.remove("active");
        }
    });
    if (direction == "right") {
        nextElement = activeElement + 1;
        if (nextElement == texts2.length) {
            nextElement = 0;
        }
        texts2[nextElement].classList.add("active")
    } else {
        prevElement2 = activeElement - 1;
        if (prevElement == -1) {
            prevElement = (texts2.length - 1);
        }
        texts2[prevElement].classList.add("active")
    }

    texts3.forEach (function (value, index) {
        if (value.classList.contains("active")) {
            activeElement = index;
            console.log(activeElement)
            value.classList.remove("active");
        }
    });
    if (direction == "right") {
        nextElement = activeElement + 1;
        if (nextElement == texts3.length) {
            nextElement = 0;
        }
        texts3[nextElement].classList.add("active")
    } else {
        prevElement2 = activeElement - 1;
        if (prevElement == -1) {
            prevElement = (texts3.length - 1);
        }
        texts3[prevElement].classList.add("active")
    }

    texts4.forEach (function (value, index) {
        if (value.classList.contains("active")) {
            activeElement = index;
            console.log(activeElement)
            value.classList.remove("active");
        }
    });
    if (direction == "right") {
        nextElement = activeElement + 1;
        if (nextElement == texts4.length) {
            nextElement = 0;
        }
        texts4[nextElement].classList.add("active")
    } else {
        prevElement2 = activeElement - 1;
        if (prevElement == -1) {
            prevElement = (texts4.length - 1);
        }
        texts4[prevElement].classList.add("active")
    }
}



// ПЛАН:


// 3. Тексты
