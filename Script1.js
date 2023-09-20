let imageArray = Array.from(document.querySelectorAll(".second_step_image"));
let addCircles = (imageArray.length - 1);
const arrowLeft = document.querySelector(".arrow");
const arrowRight = document.querySelector(".arrow_mirror");
let texts1 = Array.from(document.querySelectorAll(".specs_discription1"));
let texts2 = Array.from(document.querySelectorAll(".specs_discription2"));
let texts3 = Array.from(document.querySelectorAll(".specs_discription3"));
let texts4 = Array.from(document.querySelectorAll(".specs_discription4"));


function addingCircles(count) {
    const parent1 = document.querySelector(".second_step_nav_container");
    for (let i = 1; i <= count; i++) {
        let newCircle = document.createElement("div");
        newCircle.classList.add("second_step_nav_item");
        newCircle.classList.add("circle");
        newCircle.setAttribute("data-number", (i));
        parent1.append(newCircle);
        console.log(i)
    }
}

addingCircles(addCircles);

function addingTitles(count) {
    const parent2 = document.querySelector(".second_step_objects");
    for (let i = 1; i <= count; i++) {
        let newTitle = document.createElement("p");
        newTitle.classList.add("second_step_object_name");
        newTitle.setAttribute("data-number", (i));
        parent2.append(newTitle);
        newTitle.innerHTML = (imageArray[i].alt);
    }
}

addingTitles(addCircles);

let circles = Array.from(document.querySelectorAll(".circle"));
let titles = Array.from(document.querySelectorAll(".second_step_object_name"));

function gigaScroll(direction) {
    function handleArrowClick(element) {
        let activeElement;
        let nextElement;
        let prevElement;

        element.forEach(function (value, index) {
            if (value.classList.contains("active")) {
                activeElement = index;
                console.log(activeElement)
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
    handleArrowClick(imageArray);
    handleArrowClick(circles);
    handleArrowClick(titles);
    handleArrowClick(texts1);
    handleArrowClick(texts2);
    handleArrowClick(texts3);
    handleArrowClick(texts4);
}

function toggleClasses(element, event) {
    element.forEach(function (item) {
        item.classList.remove("active");
    })
    element[event.currentTarget.dataset.number].classList.add("active");
}

function selectByElement(event) {
    toggleClasses(imageArray, event);
    toggleClasses(circles, event);
    toggleClasses(titles, event);
}


arrowLeft.addEventListener("click", () => gigaScroll("left"));
arrowRight.addEventListener("click", () => gigaScroll("right"));

circles.forEach(function (circle) {
    circle.addEventListener("click", (e) => selectByElement(e));
});

titles.forEach(function (title) {
    title.addEventListener("click", (e) => selectByElement(e));
});


// Шаг 1. Окончание слайдера
// Переназвать переменные (я вроде понял что имеет в виду Соня)
// Переписать addingCircles и addingTitles и вынести по максимум повторяющиеся строки в одну функцию
// Вынести handleArrowClick как в тоглклассес, не забыть при этом параметры

// Шаг 2. 
// Подсветка якорей

// Шаг 3.
// Попы

// Шаг 4.
// Видос