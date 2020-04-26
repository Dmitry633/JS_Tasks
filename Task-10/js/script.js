//Любой проект начтнается с назначения О С на всю страницу:
//мы не знаем сколько времени будет загружаться страница
//window.addEventListener('load')// О C load - выполнение скрипта будет только после загрузки каждого элемента страницы - слишком долго
window.addEventListener('DOMContentLoaded', function(){ // О C DOMContentLoaded - выполнение скрипта будет только после загрузки структуры сайта, т.н "DOM дерева"
'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),//Получаем массив всех табов 
    info = document.querySelector('.info-header'),//получаем родителя массива всех табов
    tabContent = document.querySelectorAll('.info-tabcontent');//Получаем массив содержаний табов
//Теперь нужно сделать так, чтобы при выборе одного таба другие - исчезали - здесь применим делегирование
//Лютый препод уже прописал никие классы в цсс для сокрытия табов
    function hideTabContent(a){//ф-ция сокрытия табов
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');//в каждом перебираемом элементе удаляем класс show
            tabContent[i].classList.add('hide');//в каждом перебираемом элементе добавляем класс hide

        }
    };
    hideTabContent(1);//для того, чтобы все табы сокрылись, кроме превого(с индексом ноль)
    //ф-ция показывания таб-контента
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };
    //назначение О С при клике, на каждой из наших табов
    //исп-ем делегирование
     info.addEventListener ('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
        //организуем показывание определенного описания, при нажатии на соответствующий таб - здесь в основе лежит совпадение по порядку табов и описаний
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);//скрываем все описания
                    showTabContent(i);//показываем нужное описание
                    break;
                }
            }
        }
    });
//Задание 10 пишем интерактивный таймер
//Для этого нужно определить ключевые моменты:
//1) Дедлайн
//2)Время, оставшееся до дэдлайна. Т.е. от дэдлайна отнимаем текущее время - из чего мы будем "вытаскивать" часы-минуты-секунды
//3)Настрока таймера на странице - напишем ф-цию, изменяющюю циферки из верстки
//4) ф-ция обновляющяя наш таймер каждую секунду

//1)
    let deadline = '2020-04-25';
//2)
    function getTimeRemaining(endtime) { //в endtime мы будем передавать dedline
        let t = Date.parse(endtime) - Date.parse(new Date()),//переменная для разницы дат // new Date() - выдает текущую дату//результат - в милисекундах
            seconds = Math.floor((t/1000) % 60),//Math.floor - для округления 
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
    // hours = Math.floor((t/(1000*60*60) % 24)),
    // days = Math.floor((t/(1000*60*60*24))) //если в таймере нужны дни

    //экспортировать из функции несколько переменнжых мы не можем, но объект - можем:

        return{// в {} - заключен возвращаемый объектж
            'total' : t, //эту переменную мы будем использовать для остановки таймера(при достижении нуля)
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }
    //3)
    //При утановке таймера на странице нам важно знать:
    //1. где мы его устанавливаем (в нашем случае это блок таймера <div></div>  с id = 'timer')
    //2. deadline
    function setClock(id, endtime){//id - из верстки(для того, чтобы нашли этот элемент)
//для изменения статических цифр из верстки в динамические данные нам нужно получить эти элементы:
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'), //получаем из блока, полученного в переменной 
                minutes = timer.querySelector('.minutes'), //получаем из блока, полученного в переменной timer
                seconds = timer.querySelector('.seconds'), //получаем из блока, полученного в переменной timer
                timeInterval = setInterval(updateClock, 1000);
//4)
                function updateClock() {//ф-ция , которая делает таймер динамичным
                    let t = getTimeRemaining(endtime);
                    /* hours.textContent = t.hours;//берем hours из полученных элементов и присваиваем ему соответствующее свойство объекта из return,
                //а этот объект сейчас помещен в переменную t
                     minutes.textContent = t.minutes;
                     seconds.textContent = t.seconds;*/
                    function addZero(x) {                       //решение препода
                        if (x < 10){ 
                            return ('0'+ x);
                        } else return x;
                    }
                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);
                        /*if(t.hours < 10){                     //мое решение
                            hours.textContent = '0'+ t.hours; 
                        }else{
                            hours.textContent = t.hours;
                        }
                        if(t.minutes < 10){
                            minutes.textContent = '0'+ t.minutes; 
                        }else{
                            minutes.textContent = t.minutes;
                        }
                        if(t.seconds < 10){
                            seconds.textContent = '0'+ t.seconds; 
                        }else{
                            seconds.textContent = t.seconds;
                        }*/

       
                     if (t.total <= 0) {
                         clearInterval(timeInterval);
                         hours.textContent = '0'+ 0;    //решение препода
                         minutes.textContent = '0'+ 0;
                         seconds.textContent = '0'+ 0;
                    }
                /*for (let key in t) {                  //мое решение
                    if (t[key] < 0) {
                        hours.textContent = '0'+ 0;
                        minutes.textContent = '0'+0;
                        seconds.textContent = '0'+0;
                    }
                   
                }*/
                
    }
                
}

    setClock('timer', deadline);//мы можем указать другой id или endtime и тем самым мы создадим другой таймер
    
});
