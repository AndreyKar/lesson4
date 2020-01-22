'use strict';
var money;
var time;

money = prompt("Ваш бюджет на месяц?","100000");
time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

// console.log(money,time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", "квартплата"),
    b1 = prompt("Во сколько обойдется?", "6000"),
    a2 = prompt("Введите обязательную статью расходов в этом месяце", "связь"),
    b2 = prompt("Во сколько обойдется?", "1200");

appData.expenses[a1] = b1;
appData.expenses[a2] = b2;

alert("Ваш расход в день: " + money / 30);

// console.log(Object.values(appData));
