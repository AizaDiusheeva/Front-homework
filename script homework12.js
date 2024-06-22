// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

function get_sum(num1 = 0, num2 =0)
{ if (num1 > num2)
   { return num1*num2};
   {return num1+num2 };
    {return num1 > num2};
    }
let result1 =get_sum(6,4)
let result2 = get_sum(3,7)
let result3 =get_sum(1,2)

console.log(result1);
console.log(result2);
console.log(result3);



// Написать  функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
function day () {
let secund = (120)
let sutki = (24)
return secund*24
}
console.log(day());



// Написать функцию isPrime, которая принимает число и возвращает true, если оно простое (имеет только два делителя: 1 и само число), и false в противном случае.
function isPrime(x) {
    if (x < 2) return false;

    for (var i = x-1; i > 1; i--) {
        if (x%i == 0) {
            return false;
        }
    }

    return true;
}

for (let i = -10; i < 10; i++) {
    if(isPrime(i)) {
        console.log(i);
    }
}



// Написать функцию, которая в качестве аргументов получает два числа и выводит в консоль наименьшее.
function get_Mim(num1 = 0,  num2 =0)
{if (num1 < num2)
    {return num1}
return num2
}
let result4 = get_Mim (10,25)
console.log(result4);



// Написать  функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 

// function  C(n) 
    
// for (i =1; i <= n; i++){
//     for( j=2; j < i; j++)}
// {if(i% j == 0) { continue c;}
// }
//   c(10)
//     console.log(i);
   