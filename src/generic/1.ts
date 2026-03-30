// 2.1: Generic Promise
function getPromise(): Promise<(string | number)[]> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}
