// 1
const menuArray = Array.from(document.querySelectorAll(".menu_item_link"));

// 2

const sectionsArray = [];

// const IdArray = menuArray.forEach( function (element) {
//     let id = element.href.split("#")[1];
//     sectionsArray.push(document.getElementById(id));
// });



function findingSections(array) {
    menuArray.forEach( function (element) {
        let id = element.href.split("#")[1];
        array.push(document.getElementById(id));
    })
}

findingSections(sectionsArray);


console.log(menuArray);
// console.log(IdArray);
console.log(sectionsArray);


// Позиция скролла


window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
});



// function scrolling(scrollPosition) {
//     if (scrollPosition > 0 && scrollPosition <= id2) {
//         делаем активным первый 
//     }
// }

function scrolling(scrollPosition, sectionsArray) {
    if (scrollPosition > sectionsArray[0] && scrollPosition <= sectionsArray[1]) {
        menuItemLink[0] = active; 
    }
}

//   позиция элемента

// var element = document.getElementById('myDiv');
// var rect = element.getBoundingClientRect();
// var xPosition = rect.left;
// var yPosition = rect.top;

// План
// + 1находим элементы меню. Делаем массив
// + 2находим названия нужных нам id и ищем по ним html элементы. Делаем из них массив
// 3затем нам нужно сделать функцию со следующим принципом работы:
// 4сопоставляем позицию скролла с расположениями элементов. Мы работаем с массивами, поэтому если позиция скролла больше, чем позиция первого элемента из массива секций
