const result = document.getElementById("result")

function num(value) {
  if (result.value == ""
    || result.value === "0"
    && value !== ".") {
    result.value = value;
  } else { result.value = result.value + value; }
}

function zeroZero(value) {
  if (result.value == ""
    || result.value.slice(0) === "0"
    || result.value.slice(-1) === "+"
    || result.value.slice(-1) === "-"
    || result.value.slice(-1) === "*"
    || result.value.slice(-1) === "/"
    && value == "00") {
    return;
  } else {
    result.value = result.value + value;
  }
}

function ope(value) {
  if (result.value == ""
    || result.value.slice(-1) === "."
    || result.value.slice(-1) === "+"
    || result.value.slice(-1) === "-"
    || result.value.slice(-1) === "*"
    || result.value.slice(-1) === "/") {
    return;
  } else {
    result.value = result.value + value;
  }
}

function calc() {
  if (result.value == ""
    && value == "=") {
    return;
  } else if(result.value == ""
    || result.value.slice(0) === "="
    || result.value.slice(-1) === "+"
    || result.value.slice(-1) === "-"
    || result.value.slice(-1) === "*"
    || result.value.slice(-1) === "/") {
    result.value = result.value.slice(0, -1);
  }
  
  result.value = new Function("return " + result.value)();
}

function reset() {
  result.value = "";
}
