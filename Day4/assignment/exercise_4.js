// 4. Write a function called masterClone(obj) that performs a deep copy without using JSON.stringify or structuredClone.
// Requirements:
// It must handle nested objects.
// It must handle nested arrays.
// It must not copy functions by reference (they can remain shared, but the object structure must be unique).

function masterClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (typeof obj === "function") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => masterClone(item));
  }

  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = masterClone(obj[key]);
    }
  }

  return clonedObj;
}

const original = {
  name: "Yashraj",
  skills: ["Python", "React"],
  training:{
    running:true
  },
  greet() {
    console.log(`Hii ${this.name}`);
  }
};

const copy = masterClone(original);
console.log(copy) // same object
copy.name = "Bacancy"
copy.greet() // Hii Bacancy
original.greet()// Hii Yashraj
