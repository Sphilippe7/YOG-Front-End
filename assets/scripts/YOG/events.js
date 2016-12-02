'use strict';

const api = require('../auth/api');
const ui = require('../auth/ui');
const getFormFields = require(`../../../lib/get-form-fields`);


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

const createGame = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  console.log('you added a game', data);
  api.postgame(data)
    .then(ui.postgameSuccess)
    .catch(ui.failure);
    $('#MonthModal').modal('hide');
    $('#CategoryModal').modal('hide');
    $('#RatingModal').modal('hide');
};

const updateGame = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  console.log('edited');
  api.updategame(data)
    .then(ui.updategameSuccess)
    .catch(ui.failure);
    $('#MonthModal').modal('hide');
    $('#CategoryModal').modal('hide');
    $('#RatingModal').modal('hide');
};

const deleteGame = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  console.log('deleted');
  api.deletegame(data)
    .then(ui.deletegameSuccess)
    .catch(ui.failure);
    $('#MonthModal').modal('hide');
    $('#CategoryModal').modal('hide');
    $('#RatingModal').modal('hide');
};



const addHandlers = () => {
  $('.select-month-form').on('submit', searchGames);
  $('.select-category-form').on('submit', searchGames);
  $('.select-rating-form').on('submit', searchGames);
  $('.create-a-game-form').on('submit', createGame);
  $('.update-form').on('submit', updateGame);
  $('.delete-form').on('submit', deleteGame);
};

module.exports = {
  addHandlers,
};
