// // Create overloads for a function format that:
// // Accepts number → returns string
// // Accepts Date → returns string

function format(num: number): string;
function format(date: Date): string;
function format(param: number | Date) {
  if (typeof param === "number") {
    return String(param);
  } else {
    return param.toISOString();
  }
}

console.log(format(5));
console.log(format(new Date()));
