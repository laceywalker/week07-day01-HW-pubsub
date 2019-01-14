const PubSub = require('../helpers/pub_sub');

const PrimeChecker = function() {

};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
  const inputNumber = event.detail;
  // console.log('payload received in PrimeChecker:', inputNumber);
  const result = this.numberIsPrime(inputNumber);
  PubSub.publish('PrimeChecker:result-calculated', result)
  // console.log(result)
  });
};



module.exports = PrimeChecker;
