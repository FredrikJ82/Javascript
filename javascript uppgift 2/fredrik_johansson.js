"use strict";
//user can only login with these names.
let usernames = ["yazeen", "ec", "softhouse"];
let form = document.createElement("form");
let input = document.createElement("input");

//Function that calls all other functions in order
//--Don't modify--
function init() {
  initLoginForm();
  initLabel();
  initInput();
  initButton();
}

function initLoginForm() {
//create and add form element to the Dom.
  document.body.appendChild(form);
}

function initLabel() {
//create label element and set the lable to "username"
//Add it to the form element. 
  let label = document.createElement("label");
  label.textContent = "username";
  form.appendChild(label);
}

function initInput() {
//create input element and set it to be requried.
//Add it to the form element.
  input.required = true;
  form.appendChild(input);
}

function initButton() {
//create button element and set the text to "login"
//Add it to the form element. 
  let button = document.createElement("button");
  button.textContent = "login";
  form.appendChild(button);
  //if validateLoginInfo is true alert user with "Welcome" text.
  //if validateLoginInfo is false add border style to the input element: "3px solid red".
  button.addEventListener("click", () => {
    if (validateLoginInfo() === true) {
      alert("Welcome");
    } else {
      input.style.border = "3px solid red";
    }
  });
}

function validateLoginInfo() {
  //Get the input using form input element
  //if the username is in the usernames array return true if not return false.
   
  let formInput = input.value;
  for  ( var i = 0; i < usernames.length; i++){
      if (formInput==usernames[i] ){
          return true;
      } 
  } if (formInput!==usernames){
      return false;
  }
}


//Write code here to call the init function only after the dom has been loaded

window.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM Loaded");
    init();
});