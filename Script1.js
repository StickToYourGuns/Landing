let imageArray = Array.from(document.querySelectorAll(".second_step_image"));
let addCircles = (imageArray.length - 1);
const arrowLeft = document.querySelector(".arrow");
const arrowRight = document.querySelector(".arrow_mirror");
let texts1 = Array.from(document.querySelectorAll(".specs_discription1"));
let texts2 = Array.from(document.querySelectorAll(".specs_discription2"));
let texts3 = Array.from(document.querySelectorAll(".specs_discription3"));
let texts4 = Array.from(document.querySelectorAll(".specs_discription4"));


function addingSMTH(count) {
    const circleParent = document.querySelector(".second_step_nav_container");
    const titleParent = document.querySelector(".second_step_objects");
    for (let i = 1; i <= count; i++) {
        let newCircle = document.createElement("div");
        let newTitle = document.createElement("p");
        newCircle.classList.add("second_step_nav_item");
        newCircle.classList.add("circle");
        newTitle.classList.add("second_step_object_name");
        newCircle.setAttribute("data-number", (i));
        newTitle.setAttribute("data-number", (i));
        circleParent.append(newCircle);
        titleParent.append(newTitle);
        newTitle.innerHTML = (imageArray[i].alt);
    }

}

addingSMTH(addCircles);


let circles = Array.from(document.querySelectorAll(".circle"));
let titles = Array.from(document.querySelectorAll(".second_step_object_name"));


function scrollClassesSelect(element, direction) {
    let activeElement;
    let nextElement;
    let prevElement;

    element.forEach(function (value, index) {
        if (value.classList.contains("active")) {
            activeElement = index;
            value.classList.remove("active");
        }
    });
    if (direction == "right") {
        nextElement = activeElement + 1;
        if (nextElement == element.length) {
            nextElement = 0;
        }
        element[nextElement].classList.add("active")
    } else {
        prevElement = activeElement - 1;
        if (prevElement == -1) {
            prevElement = (element.length - 1);
        }
        element[prevElement].classList.add("active")
    }
}

function scrollByElement(direction) {
    scrollClassesSelect(imageArray, direction);
    scrollClassesSelect(circles, direction);
    scrollClassesSelect(titles, direction);
    scrollClassesSelect(texts1, direction);
    scrollClassesSelect(texts2, direction);
    scrollClassesSelect(texts3, direction);
    scrollClassesSelect(texts4, direction);
}

function toggleClassesSelect(element, event) {
    element.forEach(function (item) {
        item.classList.remove("active");
    })
    element[event.currentTarget.dataset.number].classList.add("active");
}

function selectByElement(event) {
    toggleClassesSelect(imageArray, event);
    toggleClassesSelect(circles, event);
    toggleClassesSelect(titles, event);
}


arrowLeft.addEventListener("click", () => scrollByElement("left"));
arrowRight.addEventListener("click", () => scrollByElement("right"));

circles.forEach(function (circle) {
    circle.addEventListener("click", (event) => selectByElement(event));
});

titles.forEach(function (title) {
    title.addEventListener("click", (event) => selectByElement(event));
});


// Шаг 1. Окончание слайдера
// Переназвать переменные (я вроде понял что имеет в виду Соня)
// + Переписать addingCircles и addingTitles и вынести по максимум повторяющиеся строки в одну функцию
// Вынести handleArrowClick как в тоглклассес, не забыть при этом параметры

// Шаг 2.
// Подсветка якорей

// Шаг 3.
// Попы

// Шаг 4.
// Видос