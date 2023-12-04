export const weakMap = new WeakMap();
let count = 0;
export function queryAPI(endpoint) {
  if (!(endpoint instanceof Object)) {
    throw Error('endpoint must be object');
  }

  if (count === 0) {
    count += 1;
    weakMap.set(endpoint, count);
  } else {
    count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);
  }
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
