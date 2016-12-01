'use strict';

const api = require('../config');


const signUp = (data) =>
  $.ajax({
    url: api.host + '/sign-up',
    method: 'POST',
    data,
  });

  const signIn = (data) =>
    $.ajax({
      url: api.host + '/sign-in',
      method: 'POST',
      data,
    });


const signOut = () =>
$.ajax({
  url: api.host + '/sign-out/' + api.user.id,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + api.user.token,
  },
});

const changePassword = (data) =>
$.ajax({
  url: api.host + '/change-password/' + api.user.id,
  method: 'PATCH',
  data,
  headers: {
    Authorization: 'Token token=' + api.user.token,
  },
});

const getindex = () =>
$.ajax({
  url: api.host + '/games/',
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + api.user.token,
  },
});

const showgame = () =>
$.ajax({
  url: api.host + '/games/:id',
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + api.user.token,
  },
});

const updategame = () =>
$.ajax({
  url: api.host + '/games/:id',
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + api.user.token,
  },
});

const deletegame = () =>
$.ajax({
  url: api.host + '/games/:id',
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + api.user.token,
  },
});


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  getindex,
  showgame,
  updategame,
  deletegame
};
