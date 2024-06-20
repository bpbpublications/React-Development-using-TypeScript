var discount = 0.1; // Global variable

function applyDiscount(price, _discount) {
  var result = price * _discount;
  console.log("Logging after 1 sec - Discounted Price:", result);
}

function fetchData() {
  setTimeout(function () {
    console.log("Fetching data...");
    var data = "Sample data";
    console.log("Logging after 2 sec - Data:", data);
  }, 2000);
}

console.log("Start of code");
setTimeout(function () {
  applyDiscount(100, discount);
}, 1000);

fetchData();
console.log("End of code");
