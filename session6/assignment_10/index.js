/*
Create a function simulateTask(name, delay) that returns a Promise
resolving after delay ms.

Part A: Run three tasks sequentially using async/await.
Part B: Run three tasks simultaneously using Promise.all().
Compare the total time taken for Part A vs Part B.
*/


  function simulateTask(name, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`${name} completed`);
        resolve(name);
      }, delay);
    });
  }

 
  async function runSequential() {
    console.time("Sequential Time");
    await simulateTask("Task 1", 1000);
    await simulateTask("Task 2", 1000);
    await simulateTask("Task 3", 1000);
    console.timeEnd("Sequential Time");
  }

  
  async function runParallel() {
    console.time("Parallel Time");
    await Promise.all([
      simulateTask("Task 1", 1000),
      simulateTask("Task 2", 1000),
      simulateTask("Task 3", 1000)
    ]);
    console.timeEnd("Parallel Time");
  }

  runSequential().then(runParallel);

