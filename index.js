var moment = require('moment');

var datetime = moment().startOf('day').fromNow();
console.log(datetime);

function test(x = 34) {
  console.log(x);
}
test();
