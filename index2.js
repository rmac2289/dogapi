'use strict';

function getDogImage(userInput) {
  fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
    .then(response => response.json())
    .then(responseJson => {
    displayDog(responseJson)
        })
    
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayDog(responseJson) {
  console.log(responseJson);
  let imgArray = responseJson.message;
  let images = getDogs(imgArray);
  $('.results-img').replaceWith(images);
  $('results').removeClass('hidden');
}

function getDogs(imgArray){
    let valueToReturn = ''; 
    for (let i = 0; i < imgArray.length; i++){
      valueToReturn += `<img src="${imgArray[i]}" class="results-img">`;
    } 
    return valueToReturn;
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let userInput = $('.number').val();
    getDogImage(userInput);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

