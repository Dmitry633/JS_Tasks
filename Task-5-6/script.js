'use strict';
//1
// let x = 5; alert( x++ );//5- возвращается значение х, а только потом увеличвается на единицу(++х - вернуло бы сразу 6)
// console.log(x++)//6
// alert( ++x );
//2
console.log([ ] + false - null + true);//NaN
console.log([ ]+false) // 'false' -- строка, т.к пустой массив ВСЕГДА преобразуется в пустую строку
console.log([ ]+false - null) // NaN - от строки отнимаем null - это нематематическое действие, в результате которого получаем NaN
console.log([ ]+false - null+ true) //  к NaN добавляем булиновое значение, в итоге получаем NaN

//3
let y = 1; 
let x = y = 2;//необходимо читать справо налево.
 alert(x);
console.log(x);//2
//4
console.log([ ] + 1 + 2);//12 - из-за слоожения 1 с "" получаем строку, и далее получаем "1"+2 - в итоге тоже будет строка "12"
//5
alert( "1"[0] );//1 - строку в этом случае нужно рассматривать аналогично массиву, то есть вывод нулевого по счету символа из строки"1" дает 1
//6
console.log(2 && 1 && null && 0 && undefined);//null - ?возвращается суть первой "лжи", о которую запнулся оператор &&?
console.log(2 && 1 && undefined && 0 && null);//null - ?возвращается суть первой "лжи", о которую запнулся оператор &&?

//7
let a = 3, b = 1;
console.log(!!( a && b ));//false/true(в зависимости от значений a и b)
console.log(( a && b ));//почему то выводит значение b
//8
alert( null || 2 && 3 || 4 ); //3.
//alert( null || 2)// оператор || выбирает правду, т.е 2
//alert( null || 2 && 3) оператор выбирает вторую правду - 3 - почему? -Оператор И возвращает первое ложное значение, но если его нет - то последнее.
//alert( null || 2 && 3 || 4 ); "ИЛИ" "запинается на правде", т.е. в этом случае при виборе между 3 и 4 вернется первое правдивое
// выражение, т.е 3

//9
let c = [1, 2, 3], d = [1, 2, 3];
alert(c == d);//false - Это разные массивы, просто с одинаковыми значениями.
//10
alert( +"Infinity" );//infinity
//console.log(typeof(+"Infinity"))//number
//11
console.log("Ёжик" > "яблоко");//false
console.log("ёжик" > "яблоко");//true - я  - это не последняя буква алфавита, если обращаться к Unicode

//12
console.log(0 || "" || 2 || undefined || true || falsе)//2 - Вернет 2, так как это первое правдивое значение (true)