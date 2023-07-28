let tezlik = 70;
let ball = 5;
let point = 12;

function speedTest(test) {
  if (test < tezlik + ball) console.log("OK");
  else if (Math.floor((test - tezlik) / ball) > point)
    console.log("Guvohnoma olib qo'yiladi");
  else console.log(Math.floor((test - tezlik) / ball));
}

module.exports.speedTest = speedTest;
