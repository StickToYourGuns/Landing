const menuArray = Array.from(document.querySelectorAll(".menu_item_link"));

let sectionPositions = [];

let scrollPosition;

function findingSections() {
    let sectionsArray = [];
    menuArray.forEach( function (element) {
        let id = element.href.split("#")[1];
        sectionsArray.push(document.getElementById(id));
    })
    findSectionPositions(sectionsArray);
}

findingSections()


function findSectionPositions(array) {
    sectionPositions = array.map(function (section){
        return ((section.getBoundingClientRect().top) + window.scrollY);
    })
    return (sectionPositions);
}


function comparePositions (scrollPosition) {
    let activeSection = -1;

    for (let i = 0; i < sectionPositions.length; i++) {
        if (scrollPosition >= sectionPositions[i]) {
            activeSection = i;
        } else {
            break;
        }
    }
    
    if (activeSection !== -1) {
        menuArray.forEach(function(element) {
            element.classList.remove("active");
        })
        menuArray[activeSection].classList.add("active")
    }
}


window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    comparePositions (scrollPosition);
    return (scrollPosition);
});