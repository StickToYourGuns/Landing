const imageArray = Array.from(document.querySelectorAll(".second_step_image"));
const needToAdd = (imageArray.length - 1);
const arrowLeft = document.querySelector(".arrow");
const arrowRight = document.querySelector(".arrow_mirror");
const texts1 = Array.from(document.querySelectorAll(".specs_discription1"));
const texts2 = Array.from(document.querySelectorAll(".specs_discription2"));
const texts3 = Array.from(document.querySelectorAll(".specs_discription3"));
const texts4 = Array.from(document.querySelectorAll(".specs_discription4"));


function creatingElements(count) {
    const circleParent = document.querySelector(".second_step_nav_container");
    const titleParent = document.querySelector(".second_step_objects");
    for (let i = 1; i <= count; i++) {
        const newCircle = document.createElement("div");
        const newTitle = document.createElement("p");
        newCircle.classList.add("second_step_nav_item", "circle");
        newTitle.classList.add("second_step_object_name");
        newCircle.setAttribute("data-number", (i));
        newTitle.setAttribute("data-number", (i));
        circleParent.append(newCircle);
        titleParent.append(newTitle);
        newTitle.innerHTML = (imageArray[i].alt);
    }

}

creatingElements(needToAdd);

const circlesArray = Array.from(document.querySelectorAll(".circle"));
const titlesArray = Array.from(document.querySelectorAll(".second_step_object_name"));

function scrollClassesSelect(array, direction) {
    let activeElement;
    let nextElement;
    let prevElement;

    array.forEach(function (value, index) {
        if (value.classList.contains("active")) {
            activeElement = index;
            value.classList.remove("active");
        }
    });
    if (direction == "right") {
        nextElement = activeElement + 1;
        if (nextElement == array.length) {
            nextElement = 0;
        }
        array[nextElement].classList.add("active")
    } else {
        prevElement = activeElement - 1;
        if (prevElement == -1) {
            prevElement = (array.length - 1);
        }
        array[prevElement].classList.add("active")
    }
}

function scrollByElement(direction) {
    scrollClassesSelect(imageArray, direction);
    scrollClassesSelect(circlesArray, direction);
    scrollClassesSelect(titlesArray, direction);
    scrollClassesSelect(texts1, direction);
    scrollClassesSelect(texts2, direction);
    scrollClassesSelect(texts3, direction);
    scrollClassesSelect(texts4, direction);
}

function toggleClassesSelect(array, event) {
    array.forEach(function (item) {
        item.classList.remove("active");
    })
    array[event.currentTarget.dataset.number].classList.add("active");
}

function selectByElement(event) {
    toggleClassesSelect(imageArray, event);
    toggleClassesSelect(circlesArray, event);
    toggleClassesSelect(titlesArray, event);
}


arrowLeft.addEventListener("click", () => scrollByElement("left"));
arrowRight.addEventListener("click", () => scrollByElement("right"));

circlesArray.forEach(function (circle) {
    circle.addEventListener("click", (event) => selectByElement(event));
});

titlesArray.forEach(function (title) {
    title.addEventListener("click", (event) => selectByElement(event));
});