// 1
const menuArray = Array.from(document.querySelectorAll(".menu_item_link"));

// 2

// let sectionsArray = [];

// const IdArray = menuArray.forEach( function (element) {
//     let id = element.href.split("#")[1];
//     sectionsArray.push(document.getElementById(id));
// });

let sectionPositions = [];

function findingSections() {
    let sectionsArray = [];
    menuArray.forEach( function (element) {
        let id = element.href.split("#")[1];
        sectionsArray.push(document.getElementById(id));
    })
    findSectionPositions(sectionsArray);
}

findingSections()



console.log(menuArray);

function findSectionPositions(array) {
    sectionPositions = array.map(function (section){
        return (section.getBoundingClientRect().top);
    })
    console.log(sectionPositions);
    return (sectionPositions);
}

// если позиция скролла > sectionPositions[0], то мы делаем активным menuArray[0], если sectionPositions[1], то мы делаем активным menuArray[1] и тд

function comparePositions (scrollPosition) {
    if ((scrollPosition >= sectionPositions[0]) && (scrollPosition < sectionPositions[1])) {
        console.log(scrollPosition, sectionPositions[0]);
        menuArray.forEach (function (element) {
            element.classList.remove("active");
        })
        menuArray[0].classList.add("active");
    } else if ((scrollPosition >= sectionPositions[1]) && (scrollPosition < sectionPositions[2])) {
        console.log(scrollPosition, sectionPositions[1]);
        menuArray.forEach (function (element) {
            element.classList.remove("active");
        })
        menuArray[1].classList.add("active");
    } else if ((scrollPosition >= sectionPositions[2]) && (scrollPosition < sectionPositions[3])) {
        console.log(scrollPosition, sectionPositions[2]);
        menuArray.forEach (function (element) {
            element.classList.remove("active");
        })
        menuArray[2].classList.add("active");
    } else if ((scrollPosition >= sectionPositions[3]) && (scrollPosition < sectionPositions[4])) {
        console.log(scrollPosition, sectionPositions[3]);
        menuArray.forEach (function (element) {
            element.classList.remove("active");
        })
        menuArray[3].classList.add("active");
    } else if ((scrollPosition >= sectionPositions[4]) && (scrollPosition < sectionPositions[5])) {
        console.log(scrollPosition, sectionPositions[3]);
        menuArray.forEach (function (element) {
            element.classList.remove("active");
        })
        menuArray[4].classList.add("active");
    }
}


window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    comparePositions (scrollPosition)
});




// план:

// 1.Переписать компейр
// 2.Заказать пепперони