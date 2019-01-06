const raw = require('./raw');

const TEST_COUNT = 10000;

function itor(raw, from) {
  let value;
  let done = false;
  const idx = raw.indexOf('"debug"', from + 1);
  if (idx !== -1) {
    try {
      value = JSON.parse(`${raw.slice(0, idx - 1)}}`);
      done = true;
    } catch (error) {}
  } else {
    done = true;
  }
  return { value, idx, done };
}

function trimRaw(raw) {
  let from = 0;
  let value;
  let done;
  while (!done) {
    ({ done, value, idx: from } = itor(raw, from));
  }
  return value;
}
console.time(`trimRaw ${TEST_COUNT}次用时`);
let o;
for (let i = 0; i < TEST_COUNT; i++) {
  o = trimRaw(raw);
}
console.log(`trimRaw 结果：`, o);
console.timeEnd(`trimRaw ${TEST_COUNT}次用时`);
