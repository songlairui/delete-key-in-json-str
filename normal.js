const raw = require('./raw');

const TEST_COUNT = 10000;

function trimRaw(raw) {
  const obj = JSON.parse(raw);
  delete obj.debug;
  return obj;
}
console.time(`trimRaw ${TEST_COUNT}次用时`);
let o;
for (let i = 0; i < TEST_COUNT; i++) {
  o = trimRaw(raw);
}
console.log(`trimRaw 结果：`, o);
console.timeEnd(`trimRaw ${TEST_COUNT}次用时`);
