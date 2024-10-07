let a1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let a2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let a3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let a4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(rdm)
let btn = document.getElementById("btn");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");

// Initiall set value
a.innerHTML = "*";
c.innerHTML = "*";
b.innerHTML = "*";
d.innerHTML = "*";

// OnClick Event Generate Unique OTP Each Time
btn.addEventListener(
  "click",
  (clc = () => {
    a.innerHTML = Math.floor(Math.random(a1) * 10);
    b.innerHTML = Math.floor(Math.random(a2) * 10);
    c.innerHTML = Math.floor(Math.random(a3) * 10);
    d.innerHTML = Math.floor(Math.random(a4) * 10);

    // TO DEBUGG PURPOSE
    console.log(a.innerHTML, b.innerHTML, c.innerHTML, d.innerHTML);
    // console.log(gen)
  })
);

let spn = document.getElementById("mes");
// let mail = document.getElementById("mail")
// let mes = document.getElementById("otp")
const submit = () => {
  let otp = document.getElementById("otp").value;
  console.log(otp);
  if (a.innerHTML + b.innerHTML + c.innerHTML + d.innerHTML != otp) {
    spn.innerHTML = "** Please enter a valid OTP **";
    console.error("Invalid OTP Entered");
    return;
  } else {
    spn.innerHTML = "Verified";
    console.log("OTP is Valid and Verified");
  }
  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5501/main.html";
    document.getElementById("otp").value = "";
  }, 2000);
};
// submit();
// console.log(otp)
