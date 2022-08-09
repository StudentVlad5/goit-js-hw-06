const numberOfCategories = document.querySelectorAll(`#categories > li.item`)
console.log(`Number of categories: ${numberOfCategories.length}`);

const nameOfCategories = document.querySelectorAll(`#categories > li.item > h2`)

const numberCategoryEl =  document.querySelectorAll(`h2 ~ ul`)

// nameOfCategories.forEach(key => console.log(key.textContent));

for(let i=0; i<numberOfCategories.length; i+=1) {
    console.log(`Category: ${nameOfCategories[i].textContent}`);
    console.log(`Elements: ` + numberOfCategories[i].querySelectorAll(`ul > li`).length);
    console.log(`Elements (by the children): ` + numberCategoryEl[i].children.length);
}



// Number of categories: 3
// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
