'use strict';

const api = require('../config');



const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};


const signInSuccess = data => {
  api.user = data.user;
  success(data);
  console.log(data);
  $('.signed-out').hide();
  $('.signed-in').show();
};

const signUpSuccess = data => {
  api.user = data.user;
  success(data);
  console.log(data);
};

const signOutSuccess = () => {
api.user = null;
  success(null);
  console.log('signOutSuccess');
  $('.signed-in').hide();
  $('.signed-out').show();
};

// const getinfo = () => {
//
// }

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
  changePasswordSuccess
};
