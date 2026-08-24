"use strict";

const input = document.querySelector("#userLink");

const sentButton = document.querySelector("#sendButton");

const handleClick = () => {
  const inputValue = input.value;
  getDate(inputValue);
};

sentButton.addEventListener("click", handleClick);

const getDate = async url => {
  const response = await fetch(url);
  const body = await response.text();

  response
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log("The request has been received ");
    });
};
// const promise = fetch("./index.html");

// const promise = fetch("https://www.youtube.com/feed/subscriptions");

// promise
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Запрос завершен");
//   });
