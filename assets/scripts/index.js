'use strict';


const authEvents = require('./auth/events.js');
const YOGEvents = require('./YOG/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  YOGEvents.addHandlers();
  $('.signout').hide();
  $('.changepassword').hide();
});
