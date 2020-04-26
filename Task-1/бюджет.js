'use strict';
let money = prompt('Ваш бюджет на месяц?');
//console.log(money);
let time = prompt('Введите дату в формате YYYY-MM-DD');
//console.log(time);
let expense1 = prompt('Введите обязательную статью расходов в этом месяце'),
    cost1 = prompt('Во сколько обойдется?'),
    expense2 = prompt('Введите обязательную статью расходов в этом месяце'),
    cost2 = prompt('Во сколько обойдется?');
let appData = {
    budget: money,
    timeData: time,
    //   expenses: { 
    //                     a1: expense1,
    //                     c1: cost1,
    //                     a2: expense2,
    //                     c2: cost2
    //    },
    expenses: { 
        //expense1: cost1 ,
       // expense2: cost2
           },

        //    let expense1 = prompt('Введите обязательную статью расходов в этом месяце'),
        //             let cost1 = prompt('Во сколько обойдется?'),
        //             let expense2 = prompt('Введите обязательную статью расходов в этом месяце'),
        //             let cost2 = prompt('Во сколько обойдется?')
   //},
   optionalExpenses: {},
   income : [],
   saving : false
};
appData.expenses[expense1]=cost1;
appData.expenses[expense2]=cost2;

console.log(appData.expenses);
//console.log(appData.timeData);
alert(appData.budget/30);
console.log(typeof(appData.budget/30))

