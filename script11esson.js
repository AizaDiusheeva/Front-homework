// 1 уровень сложности: 1. Написать код, выполнив задание: если значение объекта является числом (number), то его значение надо увеличить вдвое.

// Пример объекта:


let menu = {
    width: 200, 
    height: 300,
    title: "my menu"
};

for(i =200; b = 300; i++) 
    console.log(i+2);

// // Результат:
for(let key in menu)
    console.log(key)


// let menu = {
//     width: 400, 
//     height: 600,
//     title: "my menu"
// };


// В следующих задачах будет использоваться массив из объектов, каждый из которых описывает определенный товар. 
// Пример массива

let products= [
    {
    id: 1,
    title: "bicycle",
    price: 45000,
    discount: 10
    },
    {
    id: 2,
    title: "roller-skates",
    price: 15000,
    discount: 5
    },
    {
    id: 3,
    title: "Kick scooter",
    price: 10000,
    discount: 30
    },
    {
    id: 4,
    title: "skis",
    price: 25000,
    discount: 20
    },
    {
    id: 5,
    title: "skate",
    price: 10000,
    discount: 0
}
];
for(let i =0; i < products.length; i++ )
console.log(products[i]);

// // 2.1. Написать цикл, который выводит только названия товаров.
for(let i =0; i < products.length; i++ )
    console.log(products[i].title);

// // // 2.2. Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”. Пример: bicycle (45000) 
for(let i =0; i < products.length; i++ )
             console.log( '${products{i}.title}: ${poducts[i].price} ' );

// // // 2.3. Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”
for(let i =0; i < products.length; i++ )
    console.log(` ${products[i].title}: ${products[i].discount}`);
    
