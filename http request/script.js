"use strict";

const input = document.querySelector("#userLink");

const sentButton = document.querySelector("#sendButton");

const img = document.querySelector("#outPutImg");

const handleClick = () => {
  const inputValue = input.value;
  getData(inputValue);
  // printImage();
};

sentButton.addEventListener("click", handleClick);

const getData = async url => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);

    console.log(response);
    console.log(blob);

    img.setAttribute("src", imageUrl);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`Запрос завершен`);
  }
};
