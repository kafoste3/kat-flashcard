// Putting in ECMA to provide behavior to Creations Page

// This is a self-call function to give an example to the user of what to input for a flash card
(function (){
  'use strict';

  function callQuery() {
    return "You know what they always say when things look grim?"; 
  }

  function callResponse(){
    return "Always look on the bright side of life.";
  }

  var exampleButton = document.querySelector('button[type=submit]');

  exampleButton.addEventListener('click', (event) => {
    event.preventDefault();
    var query = document.querySelectorAll("#query");
    var response = document.querySelectorAll("#response");

    for (var i = 0; i < query.length; i += 1){
       query[i].value = callQuery();
    }
    for(var x = 0; x < response.length; x += 1){
      response[x].value = callResponse();
    }
    console.log(callQuery());
    console.log(callResponse());
  })

}())