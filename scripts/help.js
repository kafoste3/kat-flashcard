// Putting in ECMA to provide behavior to Help Page

// This is a self-call function to show the person the soul they traded for power
(function() {
  'use strict';

  function Helping(){
    this.name = document.querySelector('#name').value;
    this.email = document.querySelector('#email').value;
    this.tel = document.querySelector('#phone').value;
    this.help = document.querySelector('#help').value;
  }

  var formSoulSell = document.querySelector('form');

  formSoulSell.addEventListener('submit', (event) => {
    // Need to stop it from refreshing page and loosing information
    // should we falsify onclick event with button?
    //event.stopPropagation();
    var soul = new Helping();
    document.getElementById("information").innerHTML = soul;
    console.log(soul);
  })

}())