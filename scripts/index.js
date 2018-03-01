'use strict';

//initial page - loads
//once user addds- adding:true
//rating: null ??
// id ??
const store = {
  bookmarks: [
    { id: 1, title: 'Facebook', condensed: true, rating: null},
    { id: 2, title: 'YouTube', condensed: true, rating: null},
    { id: 3, title: 'Instagram', condensed: true, rating: null}
  ],
  adding: false
};

//everytime render fxn runs (user does something) its looking at store to see if should add

function generateBookmarkElement(bookmark, bookmarkIndex, template) {
//returns html element as a string
//dynamically - title
}

function generateBookmarkString(bookmarkList) {
//returns a block of strings
//will map over bookamrkList array and generateBookmarkElement on each item/index
//return -- join
}

function renderBookmarkList() {
  console.log('renderBookmarkList ran');
}

function handleAddButtonClicked() {
  //event listener - listener for add button to be clicked
  //target hidden class!
  console.log('handleAddButtonClicked ran');

}

function addBookmarkToList(bookmarkName) {
  //will push to store.bookmarks
}

// //function is for when user clicks add new bookmark
// //.val...
function handleNewBookmarkSubmit() {
  //event listener 1. 2. 3.render
  console.log('handleNewBookmarkSubmit ran');
}


function getBookmarkIndexFromElement() {

}

function handleRatingDropDownClicked() {
  //event listener - listen for click on rating drop down
  //will need function that...
  console.log('handleRatingDropDownClicked ran');
}


function handleBookmarkDetailsClicked() {
  console.log('handleBookmarkDetailsClicked ran');
}

function handleDeleteBookmarkClicked() {
  console.log('handleDeleteBookmarkClicked ran');

}


function handleBookmarkList() {
  renderBookmarkList();
  handleAddButtonClicked();
  handleNewBookmarkSubmit();
  handleRatingDropDownClicked();
  handleBookmarkDetailsClicked();
  handleDeleteBookmarkClicked();
}
  
$(handleBookmarkList);


 