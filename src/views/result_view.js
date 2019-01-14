const PubSub = require('../helpers/pub_sub.js')


const ResultView = function() {

};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  if (result === true) {
    resultElement.textContent = `Yes, it's a prime number!`
  }
  else {
    resultElement.textContent = `This is not a prime number, dumbo!`
  }
};



module.exports = ResultView;
