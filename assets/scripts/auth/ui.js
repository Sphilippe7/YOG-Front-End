'use strict';

const api = require('../config');
const indexGamesTemplate = require('../templates/game-listing.handlebars');


const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};


const signInSuccess = data => {
  api.user = data.user;
  success(data);
  console.log(data);
  $('.signin').hide();
  $('.signup').hide();
  $('.changepassword').show();
  $('.signout').show();
  $('#signin-toggle').text(api.user.email);
};

const signUpSuccess = data => {
  api.user = data.user;
  success(data);
  console.log(data);
  $('.signup').hide();
  $('.changepassword').hide();
  $('.signout').hide();
};

const signOutSuccess = () => {
api.user = null;
  success(null);
  console.log('signOutSuccess');
  $('.signout').hide();
  $('.changepassword').hide();
};

const getindexSuccess = data => {
  api.games = data.games;
  console.log('index');
  success(data);
  console.log(data);
  $('.month-of-games').html(indexGamesTemplate(data));
};

const showgameSuccess = data => {
  api.games = data.games;
  success(data);
  console.log(data);
};

const updategameSuccess = data => {
  api.games = data.games;
  success(data);
  console.log(data);
};

const deletegameSuccess = data => {
  api.games = data.games;
  success(data);
  console.log(data);
};


const changePasswordSuccess = () => {
  success(null);
  console.log('changePasswordSuccess');
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};



module.exports = {
  failure,
  success,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
  getindexSuccess,
  showgameSuccess,
  updategameSuccess,
  deletegameSuccess
  };
