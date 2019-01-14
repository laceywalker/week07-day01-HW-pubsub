const FormView = require('./views/form_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formView = new FormView();
  formView.bindEvents();
});



// have to instantiate a new Formview in order to be able to call the method
// bindEvents, and thus get it to work. otherwise it's just a plan.
