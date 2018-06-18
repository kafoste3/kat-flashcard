// Putting in ECMA to provide behavior to Study Page

// Sending Selection to Reference with EventListener
(function() {
  'use strict';

  var studies = document.getElementsByName("beginstudy").innerHTML;
  var selectButton = document.querySelector('button[type=submit]');

  selectButton.addEventListener('submit', () => {
    for(var i = 0; i<studies.options.length; i += 1){
      switch(studies.options[i].value){
        case studies.options[i].value == "Monty Python":
          //Send user to library in this case a link
          //window.location.href=studies.options[i].href;
          break;
        case studies.options[i].value == "Eric Idle":
          break;
        case studies.options[i].value == "John Cleese":
          break;
        default:
          break;
      }
    }
  })

}())