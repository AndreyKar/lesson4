'use strict';
var money;
var time;

money = prompt("Ваш бюджет на месяц?","число");
time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

console.log(money,time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let b1 = prompt("Во сколько обойдется?", "");
let a2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let b2 = prompt("Во сколько обойдется?", "");

appData.expenses[0] = {a1, b1};
appData.expenses[1] = {a2, b2};

console.log(appData.expenses[0], appData.expenses[1]);