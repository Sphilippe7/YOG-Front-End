'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');


const getinfo = function (event) {
  event.preventDefault();
  console.log('chose month');
  api.getinfo()
    .then(ui.success)
    .catch(ui.failure);
};


const addHandlers = () => {
  $('.select-month-form').on('submit', getinfo);
};

module.exports = {
  addHandlers,
};
