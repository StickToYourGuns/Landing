// 1
const menuArray = Array.from(document.querySelectorAll(".menu_item_link"));

// 2

let sectionsArray = [];

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
console.log(sectionsArray);


// 3


const rect = sectionsArray[1].getBoundingClientRect();
const xPosition = rect.left;
const yPosition = rect.top;
console.log(xPosition);
console.log(yPosition);





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

// function scrolling(scrollPosition, sectionsArray) {
//     if (scrollPosition > sectionsArray[0] && scrollPosition <= sectionsArray[1]) {
//         menuItemLink[0] = active; 
//     }
// }

//   позиция элемента

// const element = document.getElementById('myDiv');
// const rect = element.getBoundingClientRect();
// const xPosition = rect.left;
// const yPosition = rect.top;

// План
// + 1находим элементы меню. Делаем массив
// + 2находим названия нужных нам id и ищем по ним html секции. Делаем из них массив
// Нужно найти позиции этих секций. то есть из предыдущего массива добыть id
// 3затем нам нужно сделать функцию со следующим принципом работы:
// 4сопоставляем позицию скролла с расположениями элементов. Мы работаем с массивами, поэтому если позиция скролла больше, чем позиция первого элемента из массива секций
