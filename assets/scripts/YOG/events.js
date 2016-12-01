'use strict';

const api = require('../auth/api');
const ui = require('../auth/ui');


const searchGames = function (event) {
  event.preventDefault();
  console.log('choose month');
  api.getindex()
    .then(ui.getindexSuccess)
    .catch(ui.failure);
    $('#MonthModal').modal('hide');
    $('#CategoryModal').modal('hide');
    $('#RatingModal').modal('hide');
};

// const singleGame = function (event) {
//   event.preventDefault();
//   console.log('choose month');
//   api.showgame()
//     .then(ui.success)
//     .catch(ui.failure);
//     $('#MonthModal').modal('hide');
//     $('#CategoryModal').modal('hide');
//     $('#RatingModal').modal('hide');
// };


const addHandlers = () => {
  $('.select-month-form').on('submit', searchGames);
  $('.select-category-form').on('submit', searchGames);
  $('.select-rating-form').on('submit', searchGames);
};

module.exports = {
  addHandlers,
};
