'use strict';

let money = +prompt("Ваш бюджет на месяц?","100000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

// console.log(money,time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

/* Цикл с while и проверками введенных данных
let i = 1;
while (i <= 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if (typeof(a) === "string" && typeof(a) != null && a != '' 
        && a.length < 50 && typeof(b) === "string" && typeof(b) != null 
        && b != '' && b.length < 50) {
            console.log("Правильно введены данные");
            appData.expenses[a] = b;
            i++;
        } else {
            alert("Данные введены неправильно! Введите верные данные");
        }
} */

/* Пример цилка с do с проверкой введенных данных
let i = 1;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if (typeof(a) === "string" && typeof(a) != null && a != '' 
        && a.length < 50 && typeof(b) === "string" && typeof(b) != null 
        && b != '' && b.length < 50) {
            console.log("Правильно введены данные");
            appData.expenses[a] = b;
            i++;
        } else {
            alert("Данные введены неправильно! Введите верные данные");
        }
} while (i<=2);  */

for (let i=1; i <= 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");

if (typeof(a) === "string" && typeof(a) != null && a != '' 
    && a.length < 50 && typeof(b) === "string" && typeof(b) != null 
    && b != '' && b.length < 50) {
        console.log("Правильно введены данные");
        appData.expenses[a] = b;
    } else {
        alert("Данные введены неправильно! Введите верные данные");
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30;
alert("Ваш расход в день: " + appData.moneyPerDay);

// console.log(appData);
