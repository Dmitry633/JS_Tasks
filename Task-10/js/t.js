let t = 10 % 3;
// seconds = Math.floor((t/1000) % 60);
// console.log(t/1000/60);

// console.log(seconds);

// console.log('Hi!');
console.log(t);

time = {// в {} - заключен возвращаемый объектж
'total' : t, //эту переменную мы будем использовать для остановки таймера(при достижении нуля)
'hours' : hours,
'minutes' : minutes,
'seconds' : seconds
};
for (let key in time) {
    console.log ("Свойство" + key + "имеет значение" + time.key)
    }