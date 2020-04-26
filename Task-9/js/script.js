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
});