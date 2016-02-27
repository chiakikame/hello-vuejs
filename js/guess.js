"use strict";

Vue.component('guess', {
  template: '<div id="app">'+
    '  <steps v-bind:message="message"></steps>' +
    '</div>',
  data: function() {
      return  {
	  message: "Hello Vue.js!"
	  }
  }
})

new Vue({
  el: '#root'
})
