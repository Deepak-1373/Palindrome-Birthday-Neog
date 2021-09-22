const inputDate = document.querySelector("#input-date");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output");

function getDateObject() {
  const dateObject = {};
  const date = inputDate.value.split("-");
  date.reverse();
  dateObject.day = date[0];
  dateObject.month = date[1];
  dateObject.year = date[2];

  return dateObject;
}

function getAllDateFormat(dateobj) {
  let ddmmyyyy = dateobj.day + dateobj.month + dateobj.year;
  let mmddyyyy = dateobj.month + dateobj.day + dateobj.year;
  let yyyymmdd = dateobj.year + dateobj.month + dateobj.day;
  let ddmmyy = dateobj.day + dateobj.month + dateobj.year.slice(-2);
  let yymmdd = dateobj.year.slice(-2) + dateobj.month + dateobj.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, yymmdd];
}

function isPalindrome(date) {
  return date === date.split("").reverse().join("");
}
