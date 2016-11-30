'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure);
  $('#SignUpModal').modal('hide');
};

const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure);
  $('#SignInModal').modal('hide');
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure);
  $('#SignOutModal').modal('hide');
};

const onChangePassword = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure);
  $('#ChangePasswordModal').modal('hide');
};



const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.sign-out-form').on('submit', onSignOut);
  $('.change-password-form').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};
