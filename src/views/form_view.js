const PubSub = require('../helpers/pub_sub.js')

const FormView = function() {


};

FormView.prototype.bindEvents = function () { // NEW
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputNumber = event.target.number.value;
    console.log('input number:', inputNumber)
  })
};

module.exports = FormView;

// THESE ARE PLANS. THEY DO NOT WORK UNTIL YOU INSTANTIATE SMTH - HERE WE
// DID THIS IN APP.JS) AND CALL THE METHOD UPON IT. THEN WE CAN USE IT IN THE FILE


// Making a prototype on the Formview constructor. We are calling the bindEvents
// method upon it, which is a new function. First, we grab the form using the querySelector
// and giving it the argument of the html id for the form. We save this in the variable form.
// Next, add the method eventListener to the event, passing it the arguments - submit (this is the entire form
// and the type of event as a string). We also pass it the event, which is passed as an argument to an anonymous
// function. Inside this anonyboi function, we call the preventDefault method on the event so The
// page doesn't reload. Then we create a new variable where we save the value of the event (aka the input from
// the online world that I type) by calling the event.target + ID OF THE TEXT INPUT IN THE HTML (aka number) and its value.
// The event is defaultly passed in by the eventListener method. No need to pass it in through the top function ().
