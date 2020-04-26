'use strict';
let money, time;											//объявляем переменный - делаем их глобальными, для их видимости вне функции
function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == " " || money == null) { /*проверки 1) - в коде должно быть число (если будет текст, 
		то условие выдаст true и цикл повторится) 2) не должно быть пустой строки (если будет, то -//- 3) Чтобы юзер не нажал "отмена")*/
	 	money = +prompt("Ваш бюджет на месяц?", '');

	}
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function(){	/*добавляем методы в наш объект, а методы объекта - это функции. Методы создаются также как и свойства, 
		но в значении этот свойства прописывается действие(функция) - в качкстве действий вырезаем функционал функций из Задания 3*/
		for (let i =0; i < 2; i++)	{					
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');
			
				if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
				&& a != '' && b != '' && a.length < 50) {
					console.log('done');
					appData.expenses[a] = b;		
			} else {
				i--
			}
		}
	},								//для использования этого метода нужно записать: addData.chooseExpenses()
	detectDayBudget: function(){
		appData.moneyPerDay = (appData.budget / 30).toFixed(); 
		alert('Ежедневный бюджет: ' + appData.moneyPerDay + "руб.");
	},
	detectLevel: function(){
		if (appData.moneyPerDay < 100) {
			console.log('Минимальный уровень достатка') ;
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('Средний уровень достатка') ;
		} else if ( appData.moneyPerDay > 2000) {
			console.log('Высокий уровень достатка') ;
		} else {
			console.log ('Произошла ошибка')
		}
	},
	checkSavings: function(){
		if(appData.savings == true){
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");
	
			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}

	},
	chooseOptExpenses: function(){
		for (let i = 1; i < 4; i++)	{						
			let a = prompt("Статья необязательных расходов?", "");
			appData.optionalExpenses[i] = a;		
			console.log(appData.optionalExpenses);			
		}
	},
	/*chooseIncome: function() {//Создадим новый метод КОД ВЫДАЕТ ОШИБКУ ПРИ ОТМЕНЕ ИЗ-ЗА SPLIT(код успевает дойти до этого метода,
	//	 до того, как пользователь может нажать "отмена")ТАКЖЕ ПРИ НЕКОРРЕКТНОМ ВВОДЕ 2-3 РАЗА ПОВТОР ВОПРОСА ПРОИСХОДИТ ТАКЖЕ 2-3 РАЗА
	//	 (думаю это из-за вызова appData.chooseIncome() в блоке else)
		let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '' );// - ответ получаем как строку

		appData.income = items.split(', ');//запишем ответы пользователя - строку в массив income -для этого используем split

		appData.income.push(prompt("Может что-то еще?"));
		appData.income.sort();
		for (let key of appData.income){

			if (typeof(key) === 'string' && key != '' &&  key != null){
				console.log(key)
			}

			else{
				console.log("Произошла ошибка, введите корректные данные");
				//appData.chooseIncome();
			}
		}*/
	chooseIncome: function() {
		for(let k=0; k<1; k++){
			let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '' );// - ответ получаем как строку
				if (typeof(items) != 'string' || items == "" || typeof(items) == null) {
					console.log("Произошла ошибка, введите корректные данные");
					k--;
				}
				else{
					appData.income = items.split(', ');//запишем ответы пользователя - строку в массив income -для этого используем split
					appData.income.push(prompt("Может что-то еще?"));
					appData.income.sort();
				}
			}
				
		appData.income.forEach(function(item, i){
			alert("Способы доп. заработка: " + (i+1) + " - " + item );
		})
	}
};
console.log( "Наша программа включает в себя данные: " );
for (let key in appData){
	console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
	}

