"use strict";

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  arr = [];
  let D = Math.pow(b,2) - 4*a*c;
  let x1, x2;

  if (D > 0){
    x1 = (-b + Math.sqrt(D) )/(2*a);
    x2 = (-b - Math.sqrt(D) )/(2*a);
    arr.push(x1, x2);
  } else if (D === 0){
    x1 = -b/(2*a)
    arr.push(x1);
  } else {};

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  // код для задачи №2 писать здесь

  let body, error = "";
  
  var months;

  if (Number.isNaN(Number(percent) + 1) === true){
    error += "Параметр percent содержит неправильное значение " + percent + ".";
  }

  if (Number.isNaN(Number(contribution) + 1) === true){
    error += "Параметр contribution содержит неправильное значение " + contribution + ".";
  }

  if (Number.isNaN(Number(amount) + 1) === true){
    error += "Параметр amount содержит неправильное значение " + amount + ".";
  }

  if (error != ""){
    return error;
  }

  body = amount - contribution;
  months = (date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth() - new Date().getMonth();
  let P = percent / 12 / 100;
  totalAmount = body * (P + (P / (Math.pow(1 + P,months) - 1))) * months;
  
  return totalAmount.toFixed(2);
}
