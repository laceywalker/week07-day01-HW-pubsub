const PubSub = require('../helpers/pub_sub.js')


const ResultView = function() {

};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  if (result === true) {
    resultElement.textContent = `Yes, it's a prime number!`
  }
  else {
    resultElement.textContent = `No, it's not a prime number!`
  }
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const primeOrNot = event.detail;
    // console.log('payload received in ResultView:', primeOrNot);
    this.displayResult(primeOrNot);
  })
};


module.exports = ResultView;
