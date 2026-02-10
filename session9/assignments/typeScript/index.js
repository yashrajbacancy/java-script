var prices = [1, 2, 3, 4, 5];
function calculateTotal(arr) {
    var sum = 0;
    arr.forEach(function (i) {
        sum += i;
    });
    return sum;
}
console.log(calculateTotal(prices));
function conditionalReturn(a, b) {
    if (a + b > 100) {
        return "Sum of two numbers is greater then 100";
    }
    return a + b;
}
