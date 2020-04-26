//let money, time;											//объявляем переменный - делаем их глобальными, для их видимости вне функции
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
	savings: true
};

function chooseExpenses(){
	for (let i =0; i < 2; i++)	{						//ставим i < 2 т.к. у нас дважды задаются вопросы (см Задание 1)
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
		
			if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 50) {
				console.log('done');
				appData.expenses[a] = b;		// Точку здесь использовать нельзя, используются именно [] т.к. в "а" мы передаем переменную, 
				// а если мы используем [], то "свойство" может содержать любую "строку"
			} else {
	i--
			}
	 }
	
}

 chooseExpenses();

 function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed(); 

	   alert('Ежедневный бюджет: ' + appData.moneyPerDay + "руб."); //ВНЕСЕНИЕ КОРРЕКТИРОВКИ, СОГЛАСНО ОТВЕТУ ПРЕПОДА
}
detectDayBudget();
 //appData.moneyPerDay = (appData.budget / 30).toFixed();					//перенесено в функцию detectDayBudget()
 /*Метод toFixed() округляет значение(в скобках - кол-во знаков после зпт. 
 Также он возвращает значение в виде строки*/
//alert('Ежедневный бюджет: ' + appData.moneyPerDay); //после создания moneyPerDay можем вывести информацию в красивом виде
/*Какой смысл + перед appData.moneyPerDay ?*/

function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log('Минимальный уровень достатка') ;
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log('Средний уровень достатка') ;
	} else if ( appData.moneyPerDay > 2000) {
		console.log('Высокий уровень достатка') ;
	
	} else {
		console.log ('Произошла ошибка')
	}
}
detectLevel();

function checkSavings(){
	if(appData.savings == true){
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}
checkSavings();

function chooseOptExpenses() {
	for (let i = 1; i < 4; i++)	{						
		let a = prompt("Статья необязательных расходов?");
		
			appData.optionalExpenses[i] = a;		// Точку здесь использовать нельзя, используются именно [] т.к. в "а" мы передаем переменную, 
				// а если мы используем [], то "свойство" может содержать любую "строку"
				console.log(appData.optionalExpenses);				//ВНЕСЕНИЕ КОРРЕКТИРОВКИ, СОГЛАСНО ОТВЕТУ ПРЕПОДА
			
	 }

}
chooseOptExpenses();