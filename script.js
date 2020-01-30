'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?","");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?","");
    }
}
start ();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i=0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
        
        if (typeof(a) === "string" && typeof(a) != null && a != '' 
            && a.length < 50 && typeof(b) === "string" && typeof(b) != null 
            && b != '' && b.length < 50) {
                console.log("Правильно введены данные");
                appData.expenses[a] = b;
            } else {
                alert("Данные введены неправильно! Введите верные данные");
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш расход в день: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма депозита?"),
                percent = +prompt("Под какой процент,");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let optExpenseName = +prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = optExpenseName;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        while(typeof(items) != "string" || typeof(items) == null || items == "") {
            alert("Неверные данные, попробуйте еще раз!");
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?", ""));
        appData.income.sort();
        
        var sposoby = "\n";
        appData.income.forEach(function(item, i){
            sposoby = sposoby + (i+1) + "  " + item + "\n";
        });
        alert('Способы доп.заработка: ' + sposoby);
    }
};

var dannye = "\n";
for (let key in appData) {
    dannye = dannye + key + "  " + appData[key] + "\n";
};

alert('Наша программа включает в себя данные: ' + dannye);