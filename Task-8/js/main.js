'use strict';
let 
    startCalc = document.querySelector('#start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExepensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    approve1 = //document.getElementsByTagName('button')[0] 
                document.querySelector('button.expenses-item-btn'),// применен способ из ответов по заданию 7  - button - тэг, expenses-item-btn -класс
    approve2 = document.getElementsByTagName('button')[1],
	calc = document.getElementsByTagName('button')[2],
	allButtons = document.querySelectorAll('button'),
    oExpenses = document.querySelectorAll('.optionalexpenses-item'),
    IncomeItem = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');
/*let divValue = document.querySelectorAll('.result-table')[0].children, resTabVal = {};
for (let i=0; i < divValue.length; i++ ) {
	let nameClass = resTabVal[i].className,
	nameSplit = nameClass.split('-');
	if (nameSplit[1] == 'value') {resTabVal[nameClass] = divValue[i];
	}
}

console.log(allButtons);*/
//calc.disabled = true;



//allButtons[0].setAttribute('disabled','disabled');

let money, time;	

approve1.disabled = true;
approve2.disabled = true;
calc.disabled = true;

/*if(money == undefined){
	for (let k=0; k<allButtons.length-1; k++){
		allButtons[k].setAttribute('disabled','disabled');//первый 'disabled' - установка названия нового атрибута, второй 'disabled' - задание значения этого атрибута
		//console.log(k);
		}
	}
	console.log(money);		*/							//объявляем переменный - делаем их глобальными, для их видимости вне функции

startCalc.addEventListener('click', function() {
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	
    money = +prompt("Ваш бюджет на месяц?", '');
	
	while(isNaN(money) || money == " " || money == null) { /*проверки 1) - в коде должно быть число (если будет текст, 
		то условие выдаст true и цикл повторится) 2) не должно быть пустой строки (если будет, то -//- 3) Чтобы юзер не нажал "отмена")*/
	 	money = +prompt("Ваш бюджет на месяц?", '');

    }
    appData.budget = money;//Значения, полученные от пользователя необходимо записать в глобальный объект appData
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();//присвоим занчение money графе Доход
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();

	approve1.disabled = false;
	approve2.disabled = false;
	calc.disabled = false;
	/*console.log(money);	
	if(money != undefined){
		for (let k=0; k<allButtons.length-1; k++){
			allButtons[k].removeAttribute('disabled');//'disabled' - название удаляемого атрибута
		}
}*/
});


// console.log(startCalc);
approve1.addEventListener('click', function(){
	let sum = 0;
	for (let i =0; i < expensesItem.length; i++)	{		
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
		
			if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 50) {
				console.log('done');
				appData.expenses[a] = b;
				sum += +b;		
				//console.log(appData.expenses);
		} else {
			i--
		}
	}
	expensesValue.textContent = sum;//19.50
	//appData.allExpenses = +sum;
	
});

console.log(expensesValue.textContent);

approve2.addEventListener('click', function(){
	for (let i = 0; i < oExpenses.length; i++)	{						
		let a = oExpenses[i].value;
		appData.optionalExpenses[i] = a;		
		optionalExepensesValue.textContent += a + ' ';			
	}
});

calc.addEventListener('click', function(){
	if(money != undefined){
		appData.moneyPerDay = ((appData.budget- +expensesValue.textContent) / 30).toFixed();
		daybudget.textContent = appData.moneyPerDay;
		if (appData.moneyPerDay <= 100) {
			level.textContent = 'Минимальный уровень достатка' ;
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
			level.textContent = 'Средний уровень достатка' ;
		} else if ( appData.moneyPerDay > 2000) {
			level.textContent = 'Высокий уровень достатка' ;
		} else {
			level.textContent = 'Произошла ошибка';
		}
	}
	else {
		daybudget.textContent = 'Произошла ошибка';
	}
	console.log(appData.moneyPerDay);
});

IncomeItem.addEventListener('input', function(){ 
			let items = IncomeItem.value ;
			appData.income = items.split(', ');
			incomeValue.textContent = appData.income;
});
checkbox.addEventListener('click', function(){
	if (appData.savings == true){
		appData.savings = false
	}
	else {
		appData.savings = true
	}
});

sumValue.addEventListener('input', function(){
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;
		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;
		monthSavings.textContent = appData.monthIncome.toFixed(1);
		yearSavings.textContent = appData.yearIncome.toFixed(1);
	}
});
percentValue.addEventListener('input', function(){
	if (appData.savings == true) {
		let sum = +sumValue.value,
		percent = +percentValue.value;
		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;
		monthSavings.textContent = appData.monthIncome.toFixed(1);
		yearSavings.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};