"use strict";

var inputNumber = 0;
var selectedFromOption = "";
var selectedToOption = "";
var answer = 0;

function keeUp() {
  inputNumber = document.querySelector("#inputNumber").value;
  console.log(inputNumber);
  setAnswer("");
  activeDieactiveBtn();
}

function fromChange() {
  selectedFromOption = document.querySelector("#from").value;
  console.log(selectedFromOption);
  activeDieactiveBtn();
}

function toChange() {
  selectedToOption = document.querySelector("#to").value;
  console.log(selectedToOption);
  activeDieactiveBtn();
}

function convertAns() {
  if (
    selectedFromOption == "decimal" &&
    selectedToOption == "binary" &&
    inputNumber != ""
  ) {
    answer = convertDecimalToBinary(inputNumber);
    setAnswer(answer);
  } else if (
    selectedFromOption == "binary" &&
    selectedToOption == "decimal" &&
    inputNumber != ""
  ) {
    answer = convertBinaryToDecimal(inputNumber);
    setAnswer(answer);
  } else if (
    selectedFromOption == "decimal" &&
    selectedToOption == "hexadecimal" &&
    inputNumber != ""
  ) {
    answer = convertDecimalToHexadecimal(inputNumber);
    setAnswer(answer);
  } else if (
    selectedFromOption == "hexadecimal" &&
    selectedToOption == "decimal" &&
    inputNumber != ""
  ) {
    answer = convertHexadecimalToDecimal(inputNumber);
    setAnswer(answer);
  } else if (
    selectedFromOption == "binary" &&
    selectedToOption == "hexadecimal" &&
    inputNumber != ""
  ) {
    answer = convertBinaryToHexadecimal(inputNumber);
    setAnswer(answer);
  } else if (
    selectedFromOption == "hexadecimal" &&
    selectedToOption == "binary" &&
    inputNumber != ""
  ) {
    answer = convertHexadecimalToBinary(inputNumber);
    setAnswer(answer);
  } else if (
    selectedFromOption == "binary" &&
    selectedToOption == "octal" &&
    inputNumber != ""
  ) {
    answer = convertBinaryToOctal(inputNumber);
    setAnswer(answer);
  } else if (
    selectedFromOption == "decimal" &&
    selectedToOption == "octal" &&
    inputNumber != ""
  ) {
    answer = convertDecimalToOctal(inputNumber);
    setAnswer(answer);
  } else if (
    selectedFromOption == "hexadecimal" &&
    selectedToOption == "octal" &&
    inputNumber != ""
  ) {
    answer = convertHexadecimalToOctal(inputNumber);
    setAnswer(answer);
  } else if (
    selectedFromOption == "octal" &&
    selectedToOption == "binary" &&
    inputNumber != ""
  ) {
    answer = convertOctalToBinary(inputNumber);
    setAnswer(answer);
  } else if (
    selectedFromOption == "octal" &&
    selectedToOption == "decimal" &&
    inputNumber != ""
  ) {
    answer = convertOctalToDecimal(inputNumber);
    setAnswer(answer);
  } else if (
    selectedFromOption == "octal" &&
    selectedToOption == "hexadecimal" &&
    inputNumber != ""
  ) {
    answer = convertOctalToHexadecimal(inputNumber);
    setAnswer(answer);
  } else if (selectedFromOption == selectedToOption) {
    answer = '<span style="color: red;">Please choose different options</span>';
    setAnswer(answer);
  } else {
    resetAll();
  }
}

function activeDieactiveBtn() {
  var inputNumber = document.querySelector("#inputNumber").value;
  var selectedFromOption = document.querySelector("#from").value;
  var selectedToOption = document.querySelector("#to").value;

  if (inputNumber != "" && selectedFromOption != "" && selectedToOption != "") {
    document.querySelector("#convertBtn").disabled = false;
  } else {
    document.querySelector("#convertBtn").disabled = true;
  }

  if (
    inputNumber != "" ||
    (selectedFromOption != "" && selectedToOption != "")
  ) {
    document.querySelector("#resetBtn").disabled = false;
  } else {
    document.querySelector("#resetBtn").disabled = true;
  }
  if (selectedFromOption != "" && selectedToOption != "") {
    document.querySelector("#swapBtn").disabled = false;
  } else {
    document.querySelector("#swapBtn").disabled = true;
  }
}

function setAnswer(answer) {
  let ans = document.querySelector("#showAnswer");
  ans.innerHTML = answer;
}

function resetAll() {
  document.querySelector("#convertBtn").disabled = true;
  document.querySelector("#showAnswer").innerHTML = "";
  document.querySelector("#inputNumber").value = "";
  document.querySelector("#from").value = "";
  document.querySelector("#to").value = "";
  document.querySelector("#resetBtn").disabled = true;
  document.querySelector("#swapBtn").disabled = true;
}
function swapValue() {
  var temp = document.querySelector("#from").value;
  document.querySelector("#from").value = document.querySelector("#to").value;
  document.querySelector("#to").value = temp;
  toChange();
  fromChange();
}

// main functions
function convertDecimalToBinary(inputNumber) {
  var answer = "";
  if (!isNaN(inputNumber)) {
    inputNumber = Number(inputNumber);
    var remainder = 0;
    while (inputNumber != 0) {
      remainder = inputNumber % 2;
      inputNumber = (inputNumber - remainder) / 2;
      answer = remainder + answer;
    }
  } else {
    answer =
      '<span style="color: red;">This is not a valid Decimal number!</span>';
  }
  return answer;
}

function convertBinaryToDecimal(inputNumber) {
  inputNumber = inputNumber.toString();
  var numberLen = inputNumber.length;
  var position = numberLen;
  var answer = 0;
  for (var i = 0; i < numberLen; i++) {
    if (inputNumber[i] == "0" || inputNumber[i] == "1") {
      position--;
      answer = answer + Number(inputNumber[i]) * Math.pow(2, position);
    } else {
      answer =
        '<span style="color: red;">This is not a valid Binary number!</span>';
    }
  }
  return answer;
}

function convertDecimalToHexadecimal(inputNumber) {
  inputNumber = Number(inputNumber);
  var remainder = 0;
  var answer = "";
  if (!isNaN(inputNumber)) {
    inputNumber = Number(inputNumber);
    while (inputNumber != 0) {
      remainder = inputNumber % 16;
      inputNumber = (inputNumber - remainder) / 16;
      if (remainder == 10) {
        answer = "A" + answer;
      } else if (remainder == 11) {
        answer = "B" + answer;
      } else if (remainder == 12) {
        answer = "C" + answer;
      } else if (remainder == 13) {
        answer = "D" + answer;
      } else if (remainder == 14) {
        answer = "E" + answer;
      } else if (remainder == 15) {
        answer = "F" + answer;
      } else {
        answer = remainder + answer;
      }
    }
  } else {
    answer =
      '<span style="color: red;">This is not a valid Decimal number!</span>';
  }
  return answer;
}

function convertHexadecimalToDecimal(inputNumber) {
  inputNumber = inputNumber.toString().toUpperCase();
  var numberLen = inputNumber.length;
  var position = numberLen;
  var answer = 0;
  for (var i = 0; i < numberLen; i++) {
    var num = inputNumber[i];
    if (num == "A") {
      num = 10;
    } else if (num == "B") {
      num = 11;
    } else if (num == "C") {
      num = 12;
    } else if (num == "D") {
      num = 13;
    } else if (num == "E") {
      num = 14;
    } else if (num == "F") {
      num = 15;
    } else if (num >= "0" && num <= "9") {
      num = Number(num);
    } else {
      answer =
        '<span style="color: red;">This is not a valid Hexadecimal number!</span>';
      return answer;
    }
    position--;
    answer = answer + num * Math.pow(16, position);
  }
  return answer;
}

function convertBinaryToOctal(inputNumber) {
  inputNumber = inputNumber.toString();
  var numberLen = inputNumber.length;
  var flag = false;
  var answer = 0;
  for (var i = 0; i < numberLen; i++) {
    if (inputNumber[i] == "0" || inputNumber[i] == "1") {
      flag = true;
    } else {
      flag = false;
    }
  }
  if (!flag) {
    answer =
      '<span style="color: red;">This is not a valid Binary number!</span>';
  } else {
    answer = parseInt(inputNumber, 2).toString(8);
  }
  return answer;
}
function convertDecimalToOctal(inputNumber) {
  var answer = "";
  if (!isNaN(inputNumber)) {
    inputNumber = Number(inputNumber);
    answer = parseInt(inputNumber, 10).toString(8);
  } else {
    answer =
      '<span style="color: red;">This is not a valid Decimal number!</span>';
  }
  return answer;
}

function convertHexadecimalToOctal(inputNumber) {
  inputNumber = inputNumber.toString().toUpperCase();
  var numberLen = inputNumber.length;
  var flag = false;
  var answer = 0;
  for (var i = 0; i < numberLen; i++) {
    var num = inputNumber[i];
    if (
      num == "A" ||
      num == "B" ||
      num == "C" ||
      num == "D" ||
      num == "E" ||
      num == "F" ||
      (num >= "0" && num <= "9")
    ) {
      flag = true;
    } else {
      flag = false;
    }
  }
  if (!flag) {
    answer =
      '<span style="color: red;">This is not a valid Hexadecimal number!</span>';
  } else {
    answer = parseInt(inputNumber, 16).toString(8);
  }
  return answer;
}

function convertOctalToBinary(inputNumber) {
  inputNumber = inputNumber.toString();
  var numberLen = inputNumber.length;
  var flag = false;
  var answer = 0;
  for (var i = 0; i < numberLen; i++) {
    var num = inputNumber[i];
    if (num >= "0" && num <= "7") {
      flag = true;
    } else {
      flag = false;
    }
  }
  if (!flag) {
    answer =
      '<span style="color: red;">This is not a valid Octal number!</span>';
  } else {
    answer = parseInt(inputNumber, 8).toString(2);
  }
  return answer;
}
function convertOctalToDecimal(inputNumber) {
  inputNumber = inputNumber.toString();
  var numberLen = inputNumber.length;
  var flag = false;
  var answer = 0;
  for (var i = 0; i < numberLen; i++) {
    var num = inputNumber[i];
    if (num >= "0" && num <= "7") {
      flag = true;
    } else {
      flag = false;
    }
  }
  if (!flag) {
    answer =
      '<span style="color: red;">This is not a valid Octal number!</span>';
  } else {
    answer = parseInt(inputNumber, 8).toString(10);
  }
  return answer;
}
function convertOctalToHexadecimal(inputNumber) {
  inputNumber = inputNumber.toString();
  var numberLen = inputNumber.length;
  var flag = false;
  var answer = 0;
  for (var i = 0; i < numberLen; i++) {
    var num = inputNumber[i];
    if (num >= "0" && num <= "7") {
      flag = true;
    } else {
      flag = false;
    }
  }
  if (!flag) {
    answer =
      '<span style="color: red;">This is not a valid Octal number!</span>';
  } else {
    answer = parseInt(inputNumber, 8).toString(16);
  }
  return answer;
}
function convertBinaryToHexadecimal(inputNumber) {
  inputNumber = inputNumber.toString();
  var numberLen = inputNumber.length;
  var flag = false;
  var answer = 0;
  for (var i = 0; i < numberLen; i++) {
    var num = inputNumber[i];
    if (num >= "0" && num <= "1") {
      flag = true;
    } else {
      flag = false;
    }
  }
  if (!flag) {
    answer =
      '<span style="color: red;">This is not a valid Binary number!</span>';
  } else {
    answer = parseInt(inputNumber, 2).toString(16);
  }
  return answer;
}
function convertHexadecimalToBinary(inputNumber) {
  inputNumber = inputNumber.toString().toUpperCase();
  var numberLen = inputNumber.length;
  var flag = false;
  var answer = 0;
  for (var i = 0; i < numberLen; i++) {
    var num = inputNumber[i];
    if (
      num == "A" ||
      num == "B" ||
      num == "C" ||
      num == "D" ||
      num == "E" ||
      num == "F" ||
      (num >= "0" && num <= "9")
    ) {
      flag = true;
    } else {
      flag = false;
    }
  }
  if (!flag) {
    answer =
      '<span style="color: red;">This is not a valid Hexadecimal number!</span>';
  } else {
    answer = parseInt(inputNumber, 16).toString(2);
  }
  return answer;
}
